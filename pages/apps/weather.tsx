import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import * as d3 from "d3";
import {isEmpty, isNull, maxBy, minBy} from 'lodash';
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
    const [openWeatherData, setOpenWeatherData] = useState<any>({});
    useEffect(() => {
        if(!geolocationSuccess) return;
        (async () => {
            const api = '4fd5e62091f720b613ba466a48d80656';
            const [lat, lon] = [geolocationSuccess.coords.latitude, geolocationSuccess.coords.longitude];
            const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}`;
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
        if(isEmpty(forecast) || isNull(forecast)) return;
        const [dailyMin, dailyMax] = [minBy(forecast.daily, x => x.temp.day), maxBy(forecast.daily, x => x.temp.day)];
        console.log(dailyMin, dailyMax)
        const xScale = d3
            .scaleLinear()
            .domain( [dailyMin.temp.day, dailyMax.temp.day] )
            .range( [300, 0] );
        const yScale = d3
            .scaleBand()
            .domain(forecast.daily.map(x => x))
            .rangeRound( [0,300] )
            .padding(0.1);
        const tempRects = d3.select("svg")
            .selectAll(".bar")
            .data(forecast.daily)
            .enter()
            .append("rect")
            .classed('bar', true)
            .attr("width", (d,i) => 300 - xScale(d.temp.day))
            .attr("height", yScale.bandwidth())
            .attr("x", 0)
            .attr("y", (d,i) => yScale(d))
            .attr("fill", "#333");

    }, [forecast] );
    return <>
        <svg width='300' height='300'/>
    </>
}