"use client"
import GoogleMapReact from 'google-map-react';

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 13.3829901,
            lng: 101.3183004
        },
        zoom: 18
    };

    return (
        <div style={{ height: '25vh', width: '100%' }}>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
    );
}
