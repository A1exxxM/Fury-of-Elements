<template>
    <div class="filters">
        <big-button @click="changeCurrentFilter(filter)" :class="{'button__active' : filter.filter == $store.state.currentFilter}" :key="filter" v-for="filter in $store.state.triggers.filters">{{ filter.title }}</big-button>
    </div>
    <ul class="cards">
        <card-item class="animate__animated animate__fadeInUp" :key='item' v-for="item in $store.state.triggers.items[$store.state.currentFilter]">
            <template v-slot:card-item_title>
                {{item.title}}
            </template>
            <template v-slot:card-item_descr>
                {{item.descr}}
            </template>
        </card-item>
    </ul>
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
.cards {
    margin-top: 50px;
}
.filters {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
@media (max-width: 1400px) {
    .filters {
        width: 100%;
    }
}
@media (max-width: 768px) {
    .filters {
        flex-wrap: wrap;
        li {
            margin-top: 10px;
        }
    }
}
@media (max-width: 576px) {
    .filters {
        li {
            width: 100%;
        }
    }
}
</style>