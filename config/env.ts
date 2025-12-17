if (!process.env.NEXT_PUBLIC_META_PIXEL_ID) {
  console.warn("⚠️ NEXT_PUBLIC_META_PIXEL_ID is not set");
}

if (!process.env.NEXT_PUBLIC_GA_TRACKING_ID) {
  console.warn("⚠️ NEXT_PUBLIC_GA_TRACKING_ID is not set");
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? "";
