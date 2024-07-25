<template>
	<elems-navbar/>
	<router-view>
		
	</router-view>
</template>

<script>



export default {
	methods: {
		
	}
}

</script>

<style lang="scss">
	* {
		font-family: "Oswald", sans-serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
		box-sizing: border-box;
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
		padding: 150px 0;
	}
</style>
