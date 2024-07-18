import { createStore } from 'vuex';

const store = createStore({
    state () {
      return {
        currentElem: '',
		currentClass: 0,
		currentClassType: 'hits',
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
        elements: [
        	{
				id: 0,
				title: 'Кровь',
				descr: 'Описание крови',
				img: '/src/assets/img/blood.jpg',
				combination: [
					{title: 'Пустота', descr: 'Описание взаимодействия с пустотой'},
					{title: 'Природа', descr: 'Описание взаимодействия с природой'}, 
					{title: 'Свет', descr: 'Описание взаимодействия с светом'}
				], 
        	},
			{
				id: 1,
				title: 'Пустота',
				descr: 'Описание пустоты',
				img: '/src/assets/img/void.jpg',
				combination: [
					{title: 'Кровь', descr: 'Описание взаимодействия с кровью'},
					{title: 'Природа', descr: 'Описание взаимодействия с природой'}, 
					{title: 'Свет', descr: 'Описание взаимодействия с светом'}
				], 
        	},
			{
				id: 2,
				title: 'Природа',
				descr: 'Описание природы',
				img: '/src/assets/img/nature.jpg',
				combination: [
					{title: 'Кровь', descr: 'Описание взаимодействия с кровью'},
					{title: 'Пустота', descr: 'Описание взаимодействия с пустотой'}, 
					{title: 'Свет', descr: 'Описание взаимодействия со светом'}
				], 
        	},
			{
				id: 3,
				title: 'Свет',
				descr: 'Описание света',
				img: '/src/assets/img/light.jpg',
				combination: [
					{title: 'Кровь', descr: 'Описание взаимодействия с кровью'},
					{title: 'Пустота', descr: 'Описание взаимодействия с пустотой'}, 
					{title: 'Природа', descr: 'Описание взаимодействия с природой'}
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
			}
		],
		insights: {
			descr: 'Описание системы озарений',
			items: [
				{title: 'Сила', descr: 'Описание механики силы'},
				{title: 'Ловкость', descr: 'Описание механики ловкости'},
				{title: 'Интеллект', descr: 'Описание механики интеллекта'}
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
	  }
    },
    actions: {
        
    }
  })

export default store;

