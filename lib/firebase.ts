import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getFirestore, type Firestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import type { QuoteLeadPayload } from "@/lib/emailjs";

type FirebasePublicConfig = {
  apiKey: string;
  authDomain?: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId?: string;
  appId: string;
  measurementId?: string;
};

function isValidFirebaseConfig(
  cfg: FirebasePublicConfig | null
): cfg is FirebasePublicConfig {
  if (!cfg) return false;
  // Required fields for app initialization
  return Boolean(cfg.apiKey && cfg.projectId && cfg.storageBucket && cfg.appId);
}

function parseFirebaseConfig(): FirebasePublicConfig | null {
  const json = process.env.NEXT_PUBLIC_FIREBASE_CONFIG;

  if (json && json.trim().length > 0) {
    try {
      const cfg = JSON.parse(json) as FirebasePublicConfig;
      if (isValidFirebaseConfig(cfg)) return cfg;
      // JSON présent mais incomplet -> fallback Option B
    } catch {
      // JSON présent mais invalide -> fallback Option B
    }
  }

  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
  const messagingSenderId =process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
  const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

  if (!apiKey || !projectId || !storageBucket || !appId) return null;

  return {
    apiKey,
    projectId,
    storageBucket,
    appId,
    authDomain,
    messagingSenderId,
    measurementId,
  };
}



export function hasFirebaseConfig() {
  return Boolean(parseFirebaseConfig());
}

export function getFirebaseApp(): FirebaseApp | null {
  const cfg = parseFirebaseConfig();
  if (!cfg) return null;
  const existing = getApps()[0];
  return existing ?? initializeApp(cfg);
}

export function getFirebaseStorage(): FirebaseStorage | null {
  const app = getFirebaseApp();
  if (!app) return null;
  return getStorage(app);
}

/**
 * Analytics is browser-only and optional. This returns null on the server,
 * when env vars aren't present, or when analytics isn't supported.
 */
export async function getFirebaseAnalytics() {
  if (typeof window === "undefined") return null;
  const app = getFirebaseApp();
  if (!app) return null;

  const { getAnalytics, isSupported } = await import("firebase/analytics");
  const ok = await isSupported().catch(() => false);
  if (!ok) return null;
  return getAnalytics(app);
}


export function getFirebaseDb(): Firestore | null {
  const app = getFirebaseApp();
  if (!app) return null;
  return getFirestore(app);
}

export async function saveQuoteLeadToFirestore(payload: QuoteLeadPayload) {
  if (!hasFirebaseConfig()) {

    return { ok: false as const, reason: "firebase_not_configured" as const };
  }

  const db = getFirebaseDb();
  if (!db) {
    return { ok: false as const, reason: "db_null" as const };
  }

  const ref = await addDoc(collection(db, "contact_data"), {
    ...payload,


    createdAt: serverTimestamp(),
    source: "contact_free_quote",
    status: "new",
  });

  return { ok: true as const, id: ref.id };
}
