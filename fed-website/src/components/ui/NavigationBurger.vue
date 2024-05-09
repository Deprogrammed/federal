<template>
  <button class="burger" :class="{ 'is-open': isOpen }" @click="emit('click')">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  isOpen: { type: Boolean, required: true }
})

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<style scoped>
.burger {
  position: relative;
  display: flex;
  flex-flow: column;
  gap: 5px;
  padding: 0;

  border: none;
  background: none;
}

.burger span {
  height: 3px;
  width: 20px;
  background: var(--color-text);
  border-radius: 1px;
  transition: all 0.3s ease-in-out;
  transform-origin: left center;
}
.burger.is-open span:nth-child(1) {
  transform: rotate(40deg) scaleX(1.3);
}
.burger.is-open span:nth-child(2) {
  opacity: 0;
}
.burger.is-open span:nth-child(3) {
  transform: rotate(-40deg) scaleX(1.3);
}
</style>
