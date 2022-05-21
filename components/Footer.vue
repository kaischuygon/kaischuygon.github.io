<script>
import Logo from "./logo.vue";
export default {
  Logo
}
</script>

<template>
    <div class="bottom-0 flex justify-center items-center my-4">
        <Logo class="fill-rose-300 h-full"/>
        <div class="flex-0 flex flex-col text-slate-200 mx-4 text-xs md:text-base">
            <span>Contact me: <a href="mailto: kai.schuyler@gmail.com" class=" text-rose-300 hover:text-rose-400 border-b-2 border-transparent hover:border-rose-400 duration-300">kai.schuyler@gmail.com</a></span>
            <span>Built using Nuxt and Tailwind</span>
        </div>
    </div>
</template>