<template>
    <ul class="cards">
        <card-item :key="item" v-for="item in $store.state.skills.items">
            <template v-slot:card-item_title>
                <span>{{item.title}}</span>
            </template>
            <template v-slot:card-item_descr>
                <span>{{item.descr}}</span>
            </template>
        </card-item>
    </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>