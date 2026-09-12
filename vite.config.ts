import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Chemins relatifs : le site fonctionne aussi bien à la racine d'un domaine
  // que dans un sous-dossier (GitHub Pages sert le projet sous /togo-maths/).
  base: "./",
  server: { port: 5174, host: true },
});
