<template>
    <section class="triggers page container">
        <page-title>Триггеры</page-title>
        <div class="triggers__descr">{{$store.state.triggers.descr}}</div>
        <rules-list>
            <rules-item :key="rule" v-for="rule in $store.state.triggers.rules">{{ rule }}</rules-item>
        </rules-list>
        
        <elems-triggers-list></elems-triggers-list>
    </section>    
</template>

<script>
import ElemsTriggersList from '@/components/ElemsTriggers/ElemsTriggersList.vue';
export default {
    components: {ElemsTriggersList},
    methods: {
        
    }
}
</script>

<style lang="scss">
    
</style>