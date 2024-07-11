<template>
    <nav class="navbar">
        <div class="navbar__btns container">
            <span class="navbar__btns-item">Главная</span>
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
    }
</style>