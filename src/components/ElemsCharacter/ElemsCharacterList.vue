<template>
  <div class="charlist">
    <header class="charlist__header">
        <div class="charlist__header-title">Fury of Elements</div>
        <div class="charlist__header-info">
            <div class="charlist__header-info_name">{{$store.state.character.name}}</div>
            <div class="charlist__header-info_class">{{$store.state.character.class}}</div>
            <div class="charlist__header-info_race">Раса</div>
            <div class="charlist__header-info_level">Уровень <span>1</span></div>
            <div class="charlist__header-info_subclass">{{$store.state.character.subclass}}</div>
        </div>
    </header>
    <div class="charlist__main">
        <div class="charlist__elems">
            <div class="charlist__triggers">
                <div class="charlist__triggers-title">Триггеры</div>
                <ul class="charlist__triggers-items">
                    <li class="charlist__triggers-item" :key="item" v-for="item in $store.state.character.triggers">
                        <div class="charlist__triggers-item_title">{{item.title}}</div>
                        <div class="charlist__triggers-item_descr">{{item.descr}}</div>
                    </li>
                    
                </ul>
            </div>
            <div class="charlist__spells">
                <div class="charlist__spells-title">Ячейки заклинаний</div>
                <div class="charlist__spells-items">
                    <div class="charlist__spells-item">
                        <div class="charlist__spells-item_level">Уровень 1</div>
                        <div class="charlist__spells-item_counter">
                            <span class="charlist__block charlist__block-small"></span>
                            <span class="charlist__spells-item_divider">/</span>
                            <span class="charlist__spells-item_amount"> 3</span></div>
                    </div>
                    <div class="charlist__spells-item">
                        <div class="charlist__spells-item_level">Уровень 2</div>
                        <div class="charlist__spells-item_counter">
                            <span class="charlist__block charlist__block-small"></span>
                            <span class="charlist__spells-item_divider">/</span>
                            <span class="charlist__spells-item_amount"> 2</span></div>
                    </div>
                    <div class="charlist__spells-item">
                        <div class="charlist__spells-item_level">Уровень 3</div>
                        <div class="charlist__spells-item_counter">
                            <span class="charlist__block charlist__block-small"></span>
                            <span class="charlist__spells-item_divider">/</span>
                            <span class="charlist__spells-item_amount"> 1</span></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="charlist__wrapper">
            <div class="charlist__status charlist__elem">
                <div class="charlist__list-item">
                    <div class="charlist__list-item_title">Здоровье</div>
                    <div class="charlist__list-item_counter"><span class="charlist__block">10</span></div>
                </div>
                <div class="charlist__list-item">
                    <div class="charlist__list-item_title">Инициатива</div>
                    <div class="charlist__list-item_counter"><span class="charlist__block">10</span></div>
                </div>
                <div class="charlist__list-item">
                    <div class="charlist__list-item_title">Скорость</div>
                    <div class="charlist__list-item_counter"><span class="charlist__block">{{ $store.state.character.armor.speed }}</span></div>
                </div>
            </div>
            <div class="charlist__buffs">
                <div class="charlist__buffs-title">Показатели</div>
                <div class="charlist__buffs-wrapper charlist__elem">
                    <div class="charlist__list-item charlist__list-item_big">
                        <div class="charlist__list-item_title">Щит</div>
                        <div class="charlist__list-item_counter"><span class="charlist__block"></span></div>
                    </div>
                    <div class="charlist__list-item charlist__list-item_big">
                        <div class="charlist__list-item_title">Доп. урон</div>
                        <div class="charlist__list-item_counter"><span class="charlist__block"></span></div>
                    </div>
                </div>
            </div>
            <div class="charlist__defense">
                <div class="charlist__defense-title">Ресурсы</div>
                <div class="charlist__defense-wrapper charlist__elem">
                    <div class="charlist__list-item charlist__list-item_big">
                        <div class="charlist__list-item_title">Стихийная Защита</div>
                        <div class="charlist__list-item_counter"><span class="charlist__block">{{ $store.state.character.armor.resist }}</span></div>
                    </div>
                    <div class="charlist__list-item charlist__list-item_big">
                        <div class="charlist__list-item_title">Текущее здоровье</div>
                        <div class="charlist__list-item_counter"><span class="charlist__block">10</span></div>
                    </div>
                    
                </div>
            </div>
            <div class="charlist__insight">
                <div class="charlist__insight-title">{{ $store.state.character.insight.name }}</div>
                <div class="charlist__insight-descr">{{ $store.state.character.insight.descr }}</div>
            </div>
            <div class="charlist__skill">
                <div class="charlist__skill-title">{{ $store.state.character.skill.name }}</div>
                <div class="charlist__skill-descr">{{ $store.state.character.skill.descr }}</div>
            </div>
            <div class="charlist__combat">
                <div class="charlist__combat-weapon">
                    <div class="charlist__combat-weapon_title">Оружие</div>
                    <div class="charlist__combat-weapon_item">
                        <div class="charlist__combat-weapon_item-name">{{$store.state.character.weapons.class.name}}</div>
                        <div class="charlist__combat-weapon_item-value">{{$store.state.character.weapons.class.value}}</div>
                    </div>
                    <div class="charlist__combat-weapon_item">
                        <div class="charlist__combat-weapon_item-name">{{$store.state.character.weapons.base.name}}</div>
                        <div class="charlist__combat-weapon_item-value">{{$store.state.character.weapons.base.value}}</div>
                    </div>
                </div>
                <div class="charlist__combat-equip">
                    <div class="charlist__combat-equip_title">Снаряжение</div>
                    <div class="charlist__combat-equip_item">
                        <div class="charlist__combat-equip_item-name">Стартовый набор</div>
                        <div class="charlist__combat-equip_item-value">{{$store.state.character.equip}}</div>
                    </div>
                    <div class="charlist__combat-equip_item">
                        <div class="charlist__combat-equip_item-name">Золото</div>
                        <div class="charlist__combat-equip_item-value">50 золотых</div>
                    </div>
                </div>
                <div class="charlist__combat-character">
                    <div class="charlist__combat-character_title">Персонаж</div>
                    <div class="charlist__combat-character_item">
                        <div class="charlist__combat-character_item-name">Мировоззрение</div>
                        <div class="charlist__combat-character_item-value">Нейтральный</div>
                    </div>
                    <div class="charlist__combat-character_item">
                        <div class="charlist__combat-character_item-name">Носитель стихий</div>
                        <div class="charlist__combat-character_item-value">Нет</div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
    .charlist {
        padding: 50px 25px;
        width: 21cm;
        height: 29.6cm;
        margin: 0 auto;
        background-color: #fff;
        &__header {
            min-height: 150px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 2px solid black;
            border-radius: 10px;
            padding: 20px;
            &-info {
                display: flex;
                align-items: center;
                min-width: 300px;
                justify-content: space-between;
                font-size: 20px;
            }
            &-title {
                font-size: 25px;
            }
        }
        &__main {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            z-index: 1;
        }
        &__wrapper {
            grid-column: 2/4;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: fit-content;
            height: fit-content;
        }
        &__elems {
            grid-column: 1/2;
            width: 220px;
            height: 800px;
            
        }
        &__triggers {
            grid-column: 1/2;
            border-radius: 10px;
            border: 2px solid black;
            width: 220px;
            height: 420px;
            text-align: center;
            padding: 10px;
            &-title {
                font-size: 20px;
                margin-bottom: 30px;
            }
            &-items {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                height: fit-content;
                
            }
            &-item {
                list-style-type: none;
                width: 80%;
                margin: 0 auto;
                height: 100px;
                margin-top: 10px;
                &_title {
                    font-size: 18px;
                }
                &_descr {
                    margin-top: 5px;
                }
            }
        }
        &__spells {
            margin-top: 20px;
            border-radius: 10px;
            border: 2px solid black;
            width: 220px;
            height: 360px;
            padding: 10px;
            &-title {
                font-size: 20px;
                margin-top: 10px;
                text-align: center;
            }
            &-items {
                margin-top: 20px;
            }
            &-item {
                margin-top: 30px;
                &_level {
                    text-align: center;
                    font-size: 20px;
                }
                &_counter {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    text-align: center;
                    font-size: 24px;
                    padding: 0 25px;
                    margin-top: 5px;
                }
                &_divider {
                    width: 33%;
                    font-size: 30px;
                }
                &_amount {
                    width: 33%;
                }
            }
        }
        &__status,&__buffs,&__defense,&__insight {
            border-radius: 10px;
            border: 2px solid black;
            width: 240px;
            height: 200px;
        }
        &__defense,&__insight {
            margin-top: 20px;
        }
        &__buffs {
            &-title {
                margin-top: 10px;
                text-align: center;
                font-size: 20px;
            }
            &-wrapper {
                margin-top: 8px;
            }
        }
        &__defense {
            &-title {
                margin-top: 10px;
                text-align: center;
                font-size: 20px;
            }
            &-wrapper {
                margin-top: 8px;
            }
        }
        &__insight {
            text-align: center;
            &-title {
                font-size: 20px;
                margin-top: 10px;
            }
            &-descr {
                margin-top: 18px;
                font-size: 17px;
            }
        }
        &__skill {
            grid-column: 2/4;
            width: 100%;
            border-radius: 10px;
            border: 2px solid black;
            height: 100px;
            margin-top: 20px;
            text-align: center;
            &-title {
                margin-top: 8px;
                font-size: 20px;
            }
            &-descr {
                margin-top: 5px;
                font-size: 17px;
            }
        }
        &__combat {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-top: 20px;
            &-equip,&-weapon,&-character {
                border-radius: 10px;
                border: 2px solid black;
                width: 31%;
                height: 240px;
                text-align: center;
                padding: 10px;
                &_title {
                    font-size: 20px;
                }
                &_item {
                    margin-top: 30px;
                    font-size: 18px;
                    &-name {
                        font-size: 19px;
                    }
                }
            }
        }
        &__block {
            width: 50px;
            height: 50px;
            border: 2px solid black;
            margin: 0 auto;
            margin-top: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            &-small {
                margin: auto;
                width: 38px;
                height: 38px;
            }
        }
        &__elem {
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__list {
            &-item {
                width: 70px;
                text-align: center;
                font-size: 15px;
                &_big {
                    width: 120px;
                    font-size: 17px;
                }
            }
        }

    }
</style>