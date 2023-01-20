<script setup>
import { navbar } from "#components";
</script>

<template>
<div class="w-full h-screen bg-fixed bg-cover flex justify-center items-center snap-start">
  <navbar/>
  <div class="flex flex-col md:flex-row justify-center items-center md:h-1/4">
    <!-- <Logo class="fill-primary w-3/4 mb-2 md:mb-0 md:h-full md:w-auto"/> -->
    <img src="profile.png" class="w-3/4 mb-2 md:mb-0 md:h-full md:w-auto"/>
    <div class="mb-4 md:ml-4 md:w-2/4">
      <span class="text-md md:text-lg lg:text-2xl">
        Hello, my name is <br>
        <span class="text-2xl md:text-4xl lg:text-6xl font-display font-black text-accent">Kai Schuyler Gonzalez,</span> <br>
        I'm a software engineer and designer.
      </span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      // any component data
    }
  },
}
</script>