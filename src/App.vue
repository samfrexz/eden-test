<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue';
</script>

<template>
  <header>
    <TopNav  />
  </header>

  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin-top: 8rem;
  width: 100%;
  .container {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
