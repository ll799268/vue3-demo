<template>
  <div class="dynamic-components"> 
    <p>动态组件</p>
    <div class="menu">
      <span v-for="(menu, index) in menus" 
        :key="menu.id"
        :class="index === curIndex ? 'active' : ''"
        @click="handleChoice(index)">{{ menu.name }}</span>
    </div>
    <div class="content">
      <div v-for="(item, index) in componentsList"
        :key="index"
        :class="item.class">
        <component :is="item.name"
          :propsContent="item.props"></component>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, shallowRef } from 'vue'

  import Bar from '../../components/Bar/index.vue'
  import Line from '../../components/Line/index.vue'
  import Table from '../../components/Table/index.vue'

  const menus = [
    {
      id: 0,
      name: '首页',
      componentsList: [
        {
          name: Bar,
          class: 'two',
          props: {
            title: '参1'
          }
        },
        {
          name: Line,
          class: 'two'
        }
      ]
    },
    {
      id: 1,
      name: '商品',
      componentsList: [
        {
          name: Line,
          class: 'one'
        },
        {
          name: Table,
          class: 'one'
        }
      ]
    },
    {
      id: 2,
      name: '订单',
      componentsList: [
        {
          name: Bar,
          class: 'one'
        },
        {
          name: Line,
          class: 'two'
        },
        {
          name: Table,
          class: 'two'
        }
      ]
    }
  ]

  const curIndex = ref(0)

  const componentsList = shallowRef(menus[0].componentsList)

  const handleChoice = idx => {
    curIndex.value = idx
    componentsList.value = menus[idx].componentsList
  }

</script>

<style lang="scss" scoped>
  .dynamic-components {
    font-size: 20px;
    .menu {
      span {
        margin-right: 10px;
        cursor: pointer;
        &.active {
          color: red;
        }
      }
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      .one {
        width: 100%;
      }
      .two {
        width: 50%;
      }
    }
  }
</style>
