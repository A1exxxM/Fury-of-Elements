<template>
    <li class="rules__item">
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'rules-item'
}
</script>

<style lang="scss">
    .rules__item {
        width: fit-content;
        margin-top: 10px;
    }
</style>