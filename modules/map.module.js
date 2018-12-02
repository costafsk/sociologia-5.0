import {db} from './fb.js';

export const loadMap = () => {
    let divMap = null;
    if (document.URL.includes('report')) {
        divMap = document.querySelector('.mapa');
    } else if (document.URL.includes('feed')) {
        divMap = document.querySelector('.map');
    } else {
        divMap = document.querySelector('#mapIndex');
    }
    const googleMaps = require('google-maps');
    // Settings
    googleMaps.KEY = 'AIzaSyCjXATdQN6e_SpQXrEwIagb2pxE8DjG3IQ';
    googleMaps.LIBRARIES = ['geometry', 'places', 'visualization'];
    googleMaps.LANGUAGE = 'br';

    googleMaps.load(function(google) {
        const map = new google.maps.Map(divMap, {
            zoom: 14,
            maxZoom: 17,
            minZoom: 3
        });
        navigator.geolocation.getCurrentPosition(function(position) {
            map.setCenter(new google.maps.LatLng(position.coords.latitude,
                position.coords.longitude));
        });
        let count = 0;
        google.maps.event.addListener(map, 'click', function(e) {
            if (document.URL.includes('report') && count === 0 && confirm('O ponto está correto?')) {
                count++;
                const marker = new google.maps.Marker({
                    position: e.latLng,
                    map: map,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: 'red',
                        fillOpacity: .2,
                        strokeColor: 'white',
                        strokeWeight: .5,
                        scale: 30
                    }
                });
                const latLong = {
                    lat: e.latLng.lat(), lng: e.latLng.lng()
                };
                writeCoords(latLong);
            }
        });
        google.maps.event.addListener(map, 'center_changed', function (e) {
            if (!document.URL.includes('report')) {
                const database = db.ref('markers/');
                database.once('value',(snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        childSnapshot.val();
                        new google.maps.Marker({
                            position: childSnapshot.val(),
                            map: map,
                            icon: {
                                path: google.maps.SymbolPath.CIRCLE,
                                fillColor: 'red',
                                fillOpacity: .2,
                                strokeColor: 'white',
                                strokeWeight: .5,
                                scale: 30
                            }
                        });
                    });
                });
            }
        });
    });
};

function writeCoords(latLong) {
    db.ref('markers/').push(latLong);
}
