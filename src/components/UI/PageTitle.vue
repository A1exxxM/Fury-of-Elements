<template>
    <h2 class="page__title"><slot></slot></h2>
</template>

<script>
export default {
    name: 'page-title'
}
</script>

<style lang="scss">
    .page__title {
        font-size: 45px;
    }
</style>