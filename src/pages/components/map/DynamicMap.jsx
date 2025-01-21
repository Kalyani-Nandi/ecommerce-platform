import React, { useState } from 'react';

const DynamicMap = () => {
  const [address, setAddress] = useState('');
  const [mapSrc, setMapSrc] = useState('');

  // List of addresses (you can replace this with your dynamic data)
  const addresses = [
    { name: 'Bhubaneswar, Odisha', value: 'Bhubaneswar, Odisha' },
    { name: 'New York, USA', value: 'New York, USA' },
    { name: 'London, UK', value: 'London, UK' },
    // Add more addresses as needed
  ];

  const handleAddressChange = (event) => {
    const selectedAddress = event.target.value;
    setAddress(selectedAddress);

    // Encode the selected address and create the Google Maps embed URL
    const encodedAddress = encodeURIComponent(selectedAddress);
    const newMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.4134092598!2d85.73805210082847!3d20.30102587424813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2s${encodedAddress}&output=embed`;
    setMapSrc(newMapSrc);
  };

  return (
    <div>
      <h1>Select an Address to View on Map</h1>
      <select onChange={handleAddressChange} value={address}>
        <option value="">Select an address</option>
        {addresses.map((address, index) => (
          <option key={index} value={address.value}>
            {address.name}
          </option>
        ))}
      </select>

      {/* Display the Google Map */}
      {mapSrc && (
        <div>
          <iframe
            src={mapSrc}
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default DynamicMap;
