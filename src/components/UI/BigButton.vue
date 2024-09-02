<template>
    <li class="button">
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'big-button'
}
</script>

<style lang="scss">
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        width: 200px;
        height: 60px;
        background-color: #fff;
        margin: 0 10px;
        cursor: pointer;
        color: #000;
        &__active {
            background-color: #000;
            border: 2px solid #fff;
            color: #fff;
        }
    }
</style>