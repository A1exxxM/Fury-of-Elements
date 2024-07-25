<template>
    <section class="types container page">
        <h2 class="types__title">Механика стихий</h2>
        <div class="types__descr">Краткое описание работы стихий</div>
        <ul class="types__rules">
            <li class="types__rules-item" :key="rule" v-for="rule in $store.state.typesRules">{{rule}}</li>
            
        </ul>
        <h3 class="types__subtitle">Стихии Мира</h3>
        <ul class="types__preview">
            <li class="types__preview-item" :key="element" v-for="element in $store.state.elements" 
            @click="selectCurrentType(element)">
                <div class="types__preview-item_title">{{ element.title }}</div>
                <div class="types__preview-item_img">
                    <img :src="element.img" alt="Иконка стихии">
                </div>
                <div class="types__preview-item_descr">{{ element.descr }}</div>
            </li>
        </ul>
        
    </section>
</template>

<script>
export default {
    methods: {
        selectCurrentType(element) {
            this.$store.state.currentType = element.id;
            this.$router.push(`/types/${element.path}`)
        }
    }
}
</script>

<style scoped lang="scss">
    .types {
        &__title {
            font-size: 45px;
        }
        &__descr {
            font-size: 25px;
        }
        &__rules {
            margin-top: 25px;
            background-color: #fff;
            border: 2px solid black;
            padding: 25px;
            border-radius: 10px;
            &-item {
                width: fit-content;
                margin-top: 10px;
            }
        }
        &__subtitle {
            font-size: 35px;
        }
        &__preview {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0;
            &-item {
                width: 200px;
                min-height: 300px;
                padding: 15px;
                display: flex;
                align-items: center;
                flex-direction: column;
                border: 2px solid black;
                border-radius: 10px;
                list-style-type: none;
                font-size: 20px;
                cursor: pointer;
                &_img {
                    width: 100px;
                    height: 100px;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>