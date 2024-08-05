<template>
    <section class="skills page container">
        <page-title>Боевые умения</page-title>
        <div class="skills__descr">{{$store.state.skills.descr}}</div>
        <rules-list>
            <rules-item :key='rule' v-for="rule in $store.state.skills.rules">{{ rule }}</rules-item>
        </rules-list>
        <div class="skills__subtitle">Список умений</div>
        <elems-skills-list></elems-skills-list>
    </section>
</template>

<script>
import ElemsSkillsList from '@/components/ElemsSkills/ElemsSkillsList.vue'
export default {
    components: {ElemsSkillsList}
}
</script>

<style lang="scss">
    .skills {
        &__subtitle {
            font-size: 25px;
            margin-top: 50px;
        }
        &__cards {
            margin-top: 50px;
        }
    }
</style>