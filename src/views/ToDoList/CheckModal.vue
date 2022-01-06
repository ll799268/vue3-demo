<template>
  <Modal :modalTitle="modalTitle">
    <p className="topic">时间：{{ formatTime(itemDetail.id, 'yyyy年mm月dd日', 'hh:mm:ss') }}</p>
    <p className="topic">内容：{{ itemDetail.content }}</p>
    <p className="topic">状态：{{ itemDetail.completed ? '已完成' : '未完成' }}</p>

    <button className="btn btn-primary submit"
      @click="handleClose">
      确定
    </button>
  </Modal>
</template>
<script setup>
  import Modal from '@components/Modal/index.vue'
  import { formatTime } from '@libs/utils'

  const modalTitle = '查看事件'

  const props = defineProps(
    {
      itemDetail: {
        type: Object,
        default: {}
      }
    }
  )

  const emit = defineEmits()

  const handleClose = () => {
    emit('handleClose')
  }

</script>

<style lang="scss" scoped>
  .topic {
    padding: 0 0.1rem;
    margin-top: 0.2rem;
  }

  .submit {
    margin: 0.3rem 0.1rem 0.1rem;
    width: calc(100% - 0.2rem);
    height: 0.34rem;
  }
</style>