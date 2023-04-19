import React, { useState } from "react";
import contentStyle from "./Content.module.css";

function Content() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Avatar: The Way of Water",
      director: "James Cameron",
      details:
        "The long-awaited sequel to James Cameron's groundbreaking sci-fi epic Avatar finally hits theaters in 2023. The film promises to take audiences back to the world of Pandora, as Jake Sully (Sam Worthington) and Neytiri (Zoe Saldana) embark on a new adventure to explore the ocean depths of their alien home.",
    },
    {
      id: 2,
      name: "Black Panther: Wakanda Forever",
      director: "Ryan Coogler",
      details:
        "Following the tragic death of Chadwick Boseman, the future of the Black Panther franchise was uncertain. However, Marvel has confirmed that the film will go ahead, with a new actor taking on the mantle of T'Challa. The film promises to explore the rich mythology of Wakanda, and to honor Boseman's legacy in the role that made him a global superstar.",
    },
    {
      id: 3,
      name: "Indiana Jones 5",
      director: "James Mangold",
      details:
        "Harrison Ford returns for one more adventure as the iconic archaeologist Indiana Jones. Little is known about the plot of the film, but fans are excited to see Ford don the fedora and whip once again, as he searches for treasure and battles evil forces in exotic locations around the world.s",
    },
    {
      id: 4,
      name: "The Batman",
      director: "Matt Reeves",
      details:
        "Robert Pattinson takes on the role of the Dark Knight in this gritty new take on the Batman mythos. The film promises to explore the early days of Bruce Wayne's career as a crimefighter, as he battles some of his most iconic villains, including the Riddler (Paul Dano) and the Penguin (Colin Farrell).",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleClick(movie) {
    setSelectedMovie(movie);
  }

  return (
    <div>
      <h3 className={contentStyle.h3e}>Here We Go: </h3>
      <ul className={contentStyle.liste}>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.name}
            <button
              onClick={() => handleClick(movie)}
              className={contentStyle.btn}
            >
              show details
            </button>
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <div className={contentStyle.divA}>
          <h3>
            <b> {selectedMovie.name}</b>
          </h3>
          <p>
            <b>Director : </b>
            {selectedMovie.director}
          </p>
          <p>
            <b>Details:</b> {selectedMovie.details}
          </p>
        </div>
      )}
      <p>
        <b>
          <i className={contentStyle.iA}>FINALLY...</i>
        </b>
      </p>
      <p className={contentStyle.pA}>
        These are just a few of the many exciting movies set to be released in
        2023. Whether you're a fan of superheroes, science fiction, or heartfelt
        dramas, there's something for everyone to look forward to in the coming
        months. So mark your calendars and get ready for an incredible year at
        the movies!
      </p>
    </div>
  );
}

export default Content;
