import React, { useState } from "react";

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

function PhoneNumberInput({ value, onChange }) {
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  const [phonePlaceholder, setPhonePlaceholder] = useState(countryCodes["United Kingdom"] + " (555) 000-000");

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setPhonePlaceholder(countryCodes[country] + " (555) 000-000");
  };

  const handlePhoneChange = (e) => {
    onChange(e.target.value); // Передаем введенный номер родительскому компоненту
  };

  return (
    <div className="rounded-lg mt-2 mx-4 flex md:flex-row sm:flex-col sm:gap-6 items-center space-x-3 max-w-7xl">
      {/* Country Selector */}
      <div className="relative">
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="text-sm outline-none rounded-lg h-12 pl-4 pr-12 border focus:border-sky-500 focus:ring-2 focus:ring-sky-500 appearance-none"
        >
          {Object.keys(countryCodes).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {/* Custom Arrow Icon */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
          <i className="ri-arrow-down-s-line"></i>
        </div>
      </div>

      {/* Phone Input */}
      <input
        type="tel"
        value={value}  // Устанавливаем значение через пропс
        onChange={handlePhoneChange} // Обработчик для передачи изменений
        placeholder={phonePlaceholder}
        className="w-full pl-4 py-2 bg-transparent outline-none border focus:border-sky-500 rounded-lg focus:text-sky-800 text-xl"
        required
      />
    </div>
  );
}

export default PhoneNumberInput;
