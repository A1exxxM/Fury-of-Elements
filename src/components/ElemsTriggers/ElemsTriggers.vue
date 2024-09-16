<template>
    <section class="elems__triggers container">
        <page-title>Триггеры</page-title>
        <subtitle-vue>{{ triggersDescr }}</subtitle-vue>
        <card-item class="elems__triggers-preview">
            <template v-slot:card-item_title>
                <span>{{ triggersFirstTitle }}</span>
            </template>
            <template v-slot:card-item_descr>
                <span>{{ triggersFirstDescr }}</span>
            </template>
        </card-item>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    computed: {
        ...mapGetters(['triggersDescr','triggersFirstTitle','triggersFirstDescr'])
    }
}
</script>

<style lang="scss">
.elems__triggers {
    &-preview {
        margin-top: 100px;
    }
}
</style>