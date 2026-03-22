// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      PUBLIC_MESSAGE_ROUTER_URL: envField.string({
        context: 'client',
        access: 'public',
        default: 'http://localhost:3000/v1/submit',
      }),
      PUBLIC_MESSAGE_ROUTER_API_KEY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
});