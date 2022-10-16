<template>
<div class="w-full h-screen bg-fixed bg-cover flex justify-center items-center snap-start">
  <div class="flex justify-end w-full items-center m-4 top-0 absolute">
    <button
      class="text-accent mr-auto duration-300 m-4 text-3xl font-emoji hover:filter hover:brightness-75 dark:hover:brightness-125"
      id="themeButton"
      @click="themeSwitch"
      ></button
    >
    <a
      class="text-foreground hover:text-primary duration-300 m-4 border-b-2 border-transparent hover:border-primary"
      href="./resume.pdf"
      target="_blank"
      >Resume</a
    >
    <a
      class="text-foreground hover:text-primary duration-300 m-4 border-b-2 border-transparent hover:border-primary"
      href="https://github.com/kaischuygon"
      target="_blank"
      >GitHub</a
    >
  </div>
  <div class="flex flex-col md:flex-row justify-center items-center md:h-1/4">
    <Logo class="fill-primary w-3/4 mb-2 md:mb-0 md:h-full md:w-auto"/>
    <div class="mb-4 md:ml-4">
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
    methods: {
      themeSwitch() {
        if(document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark')
          document.documentElement.classList.add('light')
          localStorage.theme = 'light'
          document.querySelector('#themeButton').innerHTML = '🌚'
        } else if(document.documentElement.classList.contains('light')) {
          document.documentElement.classList.remove('light')
          document.documentElement.classList.add('dark')
          localStorage.theme = 'dark'
          document.querySelector('#themeButton').innerHTML = '🌞'
        }
      }
    },
    mounted() {
      if(document.documentElement.classList.contains('dark')) {
        document.querySelector('#themeButton').innerHTML = '🌞'
      } else if(document.documentElement.classList.contains('light')) {
        document.querySelector('#themeButton').innerHTML = '🌚'
      }
    }
  }; 
</script>