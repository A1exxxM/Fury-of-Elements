<template>
  <section class="elems__properties container">
    <page-title>Озарения</page-title>
    <subtitle-vue>{{ insightsDescr }}</subtitle-vue>
    <div class="elems__properties-wrapper">
        <div class="elems__properties-property" :key="item" v-for="item in insightsList">
            <div class="elems__properties-property_title">{{ item.title }}</div>
            <div class="elems__properties-property_descr">{{ item.descr }}</div>
        </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['insightsDescr','insightsList'])
    }
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
    @media (max-width: 1400px) {
        .elems__properties {
            &-wrapper {
                align-items: center;
                flex-direction: column;
            }
            &-property {
                width: 100%;
                margin-top: 25px;
            }
        }
    }
    @media (max-width: 576px) {
        .elems__properties {
            &-wrapper {
                width: 100%;
            }
        }
        
    }
</style>