import "./App.css";
import React, { useState } from "react";
import SearchForm from "./SearchForm";
import Song from "./Song";

export default function App() {
    const dataType = "track";
    const [song, setSong] = useState(null);

    async function fetchData(searchTerm = "Aretha Franklin") {
        const baseURL = "https://www.apitutor.org/spotify/simple/one/v1/search";
        const url = `${baseURL}?q=${searchTerm}&type=${dataType}`;
        const request = await fetch(url);
        const result = await request.json();
        console.log(result);
        // New: set state variable to redraw...
        setSong(result);
    }

    function showSongs() {
        if (song) {
            return <Song key={song.id} songData={song} />;
        } else {
            return "";
        }
    }

    return (
        <>
            <header>
                <h1>Spotify Demo</h1>
            </header>
            <main>
                {/* 
                    Need to pass the function definition 
                    into the child component so that 
                    the Form and Song components can 
                    communicate. See "Lifting Up State" 
                */}
                <SearchForm searchFunction={fetchData} />
                {showSongs()}
            </main>
        </>
    );
}
