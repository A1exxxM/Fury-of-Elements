<template>
    <section class="elems">
        <elems-hello/>
        <elems-lore/>
        <elems-types @changeElem="changeElem"/>
        <elems-classes/>
        <elems-properties/>
        <elems-triggers/>
        <elems-skills/>
        <elems-piercing/>
        <elems-spells/>
    </section>
</template>

<script>
import ElemsHello from '@/components/ElemsHello/ElemsHello.vue';
import ElemsTypes from '@/components/ElemsTypes/ElemsTypes.vue';
import ElemsLore from '@/components/ElemsLore/ElemsLore.vue';
import ElemsClasses from '@/components/ElemsClasses/ElemsClasses.vue';
import ElemsProperties from '@/components/ElemsProperties/ElemsProperties.vue';
import ElemsTriggers from '@/components/ElemsTriggers/ElemsTriggers.vue';
import ElemsSkills from '@/components/ElemsSkills/ElemsSkills.vue';
import ElemsPiercing from '@/components/ElemsPiercing/ElemsPiercing.vue';
import ElemsSpells from '@/components/ElemsSpells/ElemsSpells.vue';
export default {

	components: { ElemsHello,ElemsTypes,ElemsLore,ElemsClasses,ElemsProperties,ElemsTriggers,ElemsSkills,ElemsPiercing,ElemsSpells },
	methods: {
		changeElem(elem) {
			this.$emit('changeElem', elem)
		}
	}
}

</script>

<style>

</style>