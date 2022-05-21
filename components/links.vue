<script>
import Logo from "./logo.vue";
export default {
  Logo
}
</script>

<template>
  <div class="fixed top-0 w-full bg-slate-800 shadow-lg">
    <div class="flex justify-end items-center m-4">
      <a 
        href="#"
        class="mr-auto">
        <Logo class="fill-slate-100 hover:fill-rose-400 h-full duration-300"/>
      </a>
      <a
        class="text-slate-100 hover:text-rose-400 duration-300 m-4 border-b-2 border-transparent hover:border-rose-400"
        href="./resume.pdf"
        target="_blank"
        >Resume</a
      >
      <a
        class="text-slate-100 hover:text-rose-400 duration-300 m-4 border-b-2 border-transparent hover:border-rose-400"
        href="https://github.com/kaischuygon"
        target="_blank"
        >GitHub</a
      >
    </div>
  </div>
</template>
