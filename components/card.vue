<script setup></script>

<template>
  <div class="w-full rounded my-2 bg-white dark:bg-black shadow" >
    <div class="flex-1 flex flex-col md:flex-row p-4">
      <div class="md:w-1/4 md:text-right self-center">
          <a class="font-display text-primary hover:brightness-50 dark:hover:brightness-150 duration-300 font-bold text-lg lg:text-xl xl:text-2xl"
            :href="`${link}`"
            target="_blank">
            {{ title }}
          </a>  
      </div>
      <div class="flex-1 flex-grow flex flex-col justify-between p-4">
        <span class="flex-1 mb-4">{{ desc }}</span>
        <span class="flex-1 text-xs text-accent text-center font-display">{{ tools }}</span>
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
