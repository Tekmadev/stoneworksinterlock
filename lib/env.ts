export function requiredPublicEnv(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required env var: ${key}`);
  return value;
}

export function optionalPublicEnv(key: string) {
  return process.env[key] || "";
}


