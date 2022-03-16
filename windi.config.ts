import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  attributify: true,
  theme: {
    extend: {
      backgroundImage: {
        flag: 'url(/src/assets/flag.svg)',
      },
    },
  },
});
