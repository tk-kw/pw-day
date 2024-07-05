<script setup>
import Top from './components/Top.vue';
import HeaderPl from './components/HeaderPl.vue';
import FooterPl from './components/FooterPl.vue';
import Contents from './components/Contents.vue';
</script>

<template>
  <div class="fixed w-full h-full -z-10">
    <!-- <img class="h-full w-full object-cover" src="/img/pc_bk.jpg" alt=""> -->
  </div>
  <div class="flex flex-col items-center w-full m-auto max-w-[728px] overflow-hidden">
    <HeaderPl />
    <Top />
    <Contents />
    <FooterPl />
  </div>
</template>
