<template>
    <div class="class__levels">
        <h2 class="class__levels-title">Уровень {{ this.id + 1 }}</h2>
        <h3 class="class__ability">Cпособности</h3>
        <ul class="class__spells-wrapper">
            <ability :key="item" v-for="item in $store.state.classes[$store.state.currentClass].abilities.level[this.id].skills">
                <template v-slot:ability_title>
                    <span>{{ item.title }}</span>
                </template>
                <template v-slot:ability_descr>
                    <span>{{ item.descr }}</span>
                </template>
            </ability>
        </ul>
        <h3 class="class__spells">Заклинания</h3>
        <ul class="class__spells-wrapper">
            <ability :key="item" v-for="item in $store.state.classes[$store.state.currentClass].abilities.level[this.id].spells">
                <template v-slot:ability_title>
                    <span>{{ item.title }}</span>
                </template>
                <template v-slot:ability_descr>
                    <span>{{ item.descr }}</span>
                </template>
            </ability>>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'abilities',
    props: ['id']
}
</script>

<style lang="scss">
.class__levels {
    margin-top: 60px;
    &-title {
        font-size: 35px;
    }
    .class__ability,.class__spells {
        font-size: 26px;
    }
}
</style>