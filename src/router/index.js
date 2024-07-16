import { createRouter, createWebHistory } from 'vue-router';
import ElemsPreview from '@/components/ElemsPreview.vue';
import ElemsTypesPage from '@/components/ElemsTypes/ElemsTypesPage.vue';
import ElemsClassesPage from '@/components/ElemsClasses/ElemsClassesPage.vue';
import ElemsLorePage from '@/components/ElemsLore/ElemsLorePage.vue';
import ElemsPropertiesPage from '@/components/ElemsProperties/ElemsPropertiesPage.vue';
import ElemsSkillsPage from '@/components/ElemsSkills/ElemsSkillsPage.vue';
import ElemsSpellsPage from '@/components/ElemsSpells/ElemsSpellsPage.vue';
import ElemsTriggersPage from '@/components/ElemsTriggers/ElemsTriggersPage.vue';
import ElemsClassesItem from '@/components/ElemsClasses/ElemsClassesItem.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: ElemsPreview
		},
		{
			path: '/classes',
			component: ElemsClassesPage
		},
		{
			path: '/classes/:path',
			component: ElemsClassesItem
		},
		{
			path: '/lore',
			component: ElemsLorePage
		},
		{
			path: '/insights',
			component: ElemsPropertiesPage
		},
		{
			path: '/skills',
			component: ElemsSkillsPage
		},
		{
			path: '/spells',
			component: ElemsSpellsPage
		},
		{
			path: '/triggers',
			component: ElemsTriggersPage
		},
		{
			path: '/types',
			component: ElemsTypesPage
		}
	]
})

export default router
