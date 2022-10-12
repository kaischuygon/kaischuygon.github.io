<script>
</script>

<template>
<div class="w-full h-screen bg-fixed bg-cover flex justify-center items-center snap-start">
  <div class="flex justify-end w-full items-center m-4 top-0 absolute">
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
  <div class="flex flex-col md:flex-row justify-center items-center h-1/4">
    <Logo class="fill-primary h-full"/>
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