<template>
    <section class="skills page container">
        <page-title>Боевые умения</page-title>
        <div class="skills__descr">{{$store.state.skills.descr}}</div>
        <rules-list>
            <rules-item :key='rule' v-for="rule in $store.state.skills.rules">{{ rule }}</rules-item>
        </rules-list>
        <div class="skills__subtitle">Список умений</div>
        <ul class="skills__cards">
            <card-item :key="item" v-for="item in $store.state.skills.items">
                <template v-slot:card-item_title>
                    <span>{{item.title}}</span>
                </template>
                <template v-slot:card-item_descr>
                    <span>{{item.descr}}</span>
                </template>
            </card-item>
        </ul>
    </section>
</template>

<script>
export default {

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