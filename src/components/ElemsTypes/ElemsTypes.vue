<template>
    <section class="elems__types container">
        <page-title>Стихии</page-title>
        <subtitle-vue>Ключевая особенность FoE: стихии и их взаимодействия между собой.<br> Ваш персонаж будет обладать способностью накладывать стихийные метки, а также при повышении уровня освоит подкасс, принадлежащий к одной из стихий, представленных ниже</subtitle-vue>
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
        .elems__types {
            &-items {
                &_img {
                width: 150px;
                height: 150px;
                }
            }
            
        }
    }
    @media (max-width: 992px) {
        .elems__types {
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
        .elems__types {
            &-items {
                &_img {
                width: 170px;
                height: fit-content;
                }
            }
            
        }
    }
    @media (max-width: 576px) {
        .elems__types {
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
