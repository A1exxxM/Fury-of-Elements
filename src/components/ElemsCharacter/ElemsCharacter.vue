<template>
    <section class="character page container">
        <page-title>Персонаж</page-title>
        <rules-list>
            <rules-item>Данный функционал ещё находится в разработке</rules-item>
            <rules-item>Переходите к созданию персонажа после ознакомления со всеми механиками</rules-item>
            <rules-item>Используйте специальный id для поиска персонажа (появится позже)</rules-item>
        </rules-list>
        <div class="character__wrapper">
            <div>
                <input class="character__id" type="text" name="id" placeholder="Введите id персонажа">
                <big-button class="character__button">Найти Персонажа</big-button>
            </div>
            <big-button class="character__button" @click="$router.push('/character/create')">Создать Персонажа</big-button>
        </div>
        <h2 class="character__error">Возможность создавать персонажа на данном типе устройств появится позже</h2>
    </section>
</template>

<script>

export default {

}
</script>

<style lang="scss">
    .character {
        &__wrapper {
            display: flex;
            width: 70%;
            margin: 0 auto;
            align-items:flex-end;
            justify-content: space-between;
            margin-top: 100px;
        }
        &__button {
            width: 300px;
            height: 90px;
            font-size: 30px;
        }
        &__id {
            width: 300px;
            margin-bottom: 30px;
            padding: 10px;
        }
        &__error {
            display: none;
        }
    }
    @media (max-width:992px) {
        .character {
            &__wrapper {
                display: none;
            }
            &__error {
                display: block;
            }
        }
    }
</style>