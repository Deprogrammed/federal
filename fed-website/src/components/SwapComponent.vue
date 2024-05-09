<template>
  <section class="swap-block">
    <div class="layout-container">
      <div class="swap-block__content">
        <div class="block-image-container">
          <img class="block-image" src="@/assets/images/fuck_inflation.jpg" alt="brr" />
        </div>
        <div class="text-container">
          <h1 class="block-title">BUY $FED</h1>
          <div class="ca-box-container">
            <p>Contract Program on Solana:</p>
            <CaBox />
          </div>
          <div class="swap-links-container">
            <a
              href="https://jup.ag/swap/SOL-HdiSZmC4eezQRWAfxMBnPtoCQ5R5yq4THkY99wcxe3Wm"
              target="_blank"
              rel="nofollow"
              class="button-link"
              aria-hidden="false"
              >Jupiter Swap</a
            >
            <a
              href="https://t.me/solana_unibot?start=r-w7ydaq-HdiSZmC4eezQRWAfxMBnPtoCQ5R5yq4THkY99wcxe3Wm"
              target="_blank"
              rel="nofollow"
              class="button-link"
              aria-hidden="false"
              >Trojan Bot</a
            >

            <a
              href="https://dexscreener.com/solana/a9avbzyqomszqlsti1c1byn2d2sqayonaexsubms2xlm"
              target="_blank"
              rel="nofollow"
              class="button-link"
              aria-hidden="false"
              >DexScreener</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CaBox from '@/components/ui/CaBox.vue'
</script>

<style scoped>
.swap-block {
  background: var(--color-background-yellow);
}
.swap-block__content {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
}
.block-image-container {
}
.block-image {
  display: block;
  width: 100%;
  height: 100%;
}

.text-container {
  width: 100%;
  text-align: center;
}
.block-title {
  font-size: 48px;
  margin: 0 0 20px;
  font-weight: bold;
}
.ca-box-container {
  display: inline-flex;
  flex-flow: column;
}

.swap-links-container {
  margin: 20px 0;
  display: inline-flex;
  justify-content: space-around;
  gap: 10px;
}

@media screen and (min-width: 700px) {
  .swap-block {
    flex-flow: row;
  }
  .swap-block__content {
    flex-flow: row;
  }

  .block-image-container {
    width: 50%;
    flex-shrink: 0;
  }

  .swap-link {
    margin: 10px;
    padding: 10px 15px;
  }
}
</style>
