<template>
    <summary :class="class">Details</summary>
</template>

<script setup>

const props = defineProps({
    class: String
})

</script>

<style scoped>
summary {
    list-style-type: none;
}

details[open] summary{
    border-bottom-width: 1px;
}
</style>