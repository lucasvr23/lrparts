import type { MetadataRoute } from "next";
import { noindex } from "@/content/site";

/**
 * Erzeugt public/robots.txt beim statischen Export.
 *
 * Solange NEXT_PUBLIC_NOINDEX=1 gesetzt ist (Kundenvorschau), wird das
 * Crawlen komplett untersagt. Beim echten Livegang die Variable im
 * Workflow entfernen – dann wird die Seite normal freigegeben.
 */
// Bei `output: export` muss die Route ausdrücklich statisch sein.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (noindex) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return { rules: { userAgent: "*", allow: "/" } };
}
