<template>
  <button class="ca-box" @click="copyCA" title="Copy CA to clipboard">
    <IconCopy class="ca-box__icon" />
    <span class="ca-box__text">
      {{ isCopied ? 'Copied to clipboard!' : 'HdiSZmC4eezQRWAfxMBnPtoCQ5R5yq4THkY99wcxe3Wm' }}
    </span>
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import IconCopy from '@/components/icons/IconCopy.vue'

const isCopied = ref(false)

const copyCA = () => {
  isCopied.value = true
  navigator.clipboard.writeText('HdiSZmC4eezQRWAfxMBnPtoCQ5R5yq4THkY99wcxe3Wm')
  setTimeout(() => {
    isCopied.value = false
  }, 1000)
}
</script>

<style scoped>
.ca-box {
  display: flex;
  align-items: center;
  width: 362px;
  padding: 5px;
  background: #202127;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
}
.ca-box__icon {
  width: 16px;
  height: 16px;
}
.ca-box__text {
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}
@media screen and (min-width: 700px) {
  .ca-box {
    font-size: 18px;
  }
}
</style>
