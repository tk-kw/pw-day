<template>
    <div class="grid bg-white items-center gap-6">
        <div class="w-full col-start-1 row-start-1">
            <img src="/img/pow_1day_contentsBG.png">
        </div>
        <div class="col-start-1 row-start-1 px-[9%]">
            <div v-for="item in items">
                <div class="relative pb-[3%]">
                    <div :class="item.acc_class" class="lazy loading scale">
                        <img :src="item.acc">
                    </div>
                    <div class="w-full relative z-100 hover:opacity-80 hover:translate-y-2 lazy loading up">
                        <a :href="item.link">
                            <img :src="item.main">
                        </a>
                    </div>
                    <div :class="item.pow_class"  class="lazy loading right">
                        <img :src="item.pow">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        acc: "/img/pow_1day_contents13.png",
        acc_class:"w-full absolute top-[50%] left-0",
        main: "/img/pow_1day_contents15.png",
        pow: "/img/pow_1day_contents12.png",
        pow_class: "w-2/3 absolute -top-[4%] -right-[45%]",
        link: "https://item.rakuten.co.jp/oga18e/spirulina_powder/"
    },
    {
        acc: "/img/pow_1day_contents17.png",
        acc_class:"w-1/6 absolute top-[30%] left-0",
        main: "/img/pow_1day_contents18.png",
        pow: "/img/pow_1day_contents16.png",
        pow_class: "w-2/3 absolute top-[4%] -right-[45%]",
        link: "https://item.rakuten.co.jp/oga18e/h00100101/"
    },
    {
        acc: "/img/pow_1day_contents20.png",
        acc_class:"w-[130%] absolute -top-[5%] -left-[14%]",
        main: "/img/pow_1day_contents21.png",
        pow: "/img/pow_1day_contents19.png",
        pow_class: "w-2/3 absolute -top-[3%] -right-[40%]",
        link: "https://item.rakuten.co.jp/oga18e/whitebeans_powder/"
    },
    {
        acc: "/img/pow_1day_contents23.png",
        acc_class:"w-1/6 absolute top-[60%] left-0",
        main: "/img/pow_1day_contents24.png",
        pow: "/img/pow_1day_contents22.png",
        pow_class: "w-3/4 absolute -top-[5%] -right-[55%]",
        link: "https://item.rakuten.co.jp/oga18e/h00101001/"
    },
    {
        main: "/img/pow_1day_contents26.png",
        pow: "/img/pow_1day_contents25.png",
        pow_class: "w-2/3 absolute top-[3%] -right-[45%]",
        link: "https://item.rakuten.co.jp/oga18e/h00108201/"
    },
    {
        acc: "/img/pow_1day_contents28.png",
        acc_class:"w-1/5 absolute top-[50%] -left-[5%]",
        main: "/img/pow_1day_contents30.png",
        pow: "/img/pow_1day_contents27.png",
        pow_class: "w-4/5 absolute top-[0%] -right-[55%]",
        link: "https://item.rakuten.co.jp/oga18e/obako/"
    },
    {
        acc: "/img/pow_1day_contents32.png",
        acc_class:"w-1/6 absolute top-[50%] -left-[3%]",
        main: "/img/pow_1day_contents33.png",
        pow: "/img/pow_1day_contents31.png",
        pow_class: "w-1/3 absolute top-[8%] -right-[12%]",
        link: "https://item.rakuten.co.jp/oga18e/glycine_powder/"
    },
])
</script>