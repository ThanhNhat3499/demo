import en from "./en.json";
import thai from "./thai.json";

interface Resources {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const resources: Resources = { "en": en,"thai": thai };