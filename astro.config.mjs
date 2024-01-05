import { defineConfig, passthroughImageService } from 'astro/config';
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://kaischuygon.github.io',
  integrations: [icon(), tailwind()],
  image: {
    service: passthroughImageService()
  }
});