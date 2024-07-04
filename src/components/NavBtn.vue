<template>
    <div class="fixed bottom-[2%] right-0 grid justify-items-end">
        <a class="w-2/3 block pr-[6%]" href="#">
            <img src="/img/top_26.png">
        </a>
    </div>
    <div class="w-full">
        <div class="flex gap-[1px] bg-white w-full">
            <div v-for="item in categorys" class="w-full">
                <a :href="item.id">
                    <div class="relative hover:opacity-70 transition-all py-2 px-4">
                        <img :src="item.bgImg" class="w-full m-auto" alt="">
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const categorys = ref([
    {
        id: "#01",
        bgImg: "/img/top_37.png",
    },
    {
        id: "#02",
        bgImg: "/img/top_38.png",
    },
    {
        id: "#03",
        bgImg: "/img/top_39.png",
    },
]);

</script>