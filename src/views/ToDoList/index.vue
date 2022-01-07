<template>
  <div class="todo-list">
    <Header @handleShowAddInput="handleShowAddInput" />
    <AddInput v-show="isShowAddInput"
      @handleShowAddInput="handleShowAddInput"
      @addIpVal="addIpVal" />
    <List 
      @handleChangeStatus="handleChangeStatus"
      @openCheckModal="openCheckModal"
      @openEditModal="openEditModal"
      @delItem="delItem"
      :list="data.list"  />

    <CheckModal v-if="isCheckModalShow"
      @handleModalClose="handleModalClose"
      :itemDetail="data.itemDetail" />

    <EditModal v-if="isEditModalShow"
      @handleConfirmChange="handleConfirmChange"
      :itemDetail="data.itemDetail" />
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'

  import Header from './Header.vue'
  import AddInput from './AddInput.vue'
  import List from './List.vue'
  import CheckModal from './CheckModal.vue'
  import EditModal from './EditModal.vue'

  const isShowAddInput = ref(false),
    isCheckModalShow = ref(false),
    isEditModalShow = ref(false)

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
        isCompleted: true
      }
    )
  }

  const delItem = id => {
    const { list } = data 
    data.list = list.filter(item => item.id !== id)
  }

  const setCurrentData = id => {
    const { list } = data 
    data.itemDetail = list.filter(item => item.id === id)[0]
  }

  const openCheckModal = id => {
    setCurrentData(id)
    isCheckModalShow.value = true
  }

  const openEditModal = id => {
    setCurrentData(id)
    isEditModalShow.value = true
  }

  const handleModalClose = () => isCheckModalShow.value = false

  const handleConfirmChange = () => isEditModalShow.value = false

  const handleChangeStatus = props => {
    const { list } = data,
      { id, status } = props
    
    data.list = list.map(item => {
      if (item.id === id) {
        item.isCompleted = status
      }
      return item
    })
  }

</script>
