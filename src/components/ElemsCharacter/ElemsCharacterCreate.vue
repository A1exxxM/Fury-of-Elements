<template>
    <section id="top" class="creation page container">
        <page-title>{{ titles[step] }}</page-title>
        <div class="creation__wrapper">
            <input v-show="step == 0" v-model="character.name" type="text" class="creation__name">

            <big-button 
            v-show="step == 1"
            @click="selectClass(item)" 
            class="creation__class" :class="{'creation__class-active': this.character.class === item.id}"
            :key="item" v-for="item in $store.state.classes">
                {{ item.title }}
            </big-button>
            
            <div v-show="step == 2"
            @click="selectInsight(item)"
            class="creation__insight" :class="{'creation__insight-active': this.character.insight === item.id}"
            :key="item" v-for="item in $store.state.insights.items">
                <div class="creation__insight-title" :class="{'creation__insight-title_active': this.character.insight === item.id}">{{ item.title }}</div>
                <div class="creation__insight-descr">{{ item.descr }}</div>
            </div>
            <div class="creation__triggers" v-show="step == 3">
                <elems-triggers-list></elems-triggers-list>
                <div class="creation__triggers-subtitle">Выберите 3 Триггера</div>
                <div class="creation__triggers-items">
                    <div class="creation__triggers-items_item" @click="setTrigger($event)" :key="item" v-for="item in this.triggersArray">{{ item }}</div>
                </div>
            </div>
            <div class="creation__skills" v-show="step == 4">
                <elems-skills-list></elems-skills-list>
                <div class="creation__skills-subtitle">Выберите 1 боевое умение</div>
                <div class="creation__skills-items">
                    <div class="creation__skills-item" @click="selectSkill(item)" :class="{'creation__skills-item_active': this.character.skill === item.title}"
                    :key="item" v-for="item in $store.state.skills.items">{{ item.title }}</div>
                </div>
            </div>
            
            <div class="creation__weapons" v-show="step == 5">
                <div class="creation__weapons-class">
                    <div class="creation__weapons-class_subtitle">{{ $store.state.classes[this.character.class].title }}: оружие</div>
                    <div class="creation__weapons-wrapper">
                        <div class="creation__weapons-item" :class="{'creation__weapons-item_active': this.character.weapons.class === item.name}"
                        @click="setClassWeapon(item)"
                        :key="item" v-for="item in $store.state.classes[this.character.class].weapons">
                            <div class="creation__weapons-item_title">{{ item.name }}</div>
                            <div class="creation__weapons-item_value">{{ item.value }}</div>
                        </div>
                    </div>
                </div>
                <div class="creation__weapons-base">
                    <div class="creation__weapons-base_subtitle">Общее: Оружие</div>
                    <div class="creation__weapons-wrapper">
                        <div class="creation__weapons-item" :class="{'creation__weapons-item_active': this.character.weapons.base === item.name}"
                        @click="setBaseWeapon(item)" :key="item" v-for="item in $store.state.baseWeapons">
                            <div class="creation__weapons-item_title">{{ item.name }}</div>
                            <div class="creation__weapons-item_value">{{ item.value }}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="creation__armor" v-show="step == 6">
                <div class="creation__armor-item" :class="{'creation__armor-item_active': this.character.armor === item.name}" 
                @click="setArmor(item)" :key="item" v-for="item in $store.state.classes[this.character.class].armor">
                    <div class="creation__armor-item_title">{{ item.name }}</div>
                    <div class="creation__armor-item_stats">Скорость: {{ item.speed }}, Стихийная защита: {{ item.resist }}</div>
                </div>
            </div>

            <div class="creation__equip" v-show="step == 7">
                <div class="creation__equip-item" :class="{'creation__equip-item_active': this.character.equip === item.name}" 
                @click="setEquip(item)" :key="item" v-for="item in $store.state.equipment">
                    <div class="creation__equip-item_title">{{ item.name }}</div>
                    <div class="creation__equip-item_descr">{{ item.value }}</div>
                </div>
            </div>

            <div class="creation__end" v-show="step == 8">
                <elems-character-list class="creation__charlist"></elems-character-list>
            </div>

        </div>
        <big-button class="creation__button" v-show="step == 0" :disabled="character.name == 0" @click="changeStep">Продолжить</big-button>
        <big-button class="creation__button" v-show="step == 1" @click="changeStep">Продолжить</big-button>
        <big-button class="creation__button" v-show="step == 2" :disabled="character.insight == ''" @click="changeStep">Продолжить</big-button>
        <big-button class="creation__button" v-show="step == 3" :disabled="character.triggers.length < 3" @click="changeStep">Продолжить</big-button>
        <big-button class="creation__button" v-show="step == 4" :disabled="character.skill == ''" @click="changeStep">Продолжить</big-button>
        <big-button class="creation__button" v-show="step == 5" :disabled="character.weapons.base == '' || character.weapons.class == ''" @click="changeStep">Продолжить</big-button>
        <big-button class="creation__button" v-show="step == 6" :disabled="character.armor ==''" @click="changeStep">Продолжить</big-button>
        <big-button class="creation__button" v-show="step == 7" :disabled="character.equip ==''" @click="changeStep">Продолжить</big-button>
        <big-button class="creation__button" v-show="step == 8" @click="createCharacter()">Скачать</big-button>
    </section>
</template>

<script>
import ElemsTriggersList from '@/components/ElemsTriggers/ElemsTriggersList.vue';
import ElemsSkillsList from '@/components/ElemsSkills/ElemsSkillsList.vue';
import html2pdf from 'html2pdf.js'
import ElemsCharacterList from './ElemsCharacterList.vue';
import db from '@/firebase/init';
import { collection, addDoc, } from 'firebase/firestore';
export default {
    components: {ElemsTriggersList,ElemsSkillsList,ElemsCharacterList},
    data() {
   
            return {
            titles: ['Введите имя персонажа','Выберите класс','Выберите озарение','Выберите Триггеры','Выберите боевое умение','Выберите стартовое оружие', 'Выберите стартовую броню', 'Выберите стартовое снаряжение','Твой персонаж'],
            step: 0,
            triggersArray: [],
            character: {
                name: '',
                class: 0,
                insight: '',
                triggers: [],
                skill: '',
                weapons: {
                    base: '',
                    class: ''
                },
                armor: '',
                equip: '',
                id: ''
            }
    }},
    methods: {
        changeStep() {
            window.scrollTo({ top: 0, behavior: "smooth" });
            this.step++;
            if(this.step == 8) {
                this.character.id = Math.round(Math.random() * (1000000 - 1) + 1)
                this.$store.commit('createCharacter', this.character);
            }
        },
        selectClass(item) {
            this.character.class = item.id;
        },
        selectInsight(item) {
            this.character.insight = item.id;
        },
        setTrigger($event) {
            const target = $event.target;
            if (target.classList.contains('creation__triggers-items_item-active')) {
                this.character.triggers = this.character.triggers.filter(item => item != target.textContent);
                target.classList.remove('creation__triggers-items_item-active');
            } else {
                if (this.character.triggers.length < 3) {
                    this.character.triggers.push(target.textContent);
                    target.classList.add('creation__triggers-items_item-active');
                }
            }   
        },
        selectSkill(item) {
            this.character.skill = item.title;
        },
        setBaseWeapon(item) {
            this.character.weapons.base = item.name;
        },
        setClassWeapon(item) {
            this.character.weapons.class = item.name;
        },
        setArmor(item) {
            this.character.armor = item.name;
        },
        setEquip(item) {
            this.character.equip = item.name
        },
        async postCharacter() {
            const docRef = await addDoc(collection(db, 'characters'), this.$store.state.character)
        },  
        createCharacter() {
            const pdfElem = document.querySelector('.charlist');
            const opt = {
                filename: 'foe-charlist.pdf',
                html2canvas: {scale: 4},
            };
            html2pdf().set(opt).from(pdfElem).save();
            this.postCharacter();
            }
            
    },
    
    mounted() {
        for(let blocks in this.$store.state.triggers.items) {
            this.$store.state.triggers.items[blocks].forEach(element => {
                this.triggersArray.push(element.title)
            });
        }
    }
        
}
</script>

<style lang="scss">
    .creation {
        &__wrapper {
            min-height: 350px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__name {
            width: 300px;
            height: 50px;
            padding: 10px;
            font-size: 20px;
        }
        &__button {
            margin: 0 auto;
            margin-top: 50px;
        }
        &__class {
            &-active {
            color: #fff;
            background-color: #000;
            border: 1px solid #fff;
            }
        }
        &__insight {
            margin: 50px 30px 0 30px;
            width: 250px;
            min-height: 300px;
            align-self: flex-start;
            background-color: #fff;
            cursor: pointer;
            overflow: hidden;
            border-radius: 10px;
            &-active {
                background-color: #000;
                color: #fff;
            }
            &-title {
                min-height: 70px;
                background-color: #000;
                color: #fff;
                display: flex;
                font-size: 21px;
                align-items: center;
                justify-content: center;
                &_active {
                    color: #000;
                    background-color: #fff;
                }
            }
            &-descr {
                font-size: 18px;
                margin-top: 30px;
                padding: 0 10px;
            }
            
        }
        &__triggers {
            &-items {
                margin-top: 50px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: space-between;
                &_item {
                    width: 20%;
                    height: 70px;
                    border: 2px solid black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 10px;
                    font-size: 20px;
                    cursor: pointer;
                    &-active {
                        border-color: #fff;
                        background-color: #000;
                        color: #fff;
                    }
                }
            }
            &-subtitle {
                font-size: 25px;
                margin-top: 30px;
            }
            
        }
        &__skills {
            width: 80%;
            &-subtitle {
                font-size: 25px;
                margin-top: 30px;
            }
            &-items {
                margin-top: 50px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            &-item {
                width: 30%;
                height: 70px;
                border: 2px solid black;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 10px;
                font-size: 22px;
                cursor: pointer;
                &_active {
                    background-color: #fff;
                }
            }
        }
        &__weapons {
            min-height: 300px;
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            &-class,&-base {
                width: 40%;
                &_subtitle {
                    font-size: 20px;
                }
            }
            &-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 50px;
            }
            &-item {
                width: 150px;
                border: 2px solid black;
                padding: 10px;
                cursor: pointer;
                &_active {
                    background-color: #fff;
                }
            }
        }
        &__armor,&__equip {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            &-item {
                width: 30%;
                font-size: 20px;
                border: 2px solid black;
                padding: 10px;
                cursor: pointer;
                &_stats {
                    margin-top: 10px;
                }
                &_active {
                    background-color: #fff;
                }
            }
        }
        
    }
    @media (max-width: 1400px) {
        .creation__insight {
            min-height: 350px;
        }
        .creation__weapons {
            &-class {
                min-width: 300px;
            }
            &-base {
                min-width: 300px;
            }
            &-item {
                margin: 0 10px;
            }
        }
        .creation__armor {
            width: 100%;
        }
        .creation__equip {
            width: 100%;
        }
    }
</style>