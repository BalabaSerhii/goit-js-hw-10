// // import { renderBreedsSelect } from "../index"
// const APIKEY = 'live_A0BddCBCvw3bx0QQ33fvXeI93mVx6l59VBUsyj7uHjfZvkQnUvjiGTaolms8FVAg'

// function fetchBreeds() {
//   return fetch(`https://api.thecatapi.com/v1/breeds?${APIKEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function fetchCatByBreed(breedId) {
//   return fetch(`https://api.thecatapi.com/v1/images/${breedId}?api_key=${APIKEY}&breed_ids=${breedId}`)
//     .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json()
//   });
// }

// export { fetchBreeds, fetchCatByBreed }

const APIKEY = 'live_A0BddCBCvw3bx0QQ33fvXeI93mVx6l59VBUsyj7uHjfZvkQnUvjiGTaolms8FVAg'

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': APIKEY,
    },
  }).then(response => response.json());
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${APIKEY}`;

  return fetch(url, {
    headers: {
      'x-api-key': APIKEY,
    },
  })
    .then(response => response.json())
    .then(data => data[0]);
}
