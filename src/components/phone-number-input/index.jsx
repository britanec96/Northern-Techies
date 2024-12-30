import React, { useState, useEffect } from "react";
import Flag from "react-world-flags";
import Select from "react-select"; // Импортируем react-select

const countryCodes = {
  "United States": "+1",
  "United Kingdom": "+44",
  "Canada": "+1",
  "Australia": "+61",
  "Germany": "+49",
  "France": "+33",
  "Italy": "+39",
  "Spain": "+34",
  "Russia": "+7",
  "China": "+86",
  "India": "+91",
  "Japan": "+81",
  "Brazil": "+55",
  "Mexico": "+52",
  "South Africa": "+27",
  "Nigeria": "+234",
  "Egypt": "+20",
  "Turkey": "+90",
  "Saudi Arabia": "+966",
  "United Arab Emirates": "+971",
};

const countryData = {
  "United States": "US",
  "United Kingdom": "GB",
  "Canada": "CA",
  "Australia": "AU",
  "Germany": "DE",
  "France": "FR",
  "Italy": "IT",
  "Spain": "ES",
  "Russia": "RU",
  "China": "CN",
  "India": "IN",
  "Japan": "JP",
  "Brazil": "BR",
  "Mexico": "MX",
  "South Africa": "ZA",
  "Nigeria": "NG",
  "Egypt": "EG",
  "Turkey": "TR",
  "Saudi Arabia": "SA",
  "United Arab Emirates": "AE",
};

const countryOptions = Object.keys(countryData).map((country) => ({
  value: country,
  label: (
    <div className="flex items-center">
      <Flag
        code={countryData[country]}
        alt={country}
        style={{ width: "24px", height: "24px", marginRight: "10px" }}
      />
      {country}
    </div>
  ),
}));

function PhoneNumberInput({ value, onChange }) {
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  const [formattedPhone, setFormattedPhone] = useState(value);

  useEffect(() => {
    setFormattedPhone(value);
  }, [value]);

  const handleCountryChange = (selectedOption) => {
    const country = selectedOption.value;
    const newCode = countryCodes[country];

    setSelectedCountry(country);

    // Если номер не начинается с кода страны, то обнуляем номер, оставляя только код страны
    if (!formattedPhone.startsWith(newCode)) {
      setFormattedPhone(newCode);
      onChange(newCode); // Передаем только код страны
    }
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value.trim(); // Удаляем лишние пробелы

    // Убираем всё кроме цифр
    const digitsOnly = phoneValue.replace(/\D/g, "");

    // Проверяем, начинается ли введенное значение с текущего кода страны
    const countryCode = countryCodes[selectedCountry].replace(/\D/g, ""); // Код страны (только цифры)

    if (digitsOnly.startsWith(countryCode)) {
      // Если начинается с кода страны, сохраняем только цифры после кода
      const restOfNumber = digitsOnly.slice(countryCode.length);
      setFormattedPhone(`${countryCodes[selectedCountry]} ${restOfNumber}`);
      onChange(`${countryCodes[selectedCountry]} ${restOfNumber}`);
    } else {
      // Если код страны отсутствует, добавляем его
      setFormattedPhone(`${countryCodes[selectedCountry]} ${digitsOnly}`);
      onChange(`${countryCodes[selectedCountry]} ${digitsOnly}`);
    }
  };

  const handleBlur = () => {
    // Маскируем номер, только если номер состоит из цифр
    const phoneDigits = formattedPhone.replace(/\D/g, "");
    let formatted = countryCodes[selectedCountry] + " ";
    if (phoneDigits.length >= 10) {
      formatted += phoneDigits.slice(0, 3) + " " + phoneDigits.slice(3, 6) + " " + phoneDigits.slice(6, 10);
    } else {
      formatted += phoneDigits;
    }
  };

  return (
<div className="rounded-lg mt-4 mx-4 flex md:flex-row sm:flex-col sm:gap-6 items-center space-x-3 max-w-7xl">
  {/* Country Selector */}
  <div className="w-full">
    <Select
      options={countryOptions}
      onChange={handleCountryChange}
      value={{
        value: selectedCountry,
        label: (
          <div className="flex items-center text-almost-white">
            <Flag
              code={countryData[selectedCountry]}
              alt={selectedCountry}
              style={{ width: "24px", height: "24px", marginRight: "10px" }}
            />
            {selectedCountry}
          </div>
        ),
      }}
      className="w-full px-6 py-4 border-2 border-transparent focus:border-sky-500 rounded-lg bg-gray-700 text-almost-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 ease-in-out"
      classNamePrefix="react-select"
      placeholder="Select Country"
      styles={{
        control: (provided) => ({
          ...provided,
          backgroundColor: '#2D2D2D', // Темный фон для контейнера
          color: '#FFFFFF', // Цвет текста
          '&:hover': {
            borderColor: '#4F9CC7', // Цвет границы при наведении
          },
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: '#2D2D2D', // Темный фон для выпадающего меню
          color: '#FFFFFF', // Цвет текста в меню
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#4F9CC7' : '#2D2D2D', // Фон выбранной опции
          color: state.isSelected ? '#FFFFFF' : '#B0B0B0', // Цвет текста опции
          '&:hover': {
            backgroundColor: '#4F9CC7', // Фон опции при наведении
            color: '#FFFFFF', // Цвет текста при наведении
          },
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: '#FFFFFF', // Цвет стрелки
        }),
        indicatorSeparator: () => ({
          display: 'none', // Убираем разделитель
        }),
      }}
    />
  </div>

  {/* Phone Input */}
  <div className="w-full">
    <input
      type="tel"
      value={formattedPhone}
      onChange={handlePhoneChange}
      onBlur={handleBlur}
      placeholder="Phone number"
      className="w-full pl-6 py-4 bg-gray-700 text-white border-2 border-transparent focus:border-sky-500 rounded-lg focus:text-sky-500 text-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 ease-in-out"
      required
    />
  </div>
</div>


  );
}

export default PhoneNumberInput;






