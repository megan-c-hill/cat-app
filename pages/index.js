import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {get} from "../clientHelpers/apiHelper";

const Home = () => {
    const [breeds, setBreeds] = useState([]);
    const [cats, setCats] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('any-breed');
    const [selectedSortMethod, setSelectedSortMethod] = useState('default-sort');
    const [selectedNumberOfCats, setSelectedNumberOfCats] = useState(25);
    const [selectedDogFriendly, setSelectedDogFriendly] = useState(false);
    const [selectedImageType, setSelectedImageType] = useState('any-type');
    
    const getCats = async () => {
        const catsFromApi = await get(`/api/cats?pageSize=${selectedNumberOfCats}&breedId=${selectedBreed}&imageType=${selectedImageType}&sortMethod=${selectedSortMethod}&dogFriendly=${selectedDogFriendly}`);

        setCats(catsFromApi);
    }

    useEffect(() => {
        const getBreeds = async () => {
            const breedsFromApi = await get('/api/breeds');
            setBreeds(breedsFromApi)
        }

        getBreeds()
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Cat App</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Cat App
                </h1>
                <h2>
                    Woo Cats!
                </h2>

                <div className={styles.rowDiv}>
                    <div className={styles.columnDiv}>
                        <label htmlFor="breed-select">Choose a breed:</label>
                        <select id="breed-select" onChange={(event) => {
                            console.log('event.target', event.target.value);
                            return setSelectedBreed(event.target.value)
                        }}>
                            <option value="any-breed">Any Breed</option>
                            {breeds.map((breed) =>
                                <option value={breed.id} name={breed.name}>{breed.name}</option>
                            )}
                        </select>
                    </div>

                    <div className={styles.columnDiv}>
                        <label htmlFor="sort-by">Sort By:</label>
                        <select id="sort-by" onChange={(event) => setSelectedSortMethod(event.target.value)}>
                            <option value="default-sort">Default Sort</option>
                            <option value="most-recent">Most Recent</option>
                        </select>
                    </div>

                    <div className={styles.columnDiv}>
                        <label htmlFor="number-of-cats">Number of cats to show:</label>
                        <input id="number-of-cats" type="number" placeholder={25} min={1} max={100} onChange={(event) => setSelectedNumberOfCats(event.target.value)}/>
                    </div>

                    <div className={styles.columnDiv}>
                        <label htmlFor="dog-friendly">Is Dog Friendly:</label>
                        <input type="checkbox" onChange={(event) => setSelectedDogFriendly(event.target.value)}/>
                    </div>

                    <div className={styles.columnDiv}>
                        <label htmlFor="image-type">Image Type:</label>
                        <select id="image-type" onChange={(event) => setSelectedImageType(event.target.value)}>
                            <option value="any-type">Any Type</option>
                            <option value="static">Static</option>
                            <option value="animated">Animated</option>
                        </select>
                    </div>

                    <button type="submit" className={styles.submitButton} onClick={getCats}>{'Submit'}</button>
                </div>

                <div className={styles.rowDiv}>
                {cats.map((cat) =>
                    <img src={cat.url} className={styles.img} />
                )}
                </div>
            </main>
        </div>
    )
}

export default Home;
