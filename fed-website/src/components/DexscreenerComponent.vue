<template>
  <section class="screener-block">
    <iframe
      src="https://dexscreener.com/solana/A9avBzYqomsZQLSTi1C1BYN2d2sqaYoNAEXsubms2xLm?embed=1&theme=dark"
    ></iframe>
  </section>
</template>

<script setup lang="ts"></script>
<style scoped>
.screener-block {
  height: 500px;
  width: 100%;
}
.screener-block iframe {
  width: 100%;
  height: 500px;
}

@media screen and (min-width: 700px) {
  .screener-block {
    height: 700px;
  }
  .screener-block iframe {
    height: 700px;
  }
}
</style>
