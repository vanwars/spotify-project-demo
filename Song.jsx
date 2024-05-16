import React from "react";

export default function Song({ songData }) {
    function showPlayer() {
        if (songData.preview_url) {
            return (
                <div>
                    <audio controls src={songData.preview_url}></audio>
                </div>
            );
        }
        return <p>No audio available</p>;
    }
    return (
        <div className="card">
            <p>{songData.name}</p>
            <img src={songData.album.image_url} />
            {showPlayer()}
        </div>
    );
}
