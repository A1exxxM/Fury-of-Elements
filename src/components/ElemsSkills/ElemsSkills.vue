<template>
  <section class="elems__skills container">
    <page-title>Боевые умения</page-title>
    <subtitle-vue>{{ $store.state.skills.descr }}</subtitle-vue>
    <card-item class="elems__skills-preview">
        <template v-slot:card-item_title>
            <span>{{$store.state.skills.items[0].title}}</span>
        </template>
        <template v-slot:card-item_descr>
            <span>{{$store.state.skills.items[0].descr}}</span>
        </template>
    </card-item>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.elems__skills {
    &-preview {
        margin-top: 100px;
    }
}

</style>