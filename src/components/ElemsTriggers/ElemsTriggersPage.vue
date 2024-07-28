<template>
    <section class="triggers page container">
        <page-title>Триггеры</page-title>
        <div class="triggers__descr">{{$store.state.triggers.descr}}</div>
        <rules-list>
            <rules-item :key="rule" v-for="rule in $store.state.triggers.rules">{{ rule }}</rules-item>
        </rules-list>
        <div class="triggers__filters">
            <big-button @click="changeCurrentFilter(filter)" :key="filter" v-for="filter in $store.state.triggers.filters">{{ filter.title }}</big-button>
        </div>
        <ul class="triggers__blocks">
            <li class="triggers__blocks-item" :key='item' v-for="item in $store.state.triggers.items[$store.state.currentFilter]">
                <div class="triggers__blocks-item_title">{{ item.title }}</div>
                <div class="triggers__blocks-item_descr">{{ item.descr }}</div>
            </li>
        </ul>
    </section>    
</template>

<script>
export default {
    methods: {
        changeCurrentFilter(filter) {
            this.$store.commit('changeCurrentFilter',filter)
        }
    }
}
</script>

<style lang="scss">
    .triggers { 
        &__filters {
            width: 80%;
            margin: 0 auto;
            margin-top: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__blocks {
            margin-top: 50px;
            &-item {
                background-color: #fff;
                list-style-type: none;
                border: 2px solid black;
                min-height: 200px;
                border-radius: 10px;
                margin-bottom: 30px;
                &:last-child {
                    margin-bottom: 0;
                }
                &_title {
                    color: #fff;
                    background-color: #000;
                    font-size: 25px;
                    padding: 17px;
                    text-align: left;
                }
                &_descr {
                    font-size: 20px;
                    padding: 15px;
                }
            }
        }
    }
</style>