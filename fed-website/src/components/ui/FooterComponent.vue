<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="join-inflation">
        <p>Join the Inflation</p>
        <h1>{{ brrText }}</h1>
      </div>
      <div class="inflate-socials">
        <p>Inflate our socials:</p>
        <SocialsBox />
      </div>
      <div class="buy-fed">
        <p>BUY $FED</p>
        <CaBox />
      </div>
    </div>

    <p class="copyright">2024 Federal $FED UCC 1-308</p>
  </footer>
</template>

<script setup lang="ts">
import SocialsBox from '@/components/ui/SocialsBox.vue'
import CaBox from '@/components/ui/CaBox.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const brrText = ref('BRR')

let intervalId: ReturnType<typeof setInterval> = 0
let internalCount = 0
const print = () => {
  if (internalCount > 5) {
    brrText.value = 'BRR'
    internalCount = 0
    return
  }
  internalCount++
  brrText.value += 'R'
}

onMounted(() => {
  intervalId = setInterval(print, 200)
})
onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
footer {
  background: var(--color-background-yellow);
  padding: 10px 0;
}
.footer__content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 0 10px;
  padding: 0 0 20px;
}

.copyright {
  text-align: center;
  grid-area: Copyright;
}
.join-inflation {
  grid-area: Inflation;
  justify-self: center;
  align-self: center;
  font-size: 24px;
}
.inflate-socials {
  grid-area: Socials;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.buy-fed {
  grid-area: Buy;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 700px) {
  .footer__content {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    gap: 0px 0px;
    grid-template-areas:
      'Inflation Buy'
      'Inflation Socials'
      'Copyright Copyright';
    padding: 20px 0;
    grid-gap: 10px;
    margin: 0;
  }
}
</style>
