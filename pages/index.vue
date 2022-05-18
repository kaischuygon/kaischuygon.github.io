<script setup>
import { Card, Links } from "#components";
</script>

<template>
  <div class="font-body">
    <Links />
    <section id="intro" class="bg-liquid bg-fixed h-screen flex justify-center items-center">
      <div class="flex-1 flex justify-center items-center">
        <div class="text-slate-100">
          <span class="text-lg md:text-2xl lg:text-4xl bg-clip-text text-slate-200">
            Hello, my name is <br>
            <span class="text-2xl md:text-4xl lg:text-6xl font-display">Kai Schuyler Gonzalez,</span> <br>
            I'm a software engineer and designer.
          </span>
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
