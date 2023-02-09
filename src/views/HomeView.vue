<script setup lang="ts">
import { useStore } from 'vuex';
import { ref, onMounted, computed } from 'vue'
import CardImages from '@/components/CardImages.vue';
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from 'vue-skeletor';

const store = useStore()

const getImages = computed(()=> {
  return store.getters.getDogImgs
})

const seconds = ref<number>(500)


const loadingImage = ref<string>('https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg')

const loading = computed(()=> {
  return store.getters.getLoadingState
})


onMounted(()=> {
  store.dispatch('getDogImages')
})
</script>
  
<template>
  <main>
    <h1>Dog Images</h1>
    <div class="cards">
      <Skeletor
        v-for="index in 30" :key="index"
        v-if="loading"
        height="150"
      />
      <section 
        v-for="(dog, index) in getImages" 
        :key="index"
      >
          <RouterLink :to="{path: `/dog-detail/${index}`}">
            <CardImages
              :dogImage="dog"
              alt="random dog images"
              :loadingImage="loadingImage"
              :amountOfSeconds="seconds"
            />
          </RouterLink>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin: 3rem auto;
}
.cards {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;
  @media(min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media(min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media(min-width: 1536px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>
