<script>
import Logo from "./logo.vue";
export default {
  Logo
}
</script>

<template>
<section id="intro" class="top-0 w-full h-screen bg-fixed bg-cover flex justify-center items-center">
  <div class="flex flex-col md:flex-row justify-center items-center h-1/4">
        <img src="/logo.png" class="h-full mb-4 md:mr-4" />
        <div class="text-slate-100 mb-4 md:ml-4">
          <span class="text-lg md:text-2xl lg:text-4xl bg-clip-text text-slate-200">
            Hello, my name is <br>
            <span class="text-2xl md:text-4xl lg:text-6xl font-display">Kai Schuyler Gonzalez,</span> <br>
            I'm a software engineer and designer.
          </span>
        </div>
      </div>
    </section>
</template>