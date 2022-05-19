<script setup></script>

<template>
  <div class="flex flex-col md:flex-row w-full bg-slate-900 rounded my-2 shadow" >
    <div class="flex-grow flex flex-col justify-between p-4">
      <div class="flex justify-between items-center md:text-lg lg:text-xl xl:text-2xl">
          <a class="flex-0 font-display hover:text-rose-400 border-b-2 border-transparent hover:border-rose-400 duration-300"
            :href="`${link}`"
            target="_blank">
            {{ title }}
          </a>
        <span class="text-xs md:text-sm lg:text-md xl:text-base text-slate-300 place-self-end">
          {{ category }}
        </span>
      </div>
      <img :src="`${img}`" class="rounded w-auto my-4" />
      <span class="flex-0">{{ desc }}</span>
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
