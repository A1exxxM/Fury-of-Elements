<template>
    <nav class="navbar">
        <div class="navbar__btns container">
            <span class="navbar__btns-item" @click="$router.push('/')">Главная</span>
            <span class="navbar__btns-item" @click="$router.push('/lore')">Лор</span>
            <span class="navbar__btns-item" @click="$router.push('/types')">Стихии</span>
            <span class="navbar__btns-item" @click="$router.push('/classes')">Классы</span>
            <span class="navbar__btns-item" @click="$router.push('/insights')">Озарения</span>
            <span class="navbar__btns-item" @click="$router.push('/triggers')">Тригеры</span>
            <span class="navbar__btns-item" @click="$router.push('/skills')">Боевые умения</span>
            <span class="navbar__btns-item" @click="$router.push('/spells')">Заклинания</span>
            <span class="navbar__btns-item">Создание персонажа</span>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'elems-navbar'
}
</script>

<style scoped lang="scss">
    .navbar {
        width: 100%;
        height: 100px;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        display: flex;
        align-items: center;
        &__btns {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-item {
                cursor: pointer;
            }
        }
    }
</style>