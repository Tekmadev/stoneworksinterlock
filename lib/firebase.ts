import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import {
  getFirestore,
  type Firestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
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
  if (json) {
    try {
      const cfg = JSON.parse(json) as FirebasePublicConfig;
      return isValidFirebaseConfig(cfg) ? cfg : null;
    } catch {
      return null;
    }
  }

  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
  const messagingSenderId =
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
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

export function getFirestoreDb(): Firestore | null {
  const app = getFirebaseApp();
  if (!app) return null;
  return getFirestore(app);
}

/**
 * Analytics is browser-only and optional. This returns null on the server,
 * when env vars aren't present, or when analytics isn't supported.
 */
export async function getFirebaseAnalytics() {
  if (typeof window === "undefined") return null;
  const app = getFirebaseApp();
  if (!app) return null;

  // Analytics can throw in non-browser contexts; `isSupported()` is the safe guard.
  const { getAnalytics, isSupported } = await import("firebase/analytics");
  const ok = await isSupported().catch(() => false);
  if (!ok) return null;
  return getAnalytics(app);
}

/**
 * Saves a quote submission to Firestore collection "quotes"
 * Returns the document ID if successful, null if Firestore isn't configured or fails
 */
export async function saveQuoteToFirestore(
  payload: QuoteLeadPayload,
): Promise<string | null> {
  const db = getFirestoreDb();
  if (!db) {
    console.warn("Firestore not configured. Quote data will not be saved to database.");
    return null;
  }

  try {
    const quoteData = {
      ...payload,
      createdAt: serverTimestamp(),
      status: "pending",
    };

    const docRef = await addDoc(collection(db, "quotes"), quoteData);
    return docRef.id;
  } catch (error) {
    console.error("Error saving quote to Firestore:", error);
    // Don't throw - allow form to show success even if Firestore fails
    return null;
  }
}
