import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import * as d3 from "d3";
import {isEmpty} from 'lodash';
// import styles from '../styles/Home.module.scss'

interface Errorable {
    success: any
    error: any
}

const useFetch = (endpoint) => {
    const [data, setData] = useState<Errorable>({success: undefined, error: undefined});
    useEffect(() => {
        ( async () => {
            const json = await fetch( endpoint )
                .then( raw => raw.json() )
                .catch( err => setData({success: null, error: err}));
            setData({success: json, error: null});
        } )();
    }, []);
    return data;
};

const useGeolocation = () => {
    const [geolocation, setGeolocationPair] = useState<Errorable>({success: undefined, error: undefined});
    useEffect(() => {
        const onError = (err) => setGeolocationPair( {success: null, error: err} );
        const onSuccess = (data) => setGeolocationPair( {success: data, error: null} );
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHighAccuracy: true});
    }, []);
    return geolocation;
}

const useUserWeather = () => {
    const {success: geolocationSuccess, error: geolocationError} = useGeolocation();
    const [openWeatherData, setOpenWeatherData] = useState({});
    useEffect(() => {
        if(!geolocationSuccess) return;
        (async () => {
            const api = '4fd5e62091f720b613ba466a48d80656';
            const [lat, lon] = [geolocationSuccess.coords.latitude, geolocationSuccess.coords.longitude];
            const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
            const openWeatherSuccess = await fetch(endpoint).then(raw => raw.json());
            setOpenWeatherData(openWeatherSuccess);
        })();
    }, [geolocationSuccess]);
    return openWeatherData;
}
const useUserForecast = (cnt) => {
    const {success: geolocationSuccess, error: geolocationError} = useGeolocation();
    const [openWeatherData, setOpenWeatherData] = useState({});
    useEffect(() => {
        if(!geolocationSuccess) return;
        (async () => {
            const api = '4fd5e62091f720b613ba466a48d80656';
            const [lat, lon] = [geolocationSuccess.coords.latitude, geolocationSuccess.coords.longitude];
            const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}`;
            console.log(endpoint);
            const openWeatherSuccess = await fetch(endpoint).then(raw => raw.json());
            setOpenWeatherData(openWeatherSuccess);
        })();
    }, [geolocationSuccess]);
    return openWeatherData;
}

export default function Home() {
    const forecast = useUserForecast(7);
    console.log(forecast);
    useEffect( () => {
        if(isEmpty(forecast)) return;
        const tempRects = d3.select("svg")
            .selectAll("rect")
            .data(forecast?.daily)
            .enter()
            .append("rect")
            .attr("x", 10)
            .attr("y", (d,i) => i * 15 + 10)
            .attr("width", (d,i) => 100 * (d.temp.max - d.temp.day))
            .attr("height", 10)
            .attr("fill", "#333");

    }, [forecast] );
    return <>
        <svg width='300' height='300'></svg>
    </>
}