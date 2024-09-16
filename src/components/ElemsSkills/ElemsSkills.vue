<template>
  <section class="elems__skills container">
    <page-title>Боевые умения</page-title>
    <subtitle-vue>{{ skillsDescr }}</subtitle-vue>
    <card-item class="elems__skills-preview">
        <template v-slot:card-item_title>
            <span>{{ skillsFirstTitle }}</span>
        </template>
        <template v-slot:card-item_descr>
            <span>{{ skillsFirstDescr }}</span>
        </template>
    </card-item>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    computed: {
        ...mapGetters(['skillsDescr','skillsFirstTitle','skillsFirstDescr'])
    }
}
</script>

<style lang="scss">
.elems__skills {
    &-preview {
        margin-top: 100px;
    }
}

</style>