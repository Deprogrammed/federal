<template>
  <section class="details-block">
    <h1 class="block-title">$FED Details</h1>
    <div class="youtube-container">
      <iframe
        width="1978"
        height="835"
        src="https://www.youtube.com/embed/lcmHZMx3tuQ?si=XewFsLMpStdVfsaE"
        title="$FED Fair Launch - Fast Recap of Live Stream!"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>

    <p class="token-info-container">
      69% Burn.<br />Liquidity Tokens Burned.<br />420 Billion Total Supply.<br />Minting Closed.<br />Revoked
      Contract.<br />No Airdrops.<br />No Whitelist.<br />No Pre-Sale.<br />No Private Sale.<br />No
      Fees or Taxes.<br />No Team Allocation.<br />No Dev Wallet Allocation.<br />Complete Fair
      Launch.<br />Doxxed Developer.<br />MOAT Web3 Utilities.<br />92400000000 Circulating Supply.
    </p>
    <h3>
      <span style="font-weight: 700"><strong>Federal Autonomous Organization</strong></span
      ><span><br /></span
      ><span style="font-weight: 400"
        >Federal $FED Crypto Advertisement Funnels are currently being rolled out on pumpfun.</span
      ><span><br /><br /></span
      ><span style="font-weight: 400">Want to see the list of AD's on pumpfun?</span
      ><span><br /></span><span style="font-weight: 400">View this google doc:</span
      ><span
        ><a
          target="_blank"
          style="text-decoration: underline"
          href="https://docs.google.com/spreadsheets/d/1foMcKvQuibv0d0noN0ynxkZ2xj6sSoAm0X9CH2XsM8k/edit?usp=sharing"
          >Google Doc</a
        ></span
      >
    </h3>
  </section>
</template>

<script setup lang="ts">
import CaBox from '@/components/ui/CaBox.vue'
</script>

<style scoped>
.details-block {
  text-align: center;
  padding: 10px;
}
.block-title {
  font-size: 48px;
  margin: 20px 0;
  font-weight: bold;
}

.youtube-container {
  width: 100%;

  height: 220px;

  margin: 0 0 10px;
}
.youtube-container iframe {
  display: block;
  width: 100%;
  height: 220px;
}

.token-info-container {
  margin: 0 0 10px;
}

@media screen and (min-width: 700px) {
  .youtube-container {
    height: 500px;
  }
  .youtube-container iframe {
    height: 500px;
  }
}
</style>
