<template>
    <section class="elems__types container">
        <h2 class="elems__types-title">Стихии</h2>
        <div class="elems__types-descr">Описание системы стихий</div>
        <ul class="elems__types-items">
            <li class="elems__types-items_item" :key="item" v-for="item in $store.state.elements">
                <img class="elems__types-items_img" :src="item.img" :alt="item.title">
                <div class="elems__types-items_title">{{item.title}}</div>
            </li>
        </ul>
        
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .elems__types {
        padding: 100px 0;
        &-title {
            font-size: 50px;
        }
        &-items {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            margin: 0 auto;
            margin-top: 150px;
            &_item {
                list-style-type: none;
            }
            &_img {
                width: 220px;
                height: 220px;
                border-radius: 15%;
            }
            &_title {
                font-size: 25px;
                margin-top: 30px;
            }
            
        }
        
    }
</style>
