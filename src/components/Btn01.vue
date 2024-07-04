<template>
    <div>
        <a :href="props.link">
            <button :class="props.color" class="w-[100%] flex items-center justify-between text-white py-1 px-3 sm:py-2 sm:px-6 text-[0.5rem] 2s:text-sm sm:text-xl rounded-full font-bold">
                <span>商品ページへ</span>
                <span class="w-[13%] ml-3 sm:ml-6"><img src="/img/items/btn-icon.png"></span>
            </button>
        </a>
    </div>
</template>

<script setup>
const props = defineProps(['link','color']);

</script>