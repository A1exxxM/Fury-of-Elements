<template>
    <section class="lore page container">
        <h2 class="lore__title">Лор</h2>
        <div class="lore__preview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore beatae dolor voluptas temporibus delectus, natus minima libero eveniet illo dignissimos commodi asperiores! Soluta, quod impedit nesciunt tenetur esse itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eligendi quae provident cum nemo necessitatibus. Qui cupiditate facere praesentium eligendi, architecto illum aspernatur provident recusandae quasi. Vero obcaecati expedita mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore beatae dolor voluptas temporibus delectus, natus minima libero eveniet illo dignissimos commodi asperiores! Soluta, quod impedit nesciunt tenetur esse itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eligendi quae provident cum nemo necessitatibus. Qui cupiditate facere praesentium eligendi, architecto illum aspernatur provident recusandae quasi. Vero obcaecati expedita mollitia.</div>
        <div class="lore__world" :key="item" v-for="item in $store.state.lore.world">
            <h3 class="lore__world-title">{{ item.title }}</h3>
            <div class="lore__world-wrapper">
                <img class="lore__world-map" :src="item.img"  alt="#">
                <div class="lore__world-descr">{{ item.descr }}</div>
            </div>
            
        </div>
        <div class="lore__countries" :key="country" v-for="country in $store.state.lore.countries">
            <h2 class="lore__countries-title">{{ country.title }}</h2>
            <img :src="country.img" alt="#" class="lore__countries-img">
            <div class="lore__countries-descr">{{ country.descr }}</div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .lore {
        text-align: center;
        color: #fff;
        &__title {
            font-size: 50px;
        }
        &__preview {
            font-size: 20px;
        }
        &__world {
            margin-top: 150px;
            
            &-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 90%;
                margin: 0 auto;
                
            
            }
            &-map {
                width: 500px;
                height: 500px;
                
            }
            &-descr {
                font-size: 25px;
                padding: 20px;
            }
            &-title {
                font-size: 35px;
            }
        }
    }
</style>