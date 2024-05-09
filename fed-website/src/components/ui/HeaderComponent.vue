<template>
  <header>
    <div class="logo-container">
      <img class="logo" src="@/assets/images/logo_new.png" alt="logo" />
    </div>
    <div class="nav-container">
      <transition name="slide">
        <nav class="navigation" v-show="isOpenHeaderNavigation">
          <RouterLink class="button-link" to="/#">Chart</RouterLink>
          <a
            class="button-link"
            target="_blank"
            rel="nofollow"
            href="https://t.me/+OYosQL-L9NQwYmIx"
          >
            Telegram
          </a>
          <a class="button-link" target="_blank" rel="nofollow" href="https://bit.ly/fedwhitepaper">
            Whitepaper
          </a>
          <a
            class="button-link"
            target="_blank"
            rel=""
            href="https://jup.ag/swap/SOL-HdiSZmC4eezQRWAfxMBnPtoCQ5R5yq4THkY99wcxe3Wm"
          >
            SWAP $FED
          </a>
        </nav>
      </transition>

      <div class="mobile-navigation">
        <NavigationBurger :is-open="isOpenHeaderNavigation" @click="triggerMenu" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import NavigationBurger from '@/components/ui/NavigationBurger.vue'

const isOpenHeaderNavigation = ref(false)

const triggerMenu = () => {
  isOpenHeaderNavigation.value = !isOpenHeaderNavigation.value
}
</script>

<style scoped>
header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background: var(--color-background);
  box-shadow: 0 -10px 20px -4px black;
}

.logo-container {
  width: 85px;
}
@media screen and (min-width: 700px) {
  .logo-container {
    width: 85px;
  }
}

.logo-container .logo {
  display: block;
  width: 100%;
}

.navigation {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: column;
  background: var(--color-background);
}

@media screen and (min-width: 700px) {
  header {
    padding: 15px;
  }

  .navigation {
    position: unset !important;
    flex-flow: row;
    display: flex !important;
  }

  .mobile-navigation {
    display: none;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
