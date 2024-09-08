<template>
    <section class="character page container animate__animated animate__fadeIn">
        <page-title>Персонаж</page-title>
        <rules-list>
            <rules-item>Данный функционал ещё находится в разработке</rules-item>
            <rules-item>Переходите к созданию персонажа после ознакомления со всеми механиками</rules-item>
            <rules-item>Используйте специальный id для поиска персонажа (появится позже)</rules-item>
        </rules-list>
        
        <div class="character__wrapper">
            <big-button class="character__button" @click="$router.push('/character/create')">Создать Персонажа</big-button>
        </div>
        <h2 class="character__error">Возможность создавать персонажа на данном типе устройств появится позже</h2>
        <page-title>Созданные персонажи:</page-title>
        <div class="character__list">
            <big-button class="character__list-item" @click="selectCharacter(item)" v-for="item in charactersName" :key="item">{{ item.name }}</big-button>
        </div>
    </section>
</template>

<script>
import db from '@/firebase/init';
import {getDocs,query, collection} from 'firebase/firestore';
export default {
    data() {
        return {
            charactersName: []
        }
    },
    methods: {
        async getCharacters() {
            const names = await getDocs(query(collection(db, 'characters')))
            names.forEach(item => {
                if (!this.$store.state.loadedCharacters.find(elem => elem.id == item.data().id)) {
                    this.$store.state.loadedCharacters.push(item.data())
                }
            })
            this.charactersName = this.$store.state.loadedCharacters
            
        },
        selectCharacter(item) {
            this.$store.commit('selectCharacter', item);
            this.$router.push(`/character/${item.id}`)
        }
    },
    mounted() {
        this.getCharacters()
    }
}
</script>

<style lang="scss">
    .character {
        &__wrapper {
            display: flex;
            width: 100%;
            margin: 0 auto;
            align-items: center;
            justify-content: center;
            margin-top: 100px;
        }
        &__list {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            &-item {
                margin-top: 10px;
                width: 25%;
            }
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