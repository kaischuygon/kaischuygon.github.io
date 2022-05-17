<script setup></script>

<template>
  <div
    class="flex flex-col md:flex-row w-full bg-slate-900/80 backdrop-blur rounded my-2 shadow"
  >
    <!-- <img :src="`${img}`" class="sm:rounded md:rounded-l object-cover h-60 w-full md:w-60" /> -->
    <div class="flex-grow flex flex-col justify-between p-4">
      <div class="block font-display md:text-lg lg:text-xl xl:text-2xl">
        <a
          class="hover:text-rose-400 border-b-2 border-transparent hover:border-rose-400 duration-300"
          :href="`${link}`"
          target="_blank"
        >
          {{ title }}
        </a>
      </div>
      <div class="">{{ desc }}</div>
      <div
        class="text-xs md:text-sm lg:text-md xl:text-base text-slate-300 place-self-end"
      >
        {{ category }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    category: String,
    desc: String,
    img: String,
    link: String,
  },
};
</script>
