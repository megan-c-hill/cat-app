import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {get} from "../clientHelpers/apiHelper";

const Home = () => {
    const [breeds, setBreeds] = useState([]);

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
                        <select id="breed-select">
                            <option value="any">Any Breed</option>
                            {breeds.map((breed) =>
                                <option value={breed.value}>{breed.name}</option>
                            )}
                        </select>
                    </div>

                    <div className={styles.columnDiv}>
                        <label htmlFor="sort-by">Sort By:</label>
                        <select id="sort-by">
                            <option value="default-sort">Default Sort</option>
                            <option value="most-recent">Most Recent</option>
                        </select>
                    </div>

                    <div className={styles.columnDiv}>
                        <label htmlFor="sort-by">Number of cats to show:</label>
                        <input type="number" placeholder={25}/>
                    </div>

                    <button type="submit" className={styles.submitButton}>{'Submit'}</button>
                </div>
            </main>
        </div>
    )
}

export default Home;
