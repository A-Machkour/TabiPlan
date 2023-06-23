import React, { useEffect } from "react";
import { useState } from "react";

interface Country {
  name: {
    common: string;
  };
}

const Suggestion: React.FC = () => {
  const [location, setLocation] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Effectuer des actions avec la valeur de location (par exemple, appeler une fonction pour obtenir les suggestions en fonction de la location choisie)
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: Country[] = await response.json();
        setCountries(data);
      } catch (error) {
        console.log("An error occurred while fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);
  const sortedCountries = countries.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
  return (
    <div className="container mx-auto py-80" id="suggestions">
      <button type="submit">Obtenir des suggestions</button>

      <label className="block mb-2 text font-medium ">
        Où voulez vous partir ?
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        // Ici, on va afficher les pays récupérés depuis l'API
        {sortedCountries.map((country, index) => (
          <option key={index}>{country.name.common}</option>
        ))}
      </select>
    </div>
  );
};

export default Suggestion;
