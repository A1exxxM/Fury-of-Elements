<template>
    <section class="elems__classes container">
        <page-title>Классы</page-title>
      <subtitle-vue>На данный момент представлены 4 класса, в дальнейших обновлениях их количество будет увеличиваться<br> Каждый класс обладает своей врожденной особенностью, а также получит 3 уникальных подкласса, которые расширяют его возможности</subtitle-vue>
      <ul class="elems__classes-items">
        <li class="elems__classes-items_item" :key="item" v-for="item in classesList">
                <img class="elems__classes-items_img" :src="item.img" :alt="item.title">
                <div class="elems__classes-items_title">{{item.title}}</div>
        </li>
      </ul> 
    </section>
</template>
  
<script>
  export default {
  computed: {
    classesList() {
        return this.$store.getters.classesList
    }
  }
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
    @media (max-width: 1400px) {
        .elems__classes {
            &-items {
                &_img {
                width: 150px;
                height: 150px;
                }
            }
            
        }
    }
    @media (max-width: 992px) {
        .elems__classes {
            &-items {
                flex-wrap: wrap;
                &_img {
                margin-top: 15px;
                width: 200px;
                height: 200px;
                }
            }
            
        }
    }
    @media (max-width: 992px) {
        .elems__classes {
            &-items {
                &_img {
                margin-top: 15px;
                width: 170px;
                height: fit-content;
                }
            }
            
        }
    }
    @media (max-width: 576px) {
        .elems__classes {
            &-items {
                width: 100%;
                &_img {
                    margin-top: 40px;
                    width: 100%;
                }
            }
        }
    }
</style>