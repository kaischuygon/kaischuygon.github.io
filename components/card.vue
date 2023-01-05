<script setup></script>

<template>
  <div class="w-full bg-foreground/10 rounded my-2 shadow" >
    <div class="flex-1 flex flex-col md:flex-row p-4">
      <div class="md:w-1/4 md:text-right self-center">
          <a class="font-display text-primary hover:text-accent duration-300 font-bold text-xl lg:text-2xl xl:text-3xl"
            :href="`${link}`"
            target="_blank">
            {{ title }}
          </a>  
      </div>
      <div class="flex-1 flex-grow flex flex-col justify-between p-4">
        <span class="flex-1 mb-4">{{ desc }}</span>
        <span class="flex-1 text-sm opacity-80 text-center">{{ tools }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    tools: String,
    link: String,
  },
};
</script>
