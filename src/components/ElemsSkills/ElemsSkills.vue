<template>
  <section class="elems__skills container">
        <h2 class="elems__skills-title">Боевые умения</h2>
        <div class="elems__skills-descr">{{ $store.state.skills.descr }}</div>
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
    &-title {
        font-size: 50px;
    }
    &-preview {
        margin-top: 100px;
    }
}

</style>