<template>
  <Modal :modalTitle="modalTitle">
    <p className="topic">时间：{{ formatTime(itemDetail.id, 'yyyy年mm月dd日', 'hh:mm:ss') }}</p>
    <p className="topic">
      <textarea
        v-model="itemDetail.content"
        className="text-area"></textarea>
    </p>
    <p className="topic">状态：
      <input type="checkbox" 
        v-model="itemDetail.isCompleted" />
    </p>

    <button
      className="btn btn-primary submit"
      @click="formatNewData">
      提交
    </button>
  </Modal>
</template>
<script setup>
  import Modal from '@components/Modal/index.vue'
  import { formatTime } from '@libs/utils'

  const modalTitle = '编辑事件'

  const props = defineProps(
    {
      itemDetail: {
        type: Object,
        default: {}
      }
    }
  )

  const emit = defineEmits()

  const formatNewData = () => {
    emit('handleConfirmChange')
  }

</script>

<style lang="scss" scoped>
  .topic {
    padding: 0 10px;
    margin-top: 20px;
  }

  .topic:nth-of-type(2) textarea{
    width: 100%;
    height: 80px;
    resize: none;
    padding: 8px 6px;
    font-size: 14px;
    border-color: #d3d3d3;
    outline: none;
  }

  .submit {
    margin: 30px 10px 10px;
    width: calc(100% - 20px);
    height: 34px;
  }
</style>