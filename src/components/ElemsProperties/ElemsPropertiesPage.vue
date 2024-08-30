<template>
    <section class="properties container page">
        <page-title>Озарения</page-title>
        <subtitle-vue>{{$store.state.insights.descr}}</subtitle-vue>
        <rules-list>
            <rules-item :key="item" v-for="item in $store.state.insightsRules">{{ item }}</rules-item>
        </rules-list>
        <h3 class="properties__subtitle">Виды озарений</h3>
        <div class="properties__wrapper">
            <ul class="properties__types">
                <li class="properties__types-item" @click="changeCurrentInsight(item)" :key="item" v-for="item in $store.state.insights.items">{{ item.title }}</li>
            </ul>
            <div class="properties__preview">{{$store.state.insights.items[$store.state.currentInsight].descr}}</div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        changeCurrentInsight(item) {
            this.$store.commit('changeCurrentInsight', item)
        }
    }
}
</script>

<style scoped lang="scss">
    .properties {
        &__title {
            font-size: 35px;
        }
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
            }
        }
    }
</style>