export const mapCats = (catsFromApi) => catsFromApi.map((catFromApi) => ({
    url: catFromApi.url,
    breeds: catFromApi.breeds.map((breed) => breed.name),
    dogFriendly: catFromApi.breeds.every((breed) => breed.dog_friendly)
}));