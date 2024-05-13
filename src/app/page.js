"use client";
import React, { useState } from 'react';
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovieForm from "./modules/formModule/index.jsx";
import MovieList from "./modules/movieList";
import Header from "./modules/headerModule/index.jsx";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const createMovie = (title, rating) => {
    const newMovie = { title, rating, id: Math.random() };
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  const deleteMovie = (id) => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  return (
    <main className={styles.main}>
      <Header/>
      <AddMovieForm createMovie={createMovie} />
      <hr />
      <h2>Filmer: </h2>
      <MovieList movies={movies} deleteMovie={deleteMovie} />

    </main>
  );
}

