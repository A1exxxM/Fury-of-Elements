<template>
    <button class="button">
        <slot></slot>
    </button>
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
        border: 2px solid #fff;
        transition: 0.6s all;
        &:disabled {
            opacity: 0.5;
            cursor: auto;
        }
        &:hover:enabled {
            background-color: #000;
            color: #fff;
            
        }
        &__active {
            background-color: #000;
            border: 2px solid #fff;
            color: #fff;
        }
    }
</style>