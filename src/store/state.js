import { createContext } from "react";

const initialState = {
users : [
    {
        id: 1,
        name: 'Pietro',
        surname:'Di Stefano',
        userName: 'Pietro23',
        email: 'pietrodistefano@gmail.com',
        password: 'coding',
        assets: {
            coins: [],
            nft:[] 
        },
        chart: [],
        isLogged: false,

           
    },
    {
        id: 2,
        name: 'Cesare',
        surname:'Tomasello',
        userName: 'Cesare28',
        email: 'cesaretomasello@gmail.com',
        password: 'coding',
        assets: {
            coins: [],
            nft:[] 
        },
        chart: [],
        isLogged: false,
        
           
    },
    {
        id: 3,
        name: 'Sebastiano',
        surname:'Occhipinti',
        userName: 'Sebastiano24',
        email: 'sebastianoochhipinti@gmail.com',
        password: 'coding',
        assets: {
            coins: [],
            nft:[] 
        },
        chart: [],
        isLogged: false,
        
           
    },
    {
        id: 4,
        name: 'Marco',
        surname:'Rivera',
        userName: 'Marco29',
        email: 'marcorivera@gmail.com',
        password: 'coding',
        assets: {
            coins: [],
            nft:[] 
        },
        chart: [],
        isLogged: false,
        
           
    },
    {
        id: 5,
        name: 'Chiara',
        surname:'Maggio',
        userName: 'Magichiara21',
        email: 'chiaramaggio@gmail.com',
        password: 'coding',
        assets: {
            coins: [],
            nft:[] 
        },
        chart: [],
        isLogged: false,
        
           
    },
    {
        id: 6,
        name: 'Giuseppe',
        surname:'Senettone',
        userName: 'Senex30',
        email: 'giuseppesenettone@gmail.com',
        password: 'coding',
        assets: {
            coins: [],
            nft:[] 
        },
        chart: [],
        isLogged: false,
        
           
    },
]
}

const AppCtx = createContext(initialState);


export {initialState,AppCtx};
    
