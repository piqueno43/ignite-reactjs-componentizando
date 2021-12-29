import { memo } from "react";
import { GenreResponseProps } from "../App";
import { Button } from "./Button";
import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onClickButton: (id: number) => void;
}
function SideBarComponent({genres, selectedGenreId, onClickButton}: SideBarProps) {
  
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  )
}

export const SideBar = memo(SideBarComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.genres, nextProps.genres) && prevProps.selectedGenreId === nextProps.selectedGenreId;
});