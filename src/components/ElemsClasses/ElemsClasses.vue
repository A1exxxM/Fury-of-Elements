<template>
    <section class="elems__classes container">
        <page-title>Классы</page-title>
      <subtitle-vue>Описание общей концепции классов</subtitle-vue>
      <ul class="elems__classes-items">
        <li class="elems__classes-items_item" :key="item" v-for="item in $store.state.classes">
                <img class="elems__classes-items_img" :src="item.img" :alt="item.title">
                <div class="elems__classes-items_title">{{item.title}}</div>
        </li>
      </ul> 
    </section>
</template>
  
<script>
  export default {
  
  }
</script>
  
<style lang="scss" scoped>
    .elems__classes { 
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