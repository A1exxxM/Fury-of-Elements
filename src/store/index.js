import { createStore } from 'vuex';

const store = createStore({
    state () {
      return {
        currentElem: '',
        elements: [
        	{
				id: 0,
				title: 'Огонь',
				descr: 'Описание огня',
				combination: [
					{title: 'Вода', descr: 'Описание взаимодействия с водой'},
					{title: 'Воздух', descr: 'Описание взаимодействия с воздухом'}, 
					{title: 'Земля', descr: 'Описание взаимодействия с землей'}
				], 
        	},
			{
				id: 1,
				title: 'Вода',
				descr: 'Описание воды',
				combination: [
					{title: 'Огонь', descr: 'Описание взаимодействия с огнем'},
					{title: 'Земля', descr: 'Описание взаимодействия с землей'}, 
					{title: 'Воздух', descr: 'Описание взаимодействия с воздухом'}
				], 
        	},
			{
				id: 2,
				title: 'Воздух',
				descr: 'Описание воздуха',
				combination: [
					{title: 'Огонь', descr: 'Описание взаимодействия с огнем'},
					{title: 'Вода', descr: 'Описание взаимодействия с водой'}, 
					{title: 'Земля', descr: 'Описание взаимодействия с землей'}
				], 
        	},
			{
				id: 3,
				title: 'Земля',
				descr: 'Описание земли',
				combination: [
					{title: 'Огонь', descr: 'Описание взаимодействия с огнем'},
					{title: 'Вода', descr: 'Описание взаимодействия с водой'}, 
					{title: 'Воздух', descr: 'Описание взаимодействия с воздух'}
				], 
        	},
        ],
        classes: [
			{
				title: 'Воин',
				descr: 'Описание воина',
				ability: 'Врожденная способность воина',
				subclasses: [
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
					{title: 'Подкласс первый', descr: 'Краткое описание', element: 'Элемент'},
				]
			}
		],
		properties: {
			descr: 'Описание системы характеристик',
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
      }
    },
    actions: {
        
    }
  })

export default store;

