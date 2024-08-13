<template>
    <section class="elems__triggers container">
        <page-title>Триггеры</page-title>
        <subtitle-vue>{{ $store.state.triggers.descr }}</subtitle-vue>
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
    &-preview {
        margin-top: 100px;
    }
}
</style>