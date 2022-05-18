<script setup>
import { Card, Links } from "#components";
</script>

<template>
  <div class="bg-liquid bg-fixed font-body">
    <Links />
    <section id="intro" class="h-screen flex justify-center items-center">
      <div class="flex-1 flex justify-center items-center">
        <div class="text-slate-100">
          <div class="text-lg md:text-2xl lg:text-4xl">Hello, my name is</div>
          <div class="text-2xl md:text-4xl lg:text-6xl font-display">
            Kai Schuyler Gonzalez
          </div>
          <div class="text-lg md:text-2xl lg:text-4xl">
            I'm a software engineer and designer.
          </div>
        </div>
      </div>
    </section>

    <section
      id="portfolio"
      class="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto text-slate-100"
    >
      <Card
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :category="card.category"
        :desc="card.desc"
        :img="card.img"
        :link="card.link"
      />
    </section>
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
