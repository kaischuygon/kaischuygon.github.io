<script>
import Logo from "./logo.vue";
export default {
  Logo
}
</script>

<template>
  <div class="fixed top-0 w-full bg-background shadow-lg">
    <div class="flex justify-end items-center m-4">
      <a 
        href="#"
        class="mr-auto">
        <Logo class="fill-foreground hover:fill-accent h-full duration-300"/>
      </a>
      <a
        class="hover:text-accent duration-300 m-4 border-b-2 border-transparent hover:border-accent"
        href="./resume.pdf"
        target="_blank"
        >Resume</a
      >
      <a
        class="hover:text-accent duration-300 m-4 border-b-2 border-transparent hover:border-accent"
        href="https://github.com/kaischuygon"
        target="_blank"
        >GitHub</a
      >
    </div>
  </div>
</template>
