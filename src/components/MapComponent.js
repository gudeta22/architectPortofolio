import React, { useEffect } from 'react';

function MapComponent() {
  useEffect(() => {
    const latitude = 9.0227; // Latitude of Addis Ababa
    const longitude = 38.7465; // Longitude of Addis Ababa

    const mapElement = document.getElementById('map');
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63456.59785252523!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16408c4e8bbf7b8b%3A0xaab04beffdd7392a!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1623767524394!5m2!1sen!2sus`;

    mapElement.src = mapUrl;
  }, []);

  return (
    <div>
      <div className="relative w-full h-96 flex justify-center my-5 m-auto">
        <div className="mb-6 lg:mb-0 shrink w-full lg:w-[50%] lg:pr-3 flex my-5">
          <iframe id="map" className="h-56 md:h-full w-full border-0 rounded-md" allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
