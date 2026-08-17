import type { NextConfig } from "next";

/**
 * Statischer Export für GitHub Pages.
 *
 * Bei einem Projekt-Repo liegt die Seite unter
 *   https://<user>.github.io/<repo>/
 * daher muss ein basePath gesetzt werden. Der Workflow in
 * .github/workflows/deploy.yml setzt NEXT_PUBLIC_BASE_PATH="/lrparts".
 *
 * Mit eigener Domain (CNAME) einfach NEXT_PUBLIC_BASE_PATH leer lassen.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // Der Image-Optimizer braucht einen Server – bei GitHub Pages nicht verfügbar.
    unoptimized: true,
  },
};

export default nextConfig;
