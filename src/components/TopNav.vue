<template>
  <header class="nav">
    <nav class="nav__item">
      <h1>Lovely-Dogs</h1>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #E5E5E5;
  .nav__item {
    min-height: 12vh;
    width: 90%;
    margin: 0 auto;
    background: inherit;
    display: flex;
    align-items: center;
    h1 {
      
    }
  }
}
</style>