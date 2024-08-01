import { createStore } from 'vuex';

const store = createStore({
    state () {
      return {
		currentClass: 0,
		currentClassType: 'hits',
		currentCombination: 0,
		currentType: 0,
		currentInsight: 0,
		typesRules: ['Правило 1','Правило 2','Правило 3'],
		insightsRules: ['Правило 1','Правило 2','Правило 3'],
		currentFilter: 'first',
		navbar: false,
		properties: [
			{
				id: 0,
				name: 'Хиты',
				value: 'hits'
			},
			{
				id: 1,
				name: 'Владения',
				value: 'skills'
			},
			{
				id: 2,
				name: 'Снаряжение',
				value: 'equipment'
			},
		],
		lore: {
			world: [
				{
					title: 'Структура мира',
					img: '/Fury-of-Elements/src/assets/img/maps/world.jpg',
					descr: 'Описание мира'
				},
				{
					title: 'Великий катаклизм',
					img: '/Fury-of-Elements/src/assets/img/maps/world.jpg',
					descr: 'Описание Катаклизма'
				},
				{
					title: 'Катарат',
					img: '/Fury-of-Elements/src/assets/img/maps/world.jpg',
					descr: 'Описание Катарата'
				}
			],
			countries: [
				{	
					title: 'Аронвайд',
					img: '/Fury-of-Elements/src/assets/img/maps/aronvaid.jpg',
					descr: 'Описание Аронвайда'
				},
				{	
					title: 'Тиссилия',
					img: '/Fury-of-Elements/src/assets/img/maps/tissilia.jpg',
					descr: 'Описание Тиссилии'
				},
				{	
					title: 'Королевство Люмиос',
					img: '/Fury-of-Elements/src/assets/img/maps/lumios.jpg',
					descr: 'Описание Люмиоса'
				},
				{	
					title: 'Земли Тародара',
					img: '/Fury-of-Elements/src/assets/img/maps/tarondar.jpg',
					descr: 'Описание Тародара'
				},
			]
		},
        elements: [
        	{
				id: 0,
				title: 'Кровь',
				descr: 'Описание крови',
				path: 'blood',
				lore: 'Описание лора стихии',
				img: '/Fury-of-Elements/src/assets/img/elements/blood.jpg',
				combination: [
					{title: 'Пустота', name: 'Название 1', id: 0, descr: 'Описание взаимодействия с пустотой'},
					{title: 'Природа', name: 'Название 2', id: 1, descr: 'Описание взаимодействия с природой'}, 
					{title: 'Свет', name: 'Название 3', id: 2, descr: 'Описание взаимодействия с светом'}
				], 
        	},
			{
				id: 1,
				title: 'Пустота',
				descr: 'Описание пустоты',
				path: 'void',
				lore: 'Описание лора стихии',
				img: '/Fury-of-Elements/src/assets/img/elements/void.jpg',
				combination: [
					{title: 'Кровь', name: 'Название 1', id: 0, descr: 'Описание взаимодействия с кровью'},
					{title: 'Природа', name: 'Название 2', id: 1, descr: 'Описание взаимодействия с природой'}, 
					{title: 'Свет', name: 'Название 3', id: 2, descr: 'Описание взаимодействия с светом'}
				], 
        	},
			{
				id: 2,
				title: 'Природа',
				descr: 'Описание природы',
				path: 'nature',
				lore: 'Описание лора стихии',
				img: '/Fury-of-Elements/src/assets/img/elements/nature.jpg',
				combination: [
					{title: 'Кровь', name: 'Название 1', id: 0, descr: 'Описание взаимодействия с кровью'},
					{title: 'Пустота', name: 'Название 2', id: 1, descr: 'Описание взаимодействия с пустотой'}, 
					{title: 'Свет', name: 'Название 3', id: 2, descr: 'Описание взаимодействия со светом'}
				], 
        	},
			{
				id: 3,
				title: 'Свет',
				descr: 'Описание света',
				path: 'light',
				lore: 'Описание лора стихии',
				img: '/Fury-of-Elements/src/assets/img/elements/light.jpg',
				combination: [
					{title: 'Кровь', name: 'Название 1', id: 0, descr: 'Описание взаимодействия с кровью'},
					{title: 'Пустота', name: 'Название 2', id: 1,  descr: 'Описание взаимодействия с пустотой'}, 
					{title: 'Природа', name: 'Название 3', id: 2,  descr: 'Описание взаимодействия с природой'}
				], 
        	},
        ],
        classes: [
			{
				id: 0,
				path: 'warrior',
				title: 'Воин',
				descr: 'Описание воина',
				ability: 'Врожденная способность воина',
				img: '/Fury-of-Elements/src/assets/img/classes/warrior.jpg',
				subclasses: [
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
				],
				stats: [
					{title: 'Здоровье', value: '10'},
					{title: 'Защита', value: '15'},
				],
				hits: [
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень воина'},
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень воина'},
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень воина'}
				],
				skills: [
					{name: 'Броня', value: '1 вид брони или 2 вид брони'},
					{name: 'Оружие', value: '1 тип оружия или специальное оружие воина'},
					{name: 'Спасброски', value: 'Сила'}
				],
				equipment: [
					{name: 'Стартовая броня', value: 'Доспех 1 или доспех 2'},
					{name: 'Стартовое оружие', value: 'Набор оружия 1 или набор оружия 2'},
					{name: 'Стартовый набор инструментов', value: 'Набор 1 или набор 2'}
				],
				spells: [
					{title: 'Название способности', lvl: 'Уровень 1', descr: 'Описание способности'},
					{title: 'Название способности', lvl: 'Уровень 2', descr: 'Описание способности'},
					{title: 'Название способности', lvl: 'Уровень 3', descr: 'Описание способности'},
					{title: 'Название способности', lvl: 'Уровень 4', descr: 'Описание способности'},
				]
			},
			{
				id: 1,
				path: 'bard',
				title: 'Бард',
				descr: 'Описание барда',
				ability: 'Врожденная способность барда',
				img: '/Fury-of-Elements/src/assets/img/classes/bard.jpg',
				subclasses: [
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
				],
				stats: [
					{title: 'Здоровье', value: '10'},
					{title: 'Защита', value: '15'},
					{title: 'Ячейки заклинаний', value: '3'},
				],
				hits: [
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень барда'},
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень барда'},
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень воина'}
				],
				skills: [
					{name: 'Броня', value: '1 вид брони или 2 вид брони'},
					{name: 'Оружие', value: '1 тип оружия или специальное оружие броня'},
					{name: 'Спасброски', value: 'Интеллект'}
				],
				equipment: [
					{name: 'Стартовая броня', value: 'Доспех 1 или доспех 2'},
					{name: 'Стартовое оружие', value: 'Набор оружия 1 или набор оружия 2'},
					{name: 'Стартовый набор инструментов', value: 'Набор 1 или набор 2'}
				]
			},
			{
				id: 2,
				path: 'mage',
				title: 'Маг',
				descr: 'Описание мага',
				ability: 'Врожденная способность мага',
				img: '/Fury-of-Elements/src/assets/img/classes/mage.jpg',
				subclasses: [
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
				],
				stats: [
					{title: 'Здоровье', value: '10'},
					{title: 'Защита', value: '15'},
					{title: 'Ячейки заклинаний', value: '4'},
				],
				hits: [
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень мага'},
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень мага'},
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень мага'}
				],
				skills: [
					{name: 'Броня', value: '1 вид брони или 2 вид брони'},
					{name: 'Оружие', value: '1 тип оружия или специальное оружие мага'},
					{name: 'Спасброски', value: 'Интеллект'}
				],
				equipment: [
					{name: 'Стартовая броня', value: 'Доспех 1 или доспех 2'},
					{name: 'Стартовое оружие', value: 'Набор оружия 1 или набор оружия 2'},
					{name: 'Стартовый набор инструментов', value: 'Набор 1 или набор 2'}
				]
			},
			{
				id: 3,
				path: 'rogue',
				title: 'Разбойник',
				descr: 'Описание разбойника',
				ability: 'Врожденная способность разбойника',
				img: '/Fury-of-Elements/src/assets/img/classes/rogue.jpg',
				subclasses: [
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
				],
				stats: [
					{title: 'Здоровье', value: '10'},
					{title: 'Защита', value: '15'},
					{title: 'Ячейки заклинаний', value: '4'},
				],
				hits: [
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень разбойника'},
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень мага'},
					{name: 'Кость Хитов', value: '1к10 = 1 за каждый уровень мага'}
				],
				skills: [
					{name: 'Броня', value: '1 вид брони или 2 вид брони'},
					{name: 'Оружие', value: '1 тип оружия или специальное оружие мага'},
					{name: 'Спасброски', value: 'Интеллект'}
				],
				equipment: [
					{name: 'Стартовая броня', value: 'Доспех 1 или доспех 2'},
					{name: 'Стартовое оружие', value: 'Набор оружия 1 или набор оружия 2'},
					{name: 'Стартовый набор инструментов', value: 'Набор 1 или набор 2'}
				]
			}
		],
		insights: {
			descr: 'Описание системы озарений',
			items: [
				{title: 'Сила', descr: 'Описание механики силы', id: 0},
				{title: 'Ловкость', descr: 'Описание механики ловкости', id: 1},
				{title: 'Интеллект', descr: 'Описание механики интеллекта', id: 2}
			]
		},
		triggers: {
			descr: 'Краткое описание системы триггеров',
			rules: ['Правило 1', 'Правило 2', 'Правило 3'],
			filters: [
				{
					filter: 'first',
					title: 'Фильтр 1'
				},
				{
					filter: 'second',
					title: 'Фильтр 2'
				},
				{
					filter: 'third',
					title: 'Фильтр 3'
				},
				{
					filter: 'fourth',
					title: 'Фильтр 4'
				},
			],
			items: {
				first: [
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
				],
				second: [
					{
						title: 'Название Второй 1',
						descr: 'Описание Второй 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
				],
				third: [
					{
						title: 'Название Третий 1',
						descr: 'Описание Третий 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
				],
				fourth: [
					{
						title: 'Название Четвертый 1',
						descr: 'Описание Четвертый 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
					{
						title: 'Название Первый 1',
						descr: 'Описание Первый 1'
					},
				]
			}
		},
		skills: {
			descr: 'Описание системы боевых умений',
			rules: ['Правило 1', 'Правило 2', 'Правило 3'],
			items: [
				{
					title: 'Название',
					descr: 'Описание'
				},
				{
					title: 'Название',
					descr: 'Описание'
				},
				{
					title: 'Название',
					descr: 'Описание'
				},
				{
					title: 'Название',
					descr: 'Описание'
				},
				{
					title: 'Название',
					descr: 'Описание'
				},
				{
					title: 'Название',
					descr: 'Описание'
				},
			]
		}
      }
    },
    mutations: {
      changeElem(state, elem) {
        state.currentElem = elem.id;
      },
	  selectClass(state, item) {
		state.currentClass = item.id
	  },
	  changeCurrentClassType(state, property) {
		state.currentClassType = property.value
	  },
	  changeActiveCombination(state, combination) {
		state.currentCombination = combination.id
	  },
	  changeCurrentInsight(state, item) {
		state.currentInsight = item.id
	  },
	  changeCurrentFilter(state, filter) {
		state.currentFilter = filter.filter;
	  }
    },
    actions: {
        
    }
  })

export default store;

