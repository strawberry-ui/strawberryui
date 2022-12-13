<template>
    <details :class="rootClass">
    <slot></slot>
    <div :class="class">Something small enough to escape casual notice.</div>
</details>
</template>

<script setup>

const props = defineProps({
    class: String,
    rootClass: String,
})
</script>