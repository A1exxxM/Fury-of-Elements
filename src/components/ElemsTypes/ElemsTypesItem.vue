<template>
    <section class="type page container">
        
        <div class="type__lore">
            <div class="type__lore-preview">
                <img class="type__lore-preview_img" :src="typesCurrentElement.img" alt="#">
                <h2 class="type__lore-preview_title">{{ typesCurrentElement.title }}</h2>
            </div>
            <div class="type__lore-history">{{ typesCurrentElement.lore }}</div>
        </div>

        <div class="type__preview" :style="{backgroundColor: hoverColor}">{{ typesCurrentElement.descr }}</div>
        
        <div class="type__combinations">
            <h3 class="type__combinations-title">Комбинации</h3>
            <rules-list>
                <rules-item>Ниже представлены комбинации с другими элементами, в которых {{ typesCurrentElement.title }} вызывает сопряжение стихий</rules-item>
            </rules-list>
            <ul class="type__combinations-btns">
                
                <big-button :key="combination"
                :class="{'button__active' : combination.id == typesCurrentCombination}"
                :style="{backgroundColor: hoverColor, borderColor: typesActiveCombinations[combination.id]}"
                v-for="combination in typesCurrentElement.combination"
                @click="changeActiveCombination(combination)"
                >
                {{ combination.title  }}
                </big-button>
            </ul>
            <div class="type__combinations-result" :style="{backgroundColor: hoverColor}">
                <div class="type__combinations-result_title">{{ typesCurrentElement.combination[typesCurrentCombination].name }}</div>
                <div class="type__combinations-result_descr">{{ typesCurrentElement.combination[typesCurrentCombination].descr }}</div>
                
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed : {
        ...mapGetters(['hoverColor','typesCurrentElement','typesCurrentCombination','typesActiveCombinations'])
    },
    methods: {
        changeActiveCombination(combination) {
            this.$store.commit('changeActiveCombination', combination);
        },
    },
    unmounted() {
        this.$store.commit('clearColors')
    }
}
</script>

<style scoped lang="scss">
    .type {
        &__title {
            font-size: 35px;
        }
        &__preview {
            background-color: #fff;
            border: 2px solid black;
            border-radius: 10px;
            padding: 15px;
            font-size: 20px;
            margin-top: 50px;
        }
        &__lore {
            margin-top: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-preview {
                display: flex;
                align-items: center;
                flex-direction: column;
                width: 50%;
                &_img {
                    width: 300px;
                    height: 300px;
                }
                &_title {
                    font-size: 35px;
                }
            }
            &-history {
                width: 50%;
                padding: 20px;
                font-size: 23px;
            }
        }
        &__combinations {
            margin-top: 100px;
            &-title {
                font-size: 35px;
            }
            &-btns {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0;
                width: fit-content;
                margin: 0 auto;
                &_item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 25px;
                    width: 200px;
                    height: 60px;
                    background-color: #fff;
                    margin: 0 10px;
                    cursor: pointer;
                }
            }
            &-result {
                margin: 0 auto;
                margin-top: 50px;
                width: 80%;
                height: 400px;
                background-color: #000;
                border: 2px solid #fff;
                padding: 50px 30px;
                text-align: center;
                color: #fff;
                font-size: 25px;
                &_title {
                    font-size: 30px;
                }
                &_descr {
                    margin-top: 70px;
                }
            }
        }
    }
    @media (max-width: 992px) {
        .type__combinations-btns {
            li {
                width: 150px;
            }
        }
    }
    @media (max-width: 768px) {
        .type {
            &__lore {
                flex-direction: column-reverse;
                &-history {
                    width: 100%;
                }
            }
            &__combinations {
                &-result {
                    width: 100%;
                }
                &-btns {
                    li {
                        width: 125px;
                    }
                }
            }
        }
    }
    @media (max-width: 576px) {
        .type {
            &__lore {
                &-history {
                    padding: 0;
                    margin-bottom: 20px;
                }
                &-preview {
                    width: 100%;
                    &_img {
                        width: 100%;
                        height: fit-content;
                    }
                }
            }
            &__combinations {
                &-btns {
                    flex-direction: column;
                    width: 100%;
                    li {
                        margin-top: 10px;
                        width: 100%;
                    }
                }
            }
            
        }
        
    }
</style>