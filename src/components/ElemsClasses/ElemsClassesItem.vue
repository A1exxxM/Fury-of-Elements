<template>
    <section class="class container page">
        <h2 class="class__title">{{$store.state.classes[$store.state.currentClass].title}}</h2>
        
        <div class="class__ability">Особенность класса: <br> <span>{{$store.state.classes[$store.state.currentClass].ability}}</span></div>
        <div class="class__properties">
            <div class="class__properties-type">
                <big-button :class="{'button__active': property.value == $store.state.currentClassType}" :key="property" v-for="property in $store.state.properties" @click="changeCurrentClassType(property)">{{property.name}}</big-button>
            </div>
            <div class="class__properties-preview">
                <div class="class__properties-preview_item" 
                :key="item"
                v-for="item in $store.state.classes[$store.state.currentClass][$store.state.currentClassType]">
                <span>{{item.name}}</span>: {{item.value}}</div>
            </div>
        </div>
        
        <abilities :id="level.id" :key="level" v-for="level in $store.state.classes[$store.state.currentClass].abilities.level"></abilities>
        
    </section>
</template>

<script>
export default {

    methods: {
        changeCurrentClassType(property) {
            this.$store.commit('changeCurrentClassType', property)
        },
    }
}
</script>

<style lang="scss">
    .class {
        &__title {
            font-size: 45px;
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
                padding: 60px 30px;
                align-items: center;
                &_item {
                    color: #fff;
                    font-size: 25px;
                }
            }
        }
    }
    @media (max-width: 992px) {
        .class__properties-type {
            li {
                width: 150px;
            }
        }
    }
    @media (max-width: 768px) {
        .class {
            &__properties {
                &-type {
                    flex-direction: column;
                    width: 100%;
                    li {
                        margin: 0;
                        margin-top: 15px;
                        width: 100%;
                    }
                }
            }
            
        }
    }
    @media (max-width: 576px) {
        .class {
            &__properties {
                &-preview {
                    width: 100%;
                    &_item {
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>