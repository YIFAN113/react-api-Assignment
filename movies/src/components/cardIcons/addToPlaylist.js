import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToPlayListIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToPlayList = (e) => {
        e.preventDefault();
        context.addToPlaylist(movie);
    };

    return (
        <IconButton aria-label="add to play" onClick={handleAddToPlayList}>
            <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToPlayListIcon;