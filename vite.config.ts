/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
 plugins: [
  react()
 ]
});
