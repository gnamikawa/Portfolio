import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import * as d3 from "d3";
import {isEmpty, isNull, maxBy, minBy} from 'lodash';
import { useGeolocation } from '../../functions/useGeolocation';
import { useWeekForecast } from '../../functions/useWeekForecast';
// import styles from '../styles/Home.module.scss'

export interface Errorable {
    success: any
    error: any
}

// const useFetch = (endpoint) => {
//     const [data, setData] = useState<Errorable>({success: undefined, error: undefined});
//     useEffect(() => {
//         ( async () => {
//             const json = await fetch( endpoint )
//                 .then( raw => raw.json() )
//                 .catch( err => setData({success: null, error: err}));
//             setData({success: json, error: null});
//         } )();
//     }, []);
//     return data;
// };

// const useUserWeather = () => {
//     const {success: geolocationSuccess, error: geolocationError} = useGeolocation();
//     const [openWeatherData, setOpenWeatherData] = useState({});
//     useEffect(() => {
//         if(!geolocationSuccess) return;
//         (async () => {
//             const [lat, lon] = [geolocationSuccess.coords.latitude, geolocationSuccess.coords.longitude];
//             const endpoint = `/api/pages/apps/weather?lat=${lat}&lon=${lon}`;
//             const openWeatherSuccess = await fetch(endpoint).then(raw => raw.json());
//             setOpenWeatherData(openWeatherSuccess);
//         })();
//     }, [geolocationSuccess]);
//     return openWeatherData;
// }
export default function Home() {
    const forecast = useWeekForecast(7);
    console.log(forecast)
    // useEffect( () => {
    //     if(isEmpty(forecast) || isNull(forecast)) return;
    //     const [dailyMin, dailyMax] = [minBy(forecast.daily, x => x.temp.day), maxBy(forecast.daily, x => x.temp.day)];
    //     const xScale = d3
    //         .scaleLinear()
    //         .domain( [dailyMin.temp.day, dailyMax.temp.day] )
    //         .range( [300, 0] );
    //     const yScale = d3
    //         .scaleBand()
    //         .domain(forecast.daily.map(x => x))
    //         .rangeRound( [0,300] )
    //         .padding(0.1);
    //     const tempRects = d3.select("svg")
    //         .selectAll(".bar")
    //         .data(forecast.daily)
    //         .enter()
    //         .append("rect")
    //         .classed('bar', true)
    //         .attr("width", (d,i) => 300 - xScale(d.temp.day))
    //         .attr("height", yScale.bandwidth())
    //         .attr("x", 0)
    //         .attr("y", (d,i) => yScale(d))
    //         .attr("fill", "#333");
    // }, [forecast] );
    return <>
        {/* <svg width='300' height='300'/> */}
        <div>
            
        </div>
    </>
}