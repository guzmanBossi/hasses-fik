import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from 'astro-sanity';
import image from '@astrojs/image';
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sanity({
    projectId: 'rd0jbcna',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2021-03-25' // use a UTC date string
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), alpinejs()]
});