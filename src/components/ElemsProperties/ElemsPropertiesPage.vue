<template>
    <section class="properties container page animate__animated animate__fadeIn">
        <page-title>Озарения</page-title>
        <subtitle-vue>{{insightsList.descr}}</subtitle-vue>
        <rules-list>
            <rules-item :key="item" v-for="item in insightsRules">{{ item }}</rules-item>
        </rules-list>
        <h3 class="properties__subtitle">Виды озарений</h3>
        <div class="properties__wrapper">
            <ul class="properties__types">
                <li class="properties__types-item" @click="changeCurrentInsight(item)"
                :key="item" v-for="item in insightsList.items">{{ item.title }} <span class="properties__types-item_underline" :class="{'properties__types-item_underline-active': item.id == insightsCurrentItem}"></span></li>
            </ul>
            <div class="properties__preview">{{insightsList.items[insightsCurrentItem].descr}}</div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['insightsList', 'insightsRules', 'insightsCurrentItem'])
    },
    methods: {
        changeCurrentInsight(item) {
            this.$store.commit('changeCurrentInsight', item);
        }
    }
}
</script>

<style scoped lang="scss">
    .properties {
        &__subtitle {
            margin-top: 50px;
            font-size: 25px;
        }
        &__wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            margin: 0 auto;
            margin-top: 25px;
            height: 300px;
            border-radius: 10px;
            overflow: hidden;
        }
        &__preview {
            background-color: #fff;
            width: 80%;
            min-height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px;
            font-size: 20px;
        }
        &__types {
            width: 20%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            height: 300px;
            background-color: #000;
            color: #fff;
            padding: 25px 0;
            &-item {
                list-style-type: none;
                font-size: 25px;
                cursor: pointer;
                width: 80%;
                &_underline {
                    display: block;
                    width: 0%;
                    background-color: #fff;
                    height: 2px;
                    margin-top: 10px;
                    transition: 0.6s all;
                    &-active {
                        width: 100%;
                    }
                }
                &:hover {
                    .properties__types-item_underline {
                        width: 100%;
                    }
                }
            }
        }
    }
    @media (max-width: 992px) {
        .properties {
            &__wrapper {
                width: 100%;
            }
        }
    }
    @media (max-width: 768px) {
        .properties {
            &__types {
                width: 30%;
            }
            &__preview {
                width: 70%;
            }
        }
    }
    @media (max-width: 576px) {
        .properties {
            
            &__types {
                &-item {
                    font-size: 15px;
                }
            }
            &__preview {
                font-size: 17px;
                padding: 5px;
            }
        }
    }

</style>