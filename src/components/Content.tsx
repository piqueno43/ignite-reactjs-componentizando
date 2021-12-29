import { memo } from "react";
import { MovieProps } from "../App";
import { MovieCard } from "./MovieCard";
import '../styles/content.scss';
interface ContentProps {
  movies: MovieProps[];
  title: string;
}

function ContentComponent({ title, movies }:ContentProps) {
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movies, nextProps.movies) && prevProps.title === nextProps.title;
});