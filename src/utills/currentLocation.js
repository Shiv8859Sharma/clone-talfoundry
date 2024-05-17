import { REACT_APP_GOOGLE_API_KEY } from "@/constants/common";

export async function getCurrentLocation() {
    if (!navigator.geolocation) {
        return { error: 'Geolocation is not supported by this browser.', success: false };
    }

    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        return await successCallback(position);
    } catch (error) {
        return { error: error.message, success: false };
    }
}

async function successCallback(position) {
    const { latitude, longitude } = position.coords;
    const geocoder = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&language=en&key=${REACT_APP_GOOGLE_API_KEY}`;

    const response = await fetch(geocoder);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const result = await response.json();
    if (!result || !result.results || result.results.length === 0) {
        throw new Error("No location data found");
    }

    const locationData = await result.results[0];

    let city = "";
    let state = "";
    let country = "";
    let country_short = "";

    for (const component of locationData.address_components) {
        if (component.types.includes("locality") || component.types.includes("administrative_area_level_2")) {
            city = component.long_name;
        }
        if (component.types.includes("administrative_area_level_1")) {
            state = component.long_name;
        }
        if (component.types.includes("country")) {
            country = component.long_name;
            country_short = component.short_name;
        }
    }

    return {
        city,
        state,
        country,
        country_short,
        latitude,
        longitude,
        success: true
    };
}