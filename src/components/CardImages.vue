<template>
  <figure class="card__img">
    <img  
      v-lazy="{ 
        src: dogImage, 
        loading: loadingImage, delay: amountOfSeconds
      }"
      :alt="alt">
  </figure>
</template>

<script setup lang="ts">


defineProps<{
  dogImage: string,
  alt: string,
  loadingImage: string,
  amountOfSeconds: number
}>()
</script>

<style lang="scss" scoped>
.card__img {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  img {
    object-fit: contain;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    border: 5px solid #fff;
    &:hover {
      transform: scaleX(-1);
      transition: width 2s;
    }
  }
  @media(min-width: 640px){
    img {
      height: 300px;
      border: 10px solid #fff;
      object-fit: cover;
    }
  }
}
</style>