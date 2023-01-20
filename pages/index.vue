<script setup>
  import { Card, Header, Footer } from "#components";
</script>

<template>
  <div class="font-body">
    <Header />

    <section
      id="portfolio"
      class="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto"
    >
      <Card
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :desc="card.desc"
        :tools="card.tools"
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
</script>

<style>
body {
  background-color: rgb(var(--background));
  color: rgb(var(--foreground));
}

</style>