import React, { useEffect, useRef } from "react";

const API_KEY = "AIzaSyAjaX7LsXUefminI6f3FrxnoEAGK6y-N-Y";

// La ruta se guarda en la variable global window.points
export const Map = ({ setpoints }) => {
  const ref = useRef(null);

  useEffect(() => {
    const onLoad = () => {
      window.points = [];

      window.map = new window.google.maps.Map(ref.current, {
        zoom: 3,
        center: { lat: -11.74387987225271, lng: -78.06427870451063 },
        mapTypeId: "terrain",
      });

      window.google.maps.event.addListener(window.map, "click", function (
        event: any
      ) {
        placeMarker(event.latLng);

        window.points = [
          ...window.points,
          { lat: event.latLng.lat(), lng: event.latLng.lng() },
        ];

        setpoints(window.points);

        //console.log(window.points);

        var flightPath = new window.google.maps.Polyline({
          path: window.points,
          geodesic: false,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });

        flightPath.setMap(window.map);
      });

      function placeMarker(location: any) {
        new window.google.maps.Marker({
          position: location,
          map: window.map,
        });
      }
    };

    if (!window.google) {
      const script = document.createElement(`script`);
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=` + API_KEY;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);

      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, []);

  return (
    <>
      <div
        style={{
          height: `60vh`,
          margin: `1em 0`,
          borderRadius: `0.5em`,
        }}
        ref={ref}
      />
    </>
  );
}