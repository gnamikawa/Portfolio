import { useEffect, useState } from 'react';
import { useGeolocation } from '../../functions/useGeolocation';

export function useWeekForecast(cnt) {
    const { success: geolocationSuccess, error: geolocationError } = useGeolocation();
    const [openWeatherData, setOpenWeatherData] = useState<any>({});
    useEffect(() => {
        if (!geolocationSuccess)
            return;
        (async () => {
            const [lat, lon] = [geolocationSuccess.coords.latitude, geolocationSuccess.coords.longitude];
            const endpoint = `/api/weather/forecast/week?lat=${lat}&lon=${lon}`;
            const openWeatherSuccess = await fetch(endpoint).then(raw => raw.json());
            setOpenWeatherData(openWeatherSuccess);
        })();
    }, [geolocationSuccess]);
    return openWeatherData;
}
