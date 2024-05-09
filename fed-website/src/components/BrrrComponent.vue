<template>
  <div class="layout-container">
    <section class="socials-block">
      <div class="ca-box-container">
        <CaBox />
      </div>
      <div class="socials-box-container">
        <SocialsBox />
      </div>

      <div class="text">
        <h1 class="block-title">Federal</h1>
        <p>$FED the inflation meme of Solana</p>
        <p>Representing Web3 Crypto Domination of Banks</p>
      </div>
      <div class="block-image-container">
        <img class="block-image" src="@/assets/images/brrr.webp" alt="brr" />
      </div>
      <div class="additional-links">
        <a
          href="https://cetoex.com/trade/FEDUSDT"
          target="_blank"
          rel="nofollow"
          class="button-link"
          aria-hidden="false"
        >
          CetoEX FED/USDT
        </a>
        <a
          href="https://t.me/+OYosQL-L9NQwYmIx"
          target="_blank"
          rel="nofollow"
          class="button-link"
          aria-hidden="false"
        >
          Join Telegram
        </a>
        <a
          href="https://birdeye.so/token/HdiSZmC4eezQRWAfxMBnPtoCQ5R5yq4THkY99wcxe3Wm/A9avBzYqomsZQLSTi1C1BYN2d2sqaYoNAEXsubms2xLm?chain=solana"
          target="_blank"
          rel="nofollow"
          class="button-link"
          aria-hidden="false"
        >
          Birdeye Buy
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CaBox from '@/components/ui/CaBox.vue'
import SocialsBox from '@/components/ui/SocialsBox.vue'
</script>

<style scoped>
.socials-block {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto auto;
  gap: 0px 0px;
  grid-template-areas:
    'CA'
    'SocialsBox'
    'Brrr'
    'Text'
    'AdditionalLinks';
  padding: 10px 0;
}
.ca-box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: CA;
  margin: 10px 0;
}
.socials-box-container {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: SocialsBox;
}
.text {
  grid-area: Text;
  text-align: center;
}
.block-image-container {
  grid-area: Brrr;
}
.additional-links {
  grid-area: AdditionalLinks;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
}

.block-image {
  display: block;
  width: 70%;
  margin: 0 auto;
}

.block-title {
  font-size: 48px;
  font-weight: bold;
}

@media screen and (min-width: 700px) {
  .socials-block {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(4, auto);
    gap: 0px 0px;
    grid-template-areas:
      'CA CA'
      'SocialsBox Brrr'
      'Text Brrr'
      'AdditionalLinks Brrr';
  }

  .block-image {
    display: block;
    height: 400px;
    width: unset;
  }
}
</style>
