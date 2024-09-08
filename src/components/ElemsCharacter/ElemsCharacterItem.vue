<template>
    <section class="char page container">
        Имя: {{ $store.state.currentLoadedCharacter.name }}<br>
        Класс: {{ $store.state.currentLoadedCharacter.class }}<br>
        Триггеры: <span v-for="item in $store.state.currentLoadedCharacter.triggers" :key="item">{{item.title }}&nbsp</span><br>
        Озарение: {{ $store.state.currentLoadedCharacter.insight.name }}<br>
        Боевое умение: {{ $store.state.currentLoadedCharacter.skill.name }}<br>
        Стартовый набор: {{ $store.state.currentLoadedCharacter.equip }}<br>
        Оружие: {{$store.state.currentLoadedCharacter.weapons.base.name}} и {{$store.state.currentLoadedCharacter.weapons.class.name}}<br>
        Скорость: {{$store.state.currentLoadedCharacter.armor.speed}}<br>
        Стихийная защита: {{$store.state.currentLoadedCharacter.armor.resist}}<br>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    .char {
        font-size: 30px;
        line-height: 60px;
    }
</style>