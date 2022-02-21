import { useEffect, useState } from 'react';
import { Errorable } from '../pages/apps/weather';

export function useGeolocation() {
    const [geolocation, setGeolocationPair] = useState<Errorable>({ success: undefined, error: undefined });
    useEffect(() => {
        const onError = (err) => setGeolocationPair({ success: null, error: err });
        const onSuccess = (data) => setGeolocationPair({ success: data, error: null });
        navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
    }, []);
    return geolocation;
}
