<<<<<<< HEAD:src/js/index.js
=======
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

const catInfo = document.querySelector(".cat-info");
const breedSelect = document.querySelector("#placeholderSingle");
const loader = document.querySelector(".loader");

function showLoad() {
  loader.style.display = 'block';
}

function hideLoad() {
  loader.style.display = 'none';
}

function seeError() {
  Notiflix.Report.failure(
    'Error',
    'Oops! Something went wrong! Try reloading the page!'
  );
}

function hideCI() {
  catInfo.style.display = 'none';
}

function clearCI() {
  catInfo.innerHTML = '';
}

function populateBreedSelect(breeds) {
  const options = breeds.map(breed => ({
    value: breed.id,
    text: breed.name,
  }));

  new SlimSelect({
    select: '#placeholderSingle',
    placeholder: 'Choos a breed',
    data: options,
  });

  breedSelect.addEventListener('change', handleBreedSelectChange);
}

function updateCI(cat) {
  const catEl = document.createElement('div');
  catEl.classList.add('cat-cont');

  const image = document.createElement('img');
  image.setAttribute('src', cat.url);
  image.alt = 'Cat';
  image.classList.add('cat-image');
  catEl.appendChild(image);

  const catDetail = document.createElement('div');
  catDetail.classList.add('cat-detail');

  const breedName = document.createElement('h2');
  breedName.textContent = cat.breed[0].name;
  breedName.classList.add('cat-title');
  catDetail.appendChild(breedName);

  const description = document.createElement('p');
  description.textContent = cat.breeds[0].description;
  description.classList.add('cat-description');
  catDetail.appendChild(description);

  const temperament = document.createElement('p');
  temperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
  temperament.classList.add('cat-temperament');
  catDetail.appendChild(temperament);

  catElement.appendChild(catDetail);

  catInfo.innerHTML = '';
  catInfo.appendChild(catElement);
}

function handleBreedSelectChange() {
  const selectBreedId = breedSelect.value;
  hideCI();
  clearCI();
  showLoad();

  fetchCatByBreed(selectBreedId)
    .then(cat => {
      updateCI(cat);
      hideLoad();
      catInfo.style.display = 'block';
    })
    .catch(error => {
      hideLoad();
      seeError();
    });
}

fetchBreeds()
  .then(breeds => {
    populateBreedSelect(breeds);
    hideLoad();
  })
  .catch(error => {
    hideLoad();
    seeError();
  });


>>>>>>> parent of 1b2d3ef (utyuyfkfyuufy):src/index.js
