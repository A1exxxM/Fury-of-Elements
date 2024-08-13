<template>
    <section class="elems__types container">
        <page-title>Стихии</page-title>
        <subtitle-vue>Описание системы стихий</subtitle-vue>
        <ul class="elems__types-items">
            <li class="elems__types-items_item" :key="item" v-for="item in $store.state.elements">
                <img class="elems__types-items_img" src="@/assets/img/elements/blood.jpg" :alt="item.title">
                <div class="elems__types-items_title">{{item.title}}</div>
            </li>
        </ul>
        
    </section>
</template>

<script>
export default {
    mounted() {
        const items = document.querySelectorAll('.elems__types-items_img');
        items.forEach((item,i) => {
            item.setAttribute('src', `dist/assets/img/elements/${this.$store.state.elements[i].path}.jpg`)
        });
    }
}
</script>

<style lang="scss" scoped>
    .elems__types {
        &-items {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            margin: 0 auto;
            margin-top: 150px;
            &_item {
                list-style-type: none;
            }
            &_img {
                width: 220px;
                height: 220px;
                border-radius: 15%;
            }
            &_title {
                font-size: 25px;
                margin-top: 30px;
            }
            
        }
        
    }
</style>
