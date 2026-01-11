import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getStorage, type FirebaseStorage } from "firebase/storage";

type FirebasePublicConfig = {
  apiKey: string;
  authDomain?: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId?: string;
  appId: string;
};

function parseFirebaseConfig(): FirebasePublicConfig | null {
  const json = process.env.NEXT_PUBLIC_FIREBASE_CONFIG;
  if (json) {
    try {
      return JSON.parse(json) as FirebasePublicConfig;
    } catch {
      return null;
    }
  }

  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
  const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;

  if (!apiKey || !projectId || !storageBucket || !appId) return null;

  return {
    apiKey,
    projectId,
    storageBucket,
    appId,
    authDomain,
    messagingSenderId,
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


