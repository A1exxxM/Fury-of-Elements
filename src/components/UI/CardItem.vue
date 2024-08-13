<template>
    <li class="card-item">
        <div class="card-item_title"><slot name="card-item_title"></slot></div>
        <div class="card-item_descr"><slot name="card-item_descr"></slot></div>
    </li>
</template>

<script>
export default {
    name: 'card-item'
}
</script>

<style lang="scss">
    .card-item {
        background-color: #fff;
        list-style-type: none;
        border: 2px solid black;
        min-height: 200px;
        border-radius: 10px;
        margin-bottom: 30px;
        &:last-child {
            margin-bottom: 0;
        }
        &_title {
            color: #fff;
            background-color: #000;
            font-size: 25px;
            padding: 17px;
            text-align: left;
        }
        &_descr {
            font-size: 20px;
            padding: 15px;
            margin-top: 10px;
        }
    }
</style>