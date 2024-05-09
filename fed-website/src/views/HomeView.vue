<template>
  <main>
    <BrrrComponent />
    <SwapComponent />
    <DetailsComponent />
    <DexscreenerComponent />
  </main>
</template>

<script setup lang="ts">
import BrrrComponent from '@/components/BrrrComponent.vue'
import SwapComponent from '@/components/SwapComponent.vue'
import DetailsComponent from '@/components/DetailsComponent.vue'
import DexscreenerComponent from '@/components/DexscreenerComponent.vue'
</script>

<style scoped>
main {
  display: flex;
  flex-flow: column nowrap;
}
</style>
