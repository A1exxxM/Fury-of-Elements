<template>
    <section class="elems__classes">
      <h2 class="elems__classes-title">Классы</h2>
      <div class="elems__classes-descr">Описание общей концепции классов</div>
      <div class="elems__classes-class">
        <h3 class="elems__classes-class_title">{{ $store.state.classes[0].title }}</h3>
        <div class="elems__classes-class_ability">{{ $store.state.classes[0].descr }}</div>
        <div class="elems__classes-class_subclasses">
            <div class="elems__classes-class_subclass" :key="subclass" v-for="subclass in $store.state.classes[0].subclasses">
                <div class="elems__classes-class_subtitle">{{ subclass.title }}</div>
                <div class="elems__classes-class_subdescr">{{ subclass.descr }}</div>
                <div class="elems__classes-class_subtype">{{ subclass.element}}</div>
            </div>
        </div>
      </div> 
    </section>
</template>
  
<script>
  export default {
  
  }
</script>
  
<style lang="scss" scoped>
    .elems__classes {
        &-title {
            font-size: 50px;
        }
        &-class {
            margin-top: 25px;
            &_subclasses {
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-top: 50px;
            }
        }
    }
</style>