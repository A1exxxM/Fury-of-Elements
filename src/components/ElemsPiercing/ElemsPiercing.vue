<template>
  <section class="elems__piercing container">
    <page-title>Система пробивания</page-title>
    <div class="elems__piercing-descr">
		Стихийная защита - характеристика, отвечающая за вашу устойчивость к урону<br><br>
		В начале вашего хода вы совершаете бросок 1d20 против цели, которую готовитесь атаковать.<br>
		Эта величина называется Стихийное пробивание<br><br>
		Для успешного нанесения полного урона:<br> Стихийное пробивание > Стихийная защита<br><br>
		При непрохождении порога стихийной защиты: цели наносится 1/3 (округление в большую сторону)<br> На следующий бросок стихийного пробивания идет бонус +1 и так далее, пока вы не сможете нанести полный урон
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	.elems__piercing {
		
		&-descr {
			font-size: 27px;
			line-height: 45px;
		}
	}
	@media (max-width: 992px) {
		.elems__piercing {
			&-descr {
				font-size: 23px;
				line-height: 35px;
			}
		}
	}
	@media (max-width: 576px) {
		.elems__piercing {
			&-descr {
				font-size: 20px;
				line-height: 30px;
			}
		}
	}
</style>