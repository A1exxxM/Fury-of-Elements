<template>
    <ul class="rules">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: 'rules-list'
}
</script>

<style lang="scss">
    .rules {
        margin-top: 25px;
        background-color: #fff;
        border: 2px solid black;
        padding: 25px;
        border-radius: 10px;
    }
    @media (max-width:768px) {
        .rules {
            padding-right: 10px;

        }
        
    }
</style>