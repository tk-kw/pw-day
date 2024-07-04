<script setup>
import Top from './components/Top.vue';
import NavBtn from './components/NavBtn.vue';
import HeaderPl from './components/HeaderPl.vue';
import Categorys from './components/Categorys.vue';
import FooterPl from './components/FooterPl.vue';
</script>

<template>
  <div class="fixed w-full h-full -z-10">
    <!-- <img class="h-full w-full object-cover" src="/img/pc_bk.jpg" alt=""> -->
  </div>
  <div class="flex flex-col w-full m-auto max-w-[728px] overflow-hidden">
      <div class="pop-nav hide flex gap-1 fixed w-full max-w-[728px] m-auto left-0 right-0 top-0 z-50 shadow-lg">
        <NavBtn/>
      </div>
      <div class="header">
        <HeaderPl />
        <Top />
        </div>
      <Categorys />
    <FooterPl />
  </div>
</template>
