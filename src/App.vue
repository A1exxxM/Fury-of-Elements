<template>
	<elems-navbar/>
	<router-view>
		
	</router-view>
</template>

<script>



export default {

	
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
	.page {
		padding-top: 150px;
	}
</style>
