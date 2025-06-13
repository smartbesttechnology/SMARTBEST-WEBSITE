import { useState, useEffect } from 'react';
import { contactsConfig, ContactInfo } from '../config/contacts';

export const useGeolocation = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(contactsConfig.usa);
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Try to get user's location using IP geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          setCountry(data.country_name || data.country_code);
          
          // Check if user is from Nigeria
          if (data.country_code.toLowerCase() === 'ng') {
            setContactInfo(contactsConfig.nigeria);
          } else {
            setContactInfo(contactsConfig.usa);
          }
        }
      } catch (error) {
        console.log('Geolocation detection failed, using default contacts');
        // Fallback to USA contacts if geolocation fails
        setContactInfo(contactsConfig.usa);
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  return { contactInfo, isLoading, country };
};