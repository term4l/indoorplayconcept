export const SITE_URL = "https://indoorplayconcept.com";
export const SITE_NAME = "IndoorPlayConcept";
export const LOGO_URL = `${SITE_URL}/wp-content/uploads/2025/11/Logo-HorizontalonBlack.svg`;
export const GOOGLE_SITE_VERIFICATION = "QaPuAUx58Z23NwGKtfzgLEa6ocJZruPYBSZuwhL4S28";

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();
