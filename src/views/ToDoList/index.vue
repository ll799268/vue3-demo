<template>
  <div class="todo-list">
    <Header @handleShowAddInput="handleShowAddInput" />
    <AddInput 
      @handleShowAddInput="handleShowAddInput"
      @addIpVal="addIpVal"
      v-show="isShowAddInput" />
    <List 
      @checkItem="checkItem"
      @delItem="delItem"
      :list="data.list"  />

    <CheckModal v-if="isCheckModalShow"
      @handleClose="handleClose"
      :itemDetail="data.itemDetail" />
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'

  import Header from './Header.vue'
  import AddInput from './AddInput.vue'
  import List from './List.vue'
  import CheckModal from './CheckModal.vue'

  const isShowAddInput = ref(false),
    isCheckModalShow = ref(false)

  const data = reactive({
    list: [],
    itemDetail: {}
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
    data.list = list.filter(item => item.id !== id)
  }

  const checkItem = id => {
    const { list } = data 
    data.itemDetail = list.filter(item => item.id === id)[0]
    isCheckModalShow.value = true
  }

  const handleClose = () => {
    isCheckModalShow.value = false
  }

</script>
