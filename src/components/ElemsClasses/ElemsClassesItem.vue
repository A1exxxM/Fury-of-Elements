<template>
    <section class="class container page">
        <h2 class="class__title">{{$store.state.classes[$store.state.currentClass].title}}</h2>
        <div class="class__stats">
            <div class="class__stats-item" :key="item" v-for="item in $store.state.classes[$store.state.currentClass].stats">
            <span>{{ item.title }}</span> : {{ item.value }}
            
            </div>
            
        </div>
        <div class="class__ability">Особенность класса: <br> <span>{{$store.state.classes[$store.state.currentClass].ability}}</span></div>
        <div class="class__properties">
            <div class="class__properties-type">
                <big-button :key="property" v-for="property in $store.state.properties" @click="changeCurrentClassType(property)">{{property.name}}</big-button>
            </div>
            <div class="class__properties-preview">
                <div class="class__properties-preview_item" 
                :key="item"
                v-for="item in $store.state.classes[$store.state.currentClass][$store.state.currentClassType]">
                <span>{{item.name}}</span>: {{item.value}}</div>
            </div>
        </div>
        <h3 class="class__spells">Способности</h3>
        <ul class="class__spells-wrapper">
            <li class="class__spells-item" 
            :key="spell" 
            v-for="spell in $store.state.classes[$store.state.currentClass].spells">
                <div class="class__spells-item_title" 
                    @click="toggleActiveClass($event)">
                    <span>{{spell.title}}</span><span>{{spell.lvl}}</span>
                </div>
                <div class="class__spells-item_descr">
                    {{ spell.descr }}
                </div>
            </li>
            
        </ul>
    </section>
</template>

<script>
export default {
    methods: {
        changeCurrentClassType(property) {
            this.$store.commit('changeCurrentClassType', property)
        },
        toggleActiveClass($event) {
            $event.target.nextElementSibling.classList.toggle('class__spells-item_descr_active');
        }
    }
}
</script>

<style scoped lang="scss">
    .class {
        &__title {
            font-size: 45px;
        }
        &__stats {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: fit-content;
            margin: 0 auto;
            &-item {
                margin: 0 10px;
            }
        }
        &__ability {
            margin-top: 30px;
            font-size: 30px;
            span {
                font-size: 20px;
            }
        }
        &__properties {
            margin-top: 30px;
            &-type {
                display: flex;
                margin: 0 auto;
                width: fit-content;
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
            &-preview {
                margin: 0 auto;
                margin-top: 50px;
                width: 80%;
                height: 400px;
                background-color: #000;
                border: 2px solid #fff;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                padding: 50px 30px;
                text-align: center;
                &_item {
                    color: #fff;
                    font-size: 25px;
                }
            }
        }
        &__spells {
            margin-top: 50px;
            font-size: 30px;
            &-wrapper {
                padding: 0;
            }
            &-item {
                list-style-type: none;
                margin-top: 30px;
                &_title {
                    background-color: #fff;
                    font-size: 22px;
                    padding: 25px;
                    display: flex;
                    justify-content: space-between;
                    cursor: pointer;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
                &_descr {
                    background-color: #000;
                    padding: 0px;
                    font-size: 18px;
                    color: #fff;
                    text-align-last: left;
                    height: 0;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    overflow: hidden;
                    transition: 1s all ;
                    &_active {
                        padding: 100px 25px;
                        height: fit-content;
                    }
                }
            }
        }
    }
</style>