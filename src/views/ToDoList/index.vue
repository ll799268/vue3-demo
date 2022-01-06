<template>
  <div class="todo-list">
    <Header @handleShowAddInput="handleShowAddInput" />
    <AddInput 
      @handleShowAddInput="handleShowAddInput"
      @addIpVal="addIpVal"
      v-show="isShowAddInput" />
    <List @delItem="delItem"
      :list="data.list"  />
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'

  import Header from './Header.vue'
  import AddInput from './AddInput.vue'
  import List from './List.vue'

  const isShowAddInput = ref(false)

  const data = reactive({
    list: []
  })

  const handleShowAddInput = val => {
    isShowAddInput.value = val
  }

  const addIpVal = val => {
    const { list } = data 
    list.push(
      {
        id: Date.now(),
        content: val,
        isCompleted: false
      }
    )
  }

  const delItem = id => {
    const { list } = data 
    list = list.filter(item => item.id !== id)
  }

</script>

<style lang="scss" scoped>

</style>
