<template>
    <nav class="navbar animate__animated animate__fadeInDown" :style="{backgroundColor: $store.state.hoverColor}">
        <div class="navbar__btns container">
            <span class="navbar__btns-item" @click="$router.push('/')">Главная</span>
            <span class="navbar__btns-item" @click="$router.push('/lore')">Лор</span>
            <span class="navbar__btns-item" @click="$router.push('/types')">Стихии</span>
            <span class="navbar__btns-item" @click="$router.push('/classes')">Классы</span>
            <span class="navbar__btns-item" @click="$router.push('/insights')">Озарения</span>
            <span class="navbar__btns-item" @click="$router.push('/triggers')">Триггеры</span>
            <span class="navbar__btns-item" @click="$router.push('/skills')">Боевые умения</span>
            <span class="navbar__btns-item" @click="$router.push('/character')">Персонаж</span>
        </div>
        <div class="navbar__hamburger">
            <div class="navbar__hamburger-btn" @click="openHamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="navbar__hamburger-modal" @wheel.prevent @touchmove.prevent @scroll.prevent v-if="hamburger" @click="closeHamburger">
                <span class="navbar__hamburger-modal_item" @click="$router.push('/')">Главная</span>
                <span class="navbar__hamburger-modal_item" @click="$router.push('/lore')">Лор</span>
                <span class="navbar__hamburger-modal_item" @click="$router.push('/types')">Стихии</span>
                <span class="navbar__hamburger-modal_item" @click="$router.push('/classes')">Классы</span>
                <span class="navbar__hamburger-modal_item" @click="$router.push('/insights')">Озарения</span>
                <span class="navbar__hamburger-modal_item" @click="$router.push('/triggers')">Триггеры</span>
                <span class="navbar__hamburger-modal_item" @click="$router.push('/skills')">Боевые умения</span>
                <span class="navbar__hamburger-modal_item" @click="$router.push('/character')">Персонаж</span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'elems-navbar',
    data() {
        return {
            hamburger: false
        }
    },
    methods: {
        openHamburger() {
            this.hamburger = true;
        },
        closeHamburger() {
            this.hamburger = false;
        }
    }
}
</script>

<style scoped lang="scss">
    .navbar {
        z-index: 100;
        width: 100%;
        height: 100px;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        display: flex;
        align-items: center;
        transition: 0.6s all;
        &__btns {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-item {
                cursor: pointer;
                font-size: 20px;
            }
        }
        &__hamburger {
            display: none;
            &-btn {
                position: absolute;
                right: 10px;
                top: 12px;
                span {
                width: 50px;
                height: 2px;
                background-color: #fff;
                display: block;
                margin-top: 10px;
                &:first-child {
                    margin-top: 0;
                }  
                }
            }
            &-modal {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-direction: column;
                z-index: 150;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background-color: rgba(0,0,0,90%);
                font-size: 30px;
                
            }
        }
    }
    @media (max-width: 768px) {
        .navbar {
            &__btns {
                &-item {
                    font-size: 17px;
                }
                
            }
        }
    }
    @media (max-width: 576px) {
        .navbar {
            height: 50px;
            &__btns {
                display: none;
            }
            &__hamburger {
                display: block;
            }
        }
    }
</style>