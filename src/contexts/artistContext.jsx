import React from "react";
import { useState } from "react";

export const artistContext = React.createContext({});

export const ArtistProviderData = ({ children }) => {
    const [data, setData] = useState([]);
    const [dataArtist, setDataArtist] = useState({}); 
    const [loading, setLoading] = useState(false); 
    const [errorSystem, setErrorSystem] = useState(false);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f28092b7e9msh6a709c0e64124bep15a27bjsn85a0f171fb76',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    const getDataArtist = async (nameArtist) => {
        setLoading(true); 
        await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${String(nameArtist).toLowerCase()}`, options)
        .then(response => response.json())
        .then((response) => {
            setData(response.data)
            setDataArtist(response.data[0].artist);
            window.localStorage.setItem('data', JSON.stringify(response.data[0])); 
            setLoading(false); 
        })
        .catch((err) => {
            if(err.message.includes('artist')) {
                setErrorSystem(true); 
                setLoading(false);
                return
            }
            console.log(err); 
        });
    }

    console.log(dataArtist);
    console.log(data)

    return (
        <artistContext.Provider value={{dataArtist, getDataArtist, data, loading, errorSystem}}>
            {children}
        </artistContext.Provider>
    )
}

export const useArtistData = () => React.useContext(artistContext); 