<template>
    <div class="font-display flex right-0 justify-end items-center m-4 top-0 absolute bg-white dark:bg-black rounded-md px-2 shadow">
        <a
          class="text-primary hover:brightness-50 dark:hover:brightness-150 duration-300 m-4"
          href="./blog/"
          target="_blank"
          >Blog</a
        >
        <a
          class="text-primary hover:brightness-50 dark:hover:brightness-150 duration-300 m-4"
          href="./resume.pdf"
          target="_blank"
          >Resume</a
        >
        <a
          class="text-primary hover:brightness-50 dark:hover:brightness-150 duration-300 m-4"
          href="https://github.com/kaischuygon"
          target="_blank"
          >GitHub</a
        >
        <button
          class="text-accent mr-auto duration-300 m-4 text-3xl font-emoji hover:filter hover:brightness-75 dark:hover:brightness-125"
          id="themeButton"
          @click="themeSwitch"
          ></button
        >
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