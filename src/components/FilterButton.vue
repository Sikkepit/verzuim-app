<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const selectedOptions = ref<string[]>([]);
const open = ref(false);
const menuWrapper = ref<HTMLElement | null>(null);

defineProps<{
    options: string[];
}>();

defineExpose({
    selectedOptions
});

const handleClickOutside = (event: Event | null) => {
    if (!event) return;
    if (
        menuWrapper.value &&
        !menuWrapper.value.contains(event.target as HTMLElement)
    ) {
        open.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>
<template>
    <div ref="menuWrapper" class="relative">
        <button class="btn" @click="open = !open">
            <span>
                <slot />
            </span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="icon size-3"
                :class="{ 'icon--rotate': open }"
            >
                <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
            </svg>
        </button>

        <div
            class="filter__dropdown"
            :class="{ 'filter__dropdown--open': open }"
        >
            <div class="overflow-hidden">
                <div class="filter__list-wrapper">
                    <label
                        v-for="option in options"
                        :key="option"
                        class="flex items-center gap-2"
                    >
                        <input
                            type="checkbox"
                            v-model="selectedOptions"
                            :value="option"
                        />{{ option }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
