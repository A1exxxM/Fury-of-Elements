<template>
    <section class="types container page animate__animated animate__fadeIn">
        <h2 class="types__title">Стихии</h2>
        <subtitle-vue>Ключевая механика Fury of Elements</subtitle-vue>
        <rules-list>
            <rules-item :key="rule" v-for="rule in typesRules">{{ rule }}</rules-item>
        </rules-list>
        <h3 class="types__subtitle">Открытые стихии:</h3>
        <ul class="types__preview">
            <li class="types__preview-item" :key="element" v-for="element in typesElements" @mouseenter="setHoverColor(element)" @mouseleave="deleteHoverColor"
            @click="selectCurrentType(element)">
                <div class="types__preview-item_title">{{ element.title }}</div>
                <div class="types__preview-item_img">
                    <img :src="element.img" alt="Иконка стихии">
                </div>
            </li>
        </ul>
        
    </section>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    computed: {
        ...mapGetters(['typesRules','typesElements'])
    },
    methods: {
        selectCurrentType(element) {
            this.$store.commit('selectCurrentType', element);
            this.$router.push(`/types/${element.path}`);
        },
        setHoverColor(element) {
            this.$store.commit('setHoverColor', element);
        },
        deleteHoverColor() {
            this.$store.commit('deleteHoverColor');
        }
    }
}
</script>

<style scoped lang="scss">
    .types {
        &__title {
            font-size: 45px;
        }
        &__subtitle {
            font-size: 35px;
        }
        &__preview {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0;
            &-item {
                width: 200px;
                min-height: 300px;
                padding: 15px;
                display: flex;
                align-items: center;
                flex-direction: column;
                list-style-type: none;
                font-size: 20px;
                cursor: pointer;
                &_img {
                    margin-top: 30px;
                    width: 200px;
                    height: 200px;
                    border-radius: 15%;
                    overflow: hidden;
                    img {
                        width: 100%;
                    }
                }
                &_title {
                    font-size: 25px;
                }
            }
        }
    }
    @media (max-width:1400px) {
        .types {
            &__preview {
                &-item {
                    width: 200px;
                    &_img {
                        width: 100%;
                        height: fit-content;
                    }
                }
            }
        }
    }
    @media (max-width: 768px) {
        .types {
            &__preview {
                flex-wrap: wrap;
                &-item {
                    width: 230px;
                }
            }
        }
    }
    @media (max-width: 576px) {
        .types {
            &__preview {
                justify-content: center;
                &-item {
                    width: 80%;

                }
            }
        }
    }
</style>