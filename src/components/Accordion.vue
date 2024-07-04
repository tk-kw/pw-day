<template>
    <div>
        <button @click="toggleAccordion()" class=" w-full flex font-bold text-xs xs:text-sm sm:text-xl justify-between items-center"
            :aria-expanded="isOpen" :aria-controls="`collapse${_uid}`">
            <slot name="title" />
            <svg enable-background="new 0 0 50 50" height="15px" id="Layer_1" version="1.1" viewBox="0 0 50 50"
                width="15px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" class="sm:w-[8%] sm:h-[8%]">
                <rect fill="none" height="50" width="50" />
                <line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="9" x2="41" y1="25"
                    y2="25" />
                <line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="25" x2="25" y1="9"
                    y2="41" class="transition-all duration-500 transform origin-center" :class="{
                'rotate-90': isOpen,
                'rotate-0': !isOpen,
            }" />
            </svg>
        </button>

        <Transition>
            <div v-show="isOpen" :id="`collapse${_uid}`">
                <slot name="content" />
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>


<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
