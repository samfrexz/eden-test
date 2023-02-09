import http from "@/config";

interface DogApi {
  DOG_LIST: string
}


const dogApi: DogApi = {
  DOG_LIST: 'breed/hound/images',
}

const getDogImages = async()=> {
  return await http.get(
    `${dogApi.DOG_LIST}`
  )
}

export {
  getDogImages
}