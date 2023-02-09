<template>
  <main>
    <div>
      <button @click="goBack"> Back</button>
      <h2>Dog Detail</h2>
    </div>
    <div class="card__det">
      <img :src="dogDetail" alt="dog image" />
      <div>
        <p>
          The area of cells in the brain that detect different smells is around 40 times larger in dogs than humans. This means that your dog can pick up on way more smells than we ever could. This is why dogs are often used to sniff out people, drugs and even money!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi enim culpa dicta sint veritatis aspernatur deleniti eligendi vel nam ad harum repellat incidunt quod, eaque nesciunt pariatur corporis est ducimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis adipisci quae iste aperiam tenetur nemo voluptate magni, ratione repellendus ullam sequi porro, placeat quaerat distinctio? Corrupti laboriosam quos corporis?
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';


const store = useStore()

const router = useRouter()

const route = useRoute()

const getDogDetail = computed(()=> {
  return store.getters.getDogImgs
})

const goBack =()=> {
  router.push('/')
}

const dogID = computed(()=> {
  return route.params.id
})

console.log(dogID.value)

const dogDetail = computed(()=> {
  return getDogDetail.value[dogID.value as string];
})
onMounted(()=> {
  store.dispatch('getDogImages')
})
</script>

<style scoped lang="scss">
main {
  h2 {
    margin: 2rem auto;
  }
  button {
    padding: 6px 13px;
    cursor: pointer;
  }
  .card__det {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    img {
      border-radius: 10px;
      border: 7px solid #fff;
      height: 300px;
      width: 100%;
      object-fit: cover;
      
    }
    p {
      line-height: 30px;
    }
    @media(min-width: 640px){
      flex-wrap: nowrap;
      img {
        width: auto;
      }
    }
  }
}
</style>