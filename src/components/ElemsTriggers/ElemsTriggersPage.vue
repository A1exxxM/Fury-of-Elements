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
        <ul class="triggers__cards">
            <card-item :key='item' v-for="item in $store.state.triggers.items[$store.state.currentFilter]">
                <template v-slot:card-item_title>
                    <span>{{item.title}}</span>
                </template>
                <template v-slot:card-item_descr>
                    <span>{{item.descr}}</span>
                </template>
            </card-item>
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
        &__cards {
            margin-top: 50px;
        }
    }
</style>