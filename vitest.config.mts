import { defineConfig } from 'vitest/config';
import { config } from "dotenv";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    env: {
      ...config({ path: "./.env" }).parsed,
    },
  },
})