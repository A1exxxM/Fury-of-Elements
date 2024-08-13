<template>
  <section class="elems__properties container">
    <page-title>Озарения</page-title>
    <subtitle-vue>{{ $store.state.insights.descr }}</subtitle-vue>
    <div class="elems__properties-wrapper">
        <div class="elems__properties-property" :key="item" v-for="item in $store.state.insights.items">
            <div class="elems__properties-property_title">{{ item.title }}</div>
            <div class="elems__properties-property_descr">{{ item.descr }}</div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .elems__properties { 
        &-wrapper {
            width: 80%;
            margin: 0 auto;
            margin-top: 50px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }
        &-property {
            width: 300px;
            &_title {
                font-size: 25px;
            }
            &_descr {
                margin-top: 20px;
                font-size: 17px;
                background-color: #fff;
                padding: 10px;
                height: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
            }
        }
    }
</style>