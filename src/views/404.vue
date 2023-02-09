<template>
  <div class="not-found">
    <div class="text">
      <h1>404</h1>
      <p>Not Found</p>
      <button @click="goHome">Back</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const goHome =()=> {
  router.push('/')
}

</script>
<style lang="scss" scoped>
.not-found {
  width: 100%;
  display: flex;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  .text {
    text-align: center;
    button {
      cursor: pointer;
      padding: 8px 20px;
      margin: 20px auto;
    }
  }
  h1 {
    color: red;
    font-size: 45px;
  }
  p {
    font-size: 20px;
  }
}
</style>

