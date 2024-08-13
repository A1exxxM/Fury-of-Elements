<template>
    <li class="class__abilities">
        <div class="class__abilities-item_title" 
            @click="toggleActiveClass($event)">
            <span><slot name="ability_title"></slot></span>
        </div>
        <div class="class__abilities-item_descr">
            <slot name="ability_descr"></slot>
        </div>
    </li>
</template>

<script>
export default {
    name: 'ability',
    methods: {
        toggleActiveClass($event) {
            if ($event.target.localName == 'div') {
                $event.target.nextElementSibling.classList.toggle('class__abilities-item_descr_active');
            } else {
                $event.target.parentNode.parentNode.nextElementSibling.classList.toggle('class__abilities-item_descr_active');
            }
        }
    }
}
</script>

<style lang="scss">
.class {
    &__abilities {
            margin-top: 20px;
            font-size: 30px;
            list-style-type: none;
            &-wrapper {
                padding: 0;
            }
            &-item {
                list-style-type: none;
                margin-top: 30px;
                &_title {
                    background-color: #fff;
                    font-size: 22px;
                    padding: 25px;
                    display: flex;
                    justify-content: space-between;
                    cursor: pointer;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
                &_descr {
                    background-color: #000;
                    padding: 0px;
                    font-size: 18px;
                    color: #fff;
                    text-align-last: left;
                    height: 0;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    overflow: hidden;
                    transition: 1s all ;
                    &_active {
                        padding: 100px 25px;
                        height: fit-content;
                    }
                }
            }
        }
}
</style>