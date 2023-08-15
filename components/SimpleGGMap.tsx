"use client"

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: { text: string }) => {
    const K_WIDTH = 20;
    const K_HEIGHT = 20;

    const greatPlaceStyle = {
        // initially any map object has left top corner at lat lng coordinates
        // it's on you to set object origin to 0,0 coordinates
        position: 'absolute',
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT / 2,

        border: '5px solid #f44336',
        borderRadius: K_HEIGHT,
        backgroundColor: 'white',
        textAlign: 'center',
        color: '#3f51b5',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 4
    };
    return <div style={greatPlaceStyle}>
        {text}
    </div>;
}

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 13.3829901,
            lng: 101.3183004
        },
        zoom: 18
    };

    return (
        // Important! Always set the container height explicitly
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
