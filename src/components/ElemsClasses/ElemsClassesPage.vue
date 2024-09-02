<template>
  <section class="classes container page">
    <page-title>Классы</page-title>
    <div class="classes__wrapper">
      <div class="classes__info">
        <div class="classes__icon">
			<img :src="$store.state.classes[$store.state.currentClass].img" :alt="$store.state.classes[$store.state.currentClass].title">
		</div>
		<div class="classes__name">{{ $store.state.classes[$store.state.currentClass].title }}</div>
        <div class="classes__page" @click="$router.push(`/classes/${$store.state.classes[$store.state.currentClass].path}`)">Подробнее</div>
      </div>
      <div class="classes__descr">{{ $store.state.classes[$store.state.currentClass].descr }}
      </div>
    </div>
    <ul class="classes__list">
		<big-button class="classes__list-item" :class="{'button__active' : item.id ==  $store.state.currentClass}" :key="item" v-for="item in $store.state.classes" @click="selectClass(item)">{{ item.title }}</big-button>
	</ul>
  </section>
</template>

<script>
export default {
	methods: {
		selectClass(item) {
			this.$store.commit('selectClass', item)
		}
 	}
}
</script>

<style scoped lang="scss">
	.classes {
		color: #fff;
		&__wrapper {
			margin-top: 100px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 150px
		}
		&__icon {
			display: block;
			height: 250px;
			width: 250px;
			margin: 0 auto;
			img {
				width: 100%;
				height: 100%;
			}
		}
		&__descr {
			padding: 50px;
			width: 50%;
			font-size: 20px;
		}
		&__page {
			margin-top: 50px;
			cursor: pointer;
		}
		&__name {
			margin-top: 20px;
			font-size: 20px;
		}
		&__list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 50%;
			margin: 0 auto;
			margin-top: 150px;
			
		}
	}
	@media (max-width: 1400px) {
		.classes {
			&__wrapper {
				padding: 0;
			}
			&__descr {
				padding: 10px;
			}
			&__list {
				width: 100%;
			}
		}
	}
	@media (max-width: 768px) {
		.classes {
			&__wrapper {
				flex-direction: column-reverse;
			}
			&__descr {
				width: 100%;
			}
			&__info {
				margin-top: 30px;
			}
			&__list {
				flex-wrap: wrap;
				&-item {
					&:nth-child(4) {
						margin-top: 20px;
					}
					&:nth-child(3) {
						margin-top: 20px;
					}
				}
			}
		}
	}
	@media (max-width: 576px) {
		.classes {
			&__list {
				&-item {
					width: 100%;
					margin-top: 20px;
				}
		}
		}
		
	}
</style>