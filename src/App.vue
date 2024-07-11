<template>
	<elems-hello/>
	<elems-lore/>
	<elems-types @changeElem="changeElem"/>
	<elems-classes/>
	<elems-properties/>
</template>

<script>
import ElemsHello from '@/components/ElemsHello/ElemsHello.vue';
import ElemsTypes from '@/components/ElemsTypes/ElemsTypes.vue';
import ElemsLore from '@/components/ElemsLore/ElemsLore.vue';
import ElemsClasses from '@/components/ElemsClasses/ElemsClasses.vue';
import ElemsProperties from '@/components/ElemsProperties/ElemsProperties.vue';

export default {

	components: { ElemsHello,ElemsTypes,ElemsLore,ElemsClasses,ElemsProperties },
	methods: {
		changeElem(elem) {
			this.$store.commit('changeElem', elem)
		}
	}
}

</script>

<style lang="scss">
	* {
		font-family: "Oswald", sans-serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
	}
	body {
		background-color: #474A51;
	}
	.container {
		width: 80%;
		margin: 0 auto;
	}
	section {
		min-height: 900px;
		text-align: center;
	}
</style>
