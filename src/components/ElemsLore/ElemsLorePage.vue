<template>
    <section class="lore page container animate__animated animate__fadeIn">
        <page-title>Лор</page-title>
        <div class="lore__preview">Как и эта настольная ролевая игра - мир игры только начинает своё развитие. Ниже будут описаны основные фрагменты в истории Дайтона, именно так называется наш мир. Но помните: это лишь описание игрового мира, вы вольны сами писать свои невероятные истории. Возможно в будущем они будут расширять общий лор Дайтона, как настоящие легенды. Если у вас есть свои идеи для миров - смело развивайте их. Возможно вы захотите создать новый материк в рамках мира Дайтон со своими законами и правилами, а может даже и поменять стилистику под времена Постапокалипсиса современности. Я считаю, что систему FoE можно адаптировать под различные эпохи и стилистики, в планах создать необходимый набор инструментов для ДМа под реализацию этих задач. Также в планах создать библиотеку с ваншотами и компаниями, которые вы сможете адаптировать и свободно использовать в своих партиях</div>
        <div class="lore__world" :key="item" v-for="item in $store.state.lore.world">
            <h3 class="lore__world-title">{{ item.title }}</h3>
            <div class="lore__world-wrapper">
                <img class="lore__world-map" :src="item.img"  alt="#">
                <div class="lore__world-descr">{{ item.descr }}</div>
            </div>
            
        </div>
        <div class="lore__countries" :key="country" v-for="country in $store.state.lore.countries">
            <h2 class="lore__countries-title">{{ country.title }}</h2>
            <img :src="country.img" alt="#" class="lore__countries-img">
            <div class="lore__countries-descr">{{ country.descr }}</div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .lore {
        text-align: center;
        color: #fff;
        &__title {
            font-size: 50px;
        }
        &__preview {
            font-size: 20px;
        }
        &__world {
            margin-top: 150px;
            
            &-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 90%;
                margin: 0 auto;
            }
            &-map {
                width: 500px;
                height: 500px;
                
            }
            &-descr {
                font-size: 25px;
                padding: 20px;
            }
            &-title {
                font-size: 35px;
            }
        }
        &__countries {
            margin-top: 100px;
            &-img {
                width: 80%;
            }
            &-descr {
                font-size: 20px;
                margin-top: 50px;
            }
        }
    }
    @media (max-width: 1400px) {
        .lore {
            &__world {
                &-wrapper {
                    flex-direction: column;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .lore {
            &__countries {
                &-img {
                    width: 100%;
                }
            }
            &__world {
                &-wrapper {
                    width: 100%;
                }
                &-map {
                    width: 100%;
                    height: fit-content;
                }
            }
        }
    }
</style>