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
        width: 100%;
        text-align: left;
        margin-top: 10px;
        font-size: 20px;
    }
</style>