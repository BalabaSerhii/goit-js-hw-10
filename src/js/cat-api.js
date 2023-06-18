import { renderBreedsSelect } from "../index"
const APIKEY = 'live_A0BddCBCvw3bx0QQ33fvXeI93mVx6l59VBUsyj7uHjfZvkQnUvjiGTaolms8FVAg'

function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds?${APIKEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/${breedId}?api_key=${APIKEY}&breed_ids=${breedId}`)
    .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()
  });
}

export { fetchBreeds, fetchCatByBreed }

