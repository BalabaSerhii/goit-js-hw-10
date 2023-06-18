const apiKey =
  'live_BQwPfgrfwRYAEuv2Wi1qghzDEH7q4b0iBmL3DqxhefV6pUHpL5LjhGoIwJYjWGyr';

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': apiKey,
    },
  }).then(response => response.json());
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`;

  return fetch(url, {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => response.json())
    .then(data => data[0]);
}
