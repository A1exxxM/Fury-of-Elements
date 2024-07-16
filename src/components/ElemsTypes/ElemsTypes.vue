<template>
    <section class="elems__types container">
        <h2 class="elems__types-title">Стихии</h2>
        <div class="elems__types-descr">Описание системы стихий</div>
        <div class="elems__types-btns">
            <button :key="elem" v-for="elem in $store.state.elements" class="elems__types-btns_item" @click="changeElem(elem)">{{ elem.title }} </button>
        </div>
        <div class="elems__types-preview" v-if="$store.state.currentElem !== ''">
            <h2 class="elems__types-preview_title">{{$store.state.elements[$store.state.currentElem].title}}</h2>
            <div class="elems__types-preview_descr">{{$store.state.elements[$store.state.currentElem].descr}}</div>
            <h2 class="elems__types-preview_combinations_title">Комбинации</h2>
            <div class="elems__types-preview_combinations">
                <div class="elems__types-preview_combination" :key="item" v-for="item in $store.state.elements[$store.state.currentElem].combination">
                    <h3 class="elems__types-preview_combination_title">{{item.title}}</h3>
                    <div class="elems__types-preview_combination_descr">{{item.descr}}</div>
                </div>
            </div>
        </div>
        <div v-else> Выберите стихию</div>
    </section>
</template>

<script>
export default {
    methods: {
        changeElem(elem) {
            this.$emit('changeElem', elem)
        }
    }
}
</script>

<style lang="scss" scoped>
    .elems__types {
        padding: 100px 0;
        &-title {
            font-size: 50px;
        }
        &-btns {
            margin: 0 auto;
            margin-top: 50px;
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &-preview {
            margin-top: 50px;
            &_title {
                font-size: 40px;
            }
            &_descr {
                font-size: 20px;
            }
            &_combinations {
                display: flex;
                margin: 0 auto;
                align-items: center;
                justify-content: space-between;
                margin-top: 40px;
            }
        }
    }
</style>
