<template>
  <section class="elems__properties container">
    <h2 class="elems__properties-title">Озарения</h2>
    <div class="elems__properties-descr">{{ $store.state.insights.descr }}</div>
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
        &-title {
            font-size: 50px;
        }
        &-wrapper {
            width: 80%;
            margin: 0 auto;
            margin-top: 50px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }
        &-property {
            width: 250px;
            &_title {
                font-size: 22px;
            }
            &_descr {
                margin-top: 10px;
                font-size: 17px;
            }
        }
    }
</style>