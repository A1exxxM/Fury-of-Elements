import { createStore } from 'vuex';

const store = createStore({
    state () {
      return {
		currentClass: 0,
		currentClassType: 'utility',
		currentCombination: 0,
		currentType: 0,
		currentInsight: 0,
		typesRules: ['Правило 1','Правило 2','Правило 3'],
		insightsRules: ['Правило 1','Правило 2','Правило 3'],
		currentFilter: 'first',
		navbar: true,
		baseWeapons: [
			{
				name: 'Лук',
				value: '1d6'
			},
			{
				name: 'Двуручный меч',
				value: '1d10'
			},
			{
				name: 'Кинжал',
				value: '1d6'
			}
		],
		equipment: [
			{
				name: 'Набор 1',
				value: 'Описание набора 1'
			},
			{
				name: 'Набор 2',
				value: 'Описание набора 2'
			},
			{
				name: 'Набор 3',
				value: 'Описание набора 3'
			}
		],
		properties: [
			{
				id: 0,
				name: 'Характеристики',
				value: 'utility'
			},
			{
				id: 1,
				name: 'Оружие',
				value: 'weapons'
			},
			{
				id: 2,
				name: 'Броня',
				value: 'armor'
			},
		],
		lore: {
			world: [
				{
					title: 'Дайтон',
					img: '/Fury-of-Elements/dist/assets/img/maps/world.webp',
					descr: 'Дайтон - материк, расколотый во время великого Катаклизма. До Катаклизма был центром развитой и процветающей цивилизации. Дайтон разделен на 5 частей: Королевство Аронвайд, Тиссилию, Республику Люмиос, земли Тарондара и Катарат. Сохранилось не так много сведений о прошлом величии цивилизации, жившей на этих землях'
				},
				{
					title: 'Великий катаклизм',
					img: '/Fury-of-Elements/dist/assets/img/maps/cataclysm.jpg',
					descr: 'Описание Катаклизма'
				},
				{
					title: 'Катарат',
					img: '/Fury-of-Elements/dist/assets/img/maps/katarat.jpg',
					descr: 'Описание Катарата'
				}
			],
			countries: [
				{	
					title: 'Аронвайд',
					img: '/Fury-of-Elements/dist/assets/img/maps/aronvaid.jpg',
					descr: 'Описание Аронвайда'
				},
				{	
					title: 'Тиссилия',
					img: '/Fury-of-Elements/dist/assets/img/maps/tissilia.jpg',
					descr: 'Описание Тиссилии'
				},
				{	
					title: 'Королевство Люмиос',
					img: '/Fury-of-Elements/dist/assets/img/maps/lumios.jpg',
					descr: 'Описание Люмиоса'
				},
				{	
					title: 'Земли Тародара',
					img: '/Fury-of-Elements/dist/assets/img/maps/tarondar.jpg',
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
				img: '/Fury-of-Elements/dist/assets/img/elements/blood.jpg',
				combination: [
					{title: 'Пустота', name: 'Поглощение', id: 0, descr: 'Создает щит из крови вокруг цели'},
					{title: 'Природа', name: 'Осквернение', id: 1, descr: 'Создает помехи для цели'}, 
					{title: 'Свет', name: 'Окропление', id: 2, descr: 'Цель не может себя контролировать и отступает назад'}
				], 
        	},
			{
				id: 1,
				title: 'Пустота',
				descr: 'Описание пустоты',
				path: 'void',
				lore: 'Описание лора стихии',
				img: '/Fury-of-Elements/dist/assets/img/elements/void.jpg',
				combination: [
					{title: 'Кровь', name: 'Порабощение', id: 0, descr: 'Цель атакует выбранного персонажа'},
					{title: 'Природа', name: 'Вторжение', id: 1, descr: 'Земля рядом с целью проваливается вниз'}, 
					{title: 'Свет', name: 'Затухание', id: 2, descr: 'Цель наносит меньше урона и получает повышенный урон'}
				], 
        	},
			{
				id: 2,
				title: 'Природа',
				descr: 'Описание природы',
				path: 'nature',
				lore: 'Описание лора стихии',
				img: '/Fury-of-Elements/dist/assets/img/elements/nature.jpg',
				combination: [
					{title: 'Кровь', name: 'Зарождение', id: 0, descr: 'Исцеляет цель на 1d6'},
					{title: 'Пустота', name: 'Терраформирование', id: 1, descr: 'Создает перед целью стену лиан'}, 
					{title: 'Свет', name: 'Цветение', id: 2, descr: 'Окружает цель лианами, отправляет в спячку на этот ход, цель не может получить урон'}
				], 
        	},
			{
				id: 3,
				title: 'Свет',
				descr: 'Описание света',
				path: 'light',
				lore: 'Описание лора стихии',
				img: '/Fury-of-Elements/dist/assets/img/elements/light.jpg',
				combination: [
					{title: 'Кровь', name: 'Святость', id: 0, descr: 'Цель наносит дополнительный урон и имеет щит (1d6)'},
					{title: 'Пустота', name: 'Освящение', id: 1,  descr: 'Наносит цели 1d6 урона, заставляет упасть на колени'}, 
					{title: 'Природа', name: 'Перенасыщение', id: 2,  descr: 'Вокруг цели расцветают ядовитые цветы'}
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
				img: '/Fury-of-Elements/dist/assets/img/classes/warrior.jpg',
				subclasses: [
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
				],
				utility: [
					{name: 'Кость Хитов', value: '1d10 за каждый уровень воина'},
					{name: 'Заряды стихий', value: '1 за каждый уровень воина'},
				],
				weapons: [
					{
						name: 'Оружие воина 1',
						value: '2d4'
					},
					{
						name: 'Оружие воина 2',
						value: '1d6'
					}
				],
				armor: [
					{
						name: 'Тяжелая броня воина',
						speed: '5',
						resist: '15',
						value: `Скорость 5, Стихийная защита 15`
					},
					{
						name: 'Универсальная броня воина',
						speed: '6',
						resist: '13',
						value: `Скорость 6, Стихийная защита 13`
					},
					{
						name: 'Легкая броня воина',
						speed: '7',
						resist: '11',
						value: `Скорость 7, Стихийная защита 11`
					}
				],
				abilities: {
					level: [
						{
						id: 0,
						skills: [
							{title: 'Название способности', descr: 'Описание способности'},
							{title: 'Название способности', descr: 'Описание способности'},
							{title: 'Название способности', descr: 'Описание способности'},
						],
						spells: [
							{title: 'Название заклинания', descr: 'Описание заклинания'},
						]
						},
						{
						id: 1,
						skills: [
							{title: 'Название способности', descr: 'Описание способности'},
						],
						spells: [
							{title: 'Название заклинания', descr: 'Описание заклинания'},
						]
						},
						{
						id: 2,
						skills: [
							{title: 'Название способности', descr: 'Описание способности'},
						],
						spells: [
							{title: 'Название заклинания', descr: 'Описание заклинания'},
						]
						}
					]
				}
			},
			{
				id: 1,
				path: 'bard',
				title: 'Бард',
				descr: 'Описание барда',
				ability: 'Врожденная способность барда',
				img: '/Fury-of-Elements/dist/assets/img/classes/bard.jpg',
				subclasses: [
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
				],
				utility: [
					{name: 'Кость Хитов', value: '1d10 за каждый уровень барда'},
					{name: 'Заряды стихий', value: '1 за каждый уровень бард'},
				],
				weapons: [
					{
						name: 'Оружие барда 1',
						value: '2d4'
					},
					{
						name: 'Оружие барда 2',
						value: '1d6'
					}
				],
				armor: [
					{
						name: 'Тяжелая броня барда',
						speed: '5',
						resist: '15'

					},
					{
						name: 'Универсальная броня барда',
						speed: '6',
						resist: '13'
					},
					{
						name: 'Легкая броня барда',
						speed: '7',
						resist: '11'
					}
				],
				spells: [
					{title: 'Название способности', lvl: 'Уровень 1', descr: 'Описание способности'},
					{title: 'Название способности', lvl: 'Уровень 1', descr: 'Описание способности'},
					{title: 'Название способности', lvl: 'Уровень 2', descr: 'Описание способности'},
					{title: 'Название способности', lvl: 'Уровень 2', descr: 'Описание способности'},
				]
			},
			{
				id: 2,
				path: 'mage',
				title: 'Маг',
				descr: 'Описание мага',
				ability: 'Врожденная способность мага',
				img: '/Fury-of-Elements/dist/assets/img/classes/mage.jpg',
				subclasses: [
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
				],
				hits: {name: 'Здоровье', value: '1d10'},
				weapons: [
					{
						name: 'Оружие мага 1',
						value: '2d4'
					},
					{
						name: 'Оружие мага 2',
						value: '1d6'
					}
				],
				armor: [
					{
						name: 'Тяжелая броня мага',
						speed: '5',
						resist: '15'
					},
					{
						name: 'Универсальная броня мага',
						speed: '6',
						resist: '13'
					},
					{
						name: 'Легкая броня мага',
						speed: '7',
						resist: '11'
					}
				]
			},
			{
				id: 3,
				path: 'rogue',
				title: 'Разбойник',
				descr: 'Описание разбойника',
				ability: 'Врожденная способность разбойника',
				img: '/Fury-of-Elements/dist/assets/img/classes/rogue.jpg',
				subclasses: [
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
				],
				hits: {name: 'Здоровье', value: '1d10'},
				weapons: [
					{
						name: 'Оружие разбойника 1',
						value: '2d4'
					},
					{
						name: 'Оружие разбойника 2',
						value: '1d6'
					}
				],
				armor: [
					{
						name: 'Тяжелая броня разбойника',
						speed: '5',
						resist: '15'

					},
					{
						name: 'Универсальная броня разбойника',
						speed: '6',
						resist: '13'
					},
					{
						name: 'Легкая броня разбойника',
						speed: '7',
						resist: '11'
					}
				],
			}
		],
		insights: {
			descr: 'Описание системы озарений',
			items: [
				{title: 'Озарение боли', descr: 'При получении урона вы получаете заряд боли, эффект срабатывает 3 раза за короткий отдых. Заряд боли наносит 1d6 урона. Пока у вас есть хотя бы 1 заряд, ваш показатель здоровья не может подняться выше 50% от максимального значения', id: 0},
				{title: 'Озарение одиночества', descr: 'Вы всегда ходите первым. Eсли в радиусе от вас нет никого, то вы наносите дополнительный урон, но и получаете дополнительный урон', id: 1},
				{title: 'Озарение магии', descr: 'Раз в долгий отдых вы можете снять перезарядку своего заклинания. Имеете % шанс дублировать свое заклинание', id: 2}
			]
		},
		triggers: {
			descr: 'Навыки вашего персонажа, которые ему пригодятся во время странствий по миру',
			rules: ['Категории условные, созданы для удобного разделения триггеров', 'Система Триггеров - не боевая система, она служит реакцией на события или ситуации, которые произошли с вашим персонажем во время его странствий по миру за пределами боевых сцен', 'Во время создания персонажа вы выберете себе 3 Триггера'],
			filters: [
				{
					filter: 'first',
					title: 'Ловкость'
				},
				{
					filter: 'second',
					title: 'Сила'
				},
				{
					filter: 'third',
					title: 'Интеллект'
				},
				{
					filter: 'fourth',
					title: 'Харизма'
				},
			],
			items: {
				first: [
					{
						title: 'Ловкость рук',
						descr: 'И никакого мошенничества. Подбросить записку, стащить кошелек - вот то, чему научили вас улицы.'
					},
					{
						title: 'Акробатика',
						descr: 'Вы очень пластичны, залезть куда-то или протиснуться - для вас забава '
					},
					{
						title: 'Кошачья реакция',
						descr: 'Вы можете очень быстро среагировать на какое-либо действие или выпад в вашу сторону'
					},
					{
						title: 'Незаметность',
						descr: 'Вы умеете смешиваться с толпой, оставаясь в тени. Вас сложнее обнаружить'
					},
				],
				second: [
					{
						title: 'Стальной кулак',
						descr: 'Зачем меч, когда есть кулак? Ваш удар кулаком - ваша визитная карточка. Не важно, что встретит на своем пути ваш кулак: друзей, врагов, стены или двери. Кулак всегда найдет применение'
					},
					{
						title: 'Широкая кость',
						descr: 'Вас невероятно тяжело сдвинуть с места и повалить на землю. Проще вернуться живым из Катарата или выпить бочку свежего эля'
					},
					{
						title: 'Бугай',
						descr: 'Вы устрашаете окружающих, от вас веет возможной угрозой и неприятностями, в вашу сторону стараются не смотреть. Только не смотрите в зеркало, чтобы не испугаться'
					},
					{
						title: 'Истинный воин',
						descr: 'Вы способны выдержать большое количество ударов. Когда-нибудь выигрывали бои без единого удара? '
					},
				],
				third: [
					{
						title: 'Пронициательность',
						descr: 'Вы можете чувствовать, когда вам врут'
					},
					{
						title: 'Обнаружение стихий',
						descr: 'Вы можете почувствовать использовал ли человек перед вами магию стихий недавно'
					},
					{
						title: 'Холодная голова',
						descr: 'Даже в стрессовых условиях вы способны оценить ситуацию и найти выход'
					},
					{
						title: 'Обнаружение',
						descr: 'Вы способны обнаружить скрытые детали, которые не видят окружающие'
					},
				],
				fourth: [
					{
						title: 'Сладкие речи',
						descr: 'Обман для вас - часть любого разговора'
					},
					{
						title: 'Ищейка',
						descr: 'Вы отлично собираете информацию, слышите даже тихие разговоры'
					},
					{
						title: 'Гроза сердец',
						descr: 'Вы способны очаровать противоположный пол, кто знает к чему это приведет'
					},
					{
						title: 'Подделка',
						descr: 'У вас неплохо получается прикинуться кем-то другим, эффектно подделывая его голос, мимику и поведение'
					},
				]
			}
		},
		skills: {
			descr: 'Описание системы боевых умений',
			rules: ['Правило 1', 'Правило 2', 'Правило 3'],
			items: [
				{
					title: 'Название 1',
					descr: 'Описание'
				},
				{
					title: 'Название 2',
					descr: 'Описание'
				},
				{
					title: 'Название 3',
					descr: 'Описание'
				},
				{
					title: 'Название 4',
					descr: 'Описание'
				},
				{
					title: 'Название 5',
					descr: 'Описание'
				},
				{
					title: 'Название 6',
					descr: 'Описание'
				},
			]
		},
		character: {
			name: '',
			class: '',
			subclass: '',
			insight: {
				name: '',
				descr: '',
			},
			triggers: [],
			skill: {
				name: '',
				descr: '',
			},
			weapons: {
				base: {
					name: '',
					value: ''
				},
				class: {
					name: '',
					value: ''
				},
			},
			armor: {
				speed: '',
				resist: ''
			},
			equip: ''
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
	  },
	  createCharacter(state, newCharacter) {
		state.character.name = newCharacter.name;
		state.character.class = state.classes[newCharacter.class].title;
		newCharacter.triggers.forEach(trigger => {
			for (let block in state.triggers.items) {
				state.triggers.items[block].forEach(item => {
					if (item.title == trigger) {
						state.character.triggers.push(item)
					}
				});
			}
		});
		state.skills.items.forEach(skill => {
			if (skill.title == newCharacter.skill) {
				state.character.skill.name = skill.title;
				state.character.skill.descr = skill.descr;
			}
		});
		state.character.insight.name = state.insights.items[newCharacter.insight].title;
		state.character.insight.descr = state.insights.items[newCharacter.insight].descr;
		state.classes[newCharacter.class].weapons.forEach(weapon => {
			if (newCharacter.weapons.class == weapon.name) {
				state.character.weapons.class.name = weapon.name;
				state.character.weapons.class.value = weapon.value;
			}
		});
		state.baseWeapons.forEach(weapon => {
			if(weapon.name == newCharacter.weapons.base) {
				state.character.weapons.base.name = weapon.name;
				state.character.weapons.base.value = weapon.value;
			}
		});
		state.classes[newCharacter.class].armor.forEach(item => {
			if(item.name == newCharacter.armor) {
				state.character.armor.speed = item.speed;
				state.character.armor.resist = item.resist;
			}
		});
		state.character.equip = newCharacter.equip
	  }
    },
    actions: {
        
    }
  })

export default store;

