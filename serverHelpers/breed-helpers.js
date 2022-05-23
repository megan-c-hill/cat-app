export const mapBreeds = (catAppBreeds) => catAppBreeds.map((breed) => ({
    name: breed.name,
    id: breed.id,
    dogFriendly: breed.dog_friendly > 3
}));