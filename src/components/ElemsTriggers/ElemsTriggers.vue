<template>
    <section class="elems__triggers container">
        <h2 class="elems__triggers-title">Триггеры</h2>
        <div class="elems__triggers-descr">{{ $store.state.triggers.descr }}</div>
        <card-item class="elems__triggers-preview">
            <template v-slot:card-item_title>
                <span>{{$store.state.triggers.items.first[0].title}}</span>
            </template>
            <template v-slot:card-item_descr>
                <span>{{$store.state.triggers.items.first[0].descr}}</span>
            </template>
        </card-item>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.elems__triggers {
    &-title {
        font-size: 50px;
    }
    &-preview {
        margin-top: 100px;
    }
}
</style>