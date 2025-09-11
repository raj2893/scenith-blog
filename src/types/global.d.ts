export {};

declare global {
  interface Window {
    google: any; // or you can install @types/google.accounts for better typing
  }
}
