<script setup>
import { Card, Links, Header, Footer } from "#components";
</script>

<template>
  <div class="font-body">
    <Links />
    <Header />

    <section
      id="portfolio"
      class="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto"
    >
      <Card
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :category="card.category"
        :desc="card.desc"
        :img="card.img"
        :link="card.link"
      />
    </section>
    <Footer />
  </div>
</template>

<script>
import portfolioData from "../assets/portfolio.json";
export default {
  data() {
    return {
      cards: portfolioData,
    };
  },
};

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  document.documentElement.classList.remove('light')
} else {
  document.documentElement.classList.add('light')
  document.documentElement.classList.remove('dark')

}
// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'
// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
</script>

<style>
body {
  @apply bg-background text-foreground
}
</style>