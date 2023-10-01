import React, { useState, useEffect } from 'react';

const Location = () => {
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        const address = await getAddressFromCoordinates(latitude, longitude);
                        setUserLocation({ latitude, longitude, address });
                    },
                    (error) => console.error(error)
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        getLocation();
    }, []);

    const getAddressFromCoordinates = async (latitude, longitude) => {
        const apiKey = 'YOUR_API_KEY'; // Replace with your Google Maps Geocoding API key
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                return data.results[0].formatted_address;
            } else {
                throw new Error('No address found for the given coordinates.');
            }
        } catch (error) {
            console.error('Error fetching address:', error);
            return null;
        }
    };

    return (
        <div className="locationtest">
            {userLocation && (
                <div className="locationDesc">
                    <p className="locationTitle">Vị trí hiện tại của bạn</p>
                    <p className="locationDesc">
                        {`Latitude: ${userLocation.latitude}, Longitude: ${userLocation.longitude}`}
                    </p>
                    <p className="locationDesc">{`Address: ${userLocation.address}`}</p>
                </div>
            )}
        </div>
    );
};

export default Location;
