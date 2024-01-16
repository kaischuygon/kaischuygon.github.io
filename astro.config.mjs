import { defineConfig, passthroughImageService } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  site: 'https://kaischuygon.github.io',
  integrations: [icon(), tailwind(), mdx()],
  image: {
    service: passthroughImageService()
  }
});