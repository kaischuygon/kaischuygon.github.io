<script setup>
import { Card, Links, Header, Footer } from "#components";
</script>

<template>
  <div class="font-body">
    <Links />
    <Header />

    <section
      id="portfolio"
      class="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto text-slate-100"
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
</script>
