<template>
  <section class="elems__properties container">
    <h2 class="elems__properties-title">Характеристики</h2>
    <div class="elems__properties-descr">{{ $store.state.properties.descr }}</div>
    <div class="elems__properties-wrapper">
        <div class="elems__properties-property" :key="item" v-for="item in $store.state.properties.items">
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
            margin-top: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>