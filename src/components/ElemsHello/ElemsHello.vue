<template>
    <section class="elems__intro container">
        <h1 class="elems__intro-title">Fury of Elements</h1>
        <h2 class="elems__intro-subtitle">Настольная ролевая игра</h2>
        <div class="elems__intro-descr">Новая система настольных ролевых игр, основанная на опыте от партий в D&D и Lancer RPG<br><br> На этой странице кратко представлены основные механики FoE <br> <br> Рекомендую переходить к созданию персонажа после полного ознакомления</div>
    </section>
</template>

<script>
export default {

}
</script >

<style scoped lang="scss">
    .elems__intro {
        padding-top: 200px;
        color: #fff;
        height: 100vh;
        &-title {
            font-size: 100px;
        }
        &-subtitle {
            font-size: 40px;
        }
        &-descr {
            font-size: 30px;
        }
    }
    @media (max-width: 992px) {
        .elems__intro {
            &-title {
                font-size: 70px;
            }
            &-subtitle {
                font-size: 30px;
            }
            &-descr {
                font-size: 25px;
            }
        }
    }
    @media (max-width: 576px) {
        .elems__intro {
            padding-top: 100px;
            &-title {
                font-size: 60px;
            }
            &-subtitle {
                font-size: 25px;
            }
            &-descr {
                font-size: 25px;
            }
        }
    }
</style>