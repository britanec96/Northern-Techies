import React, { useState } from "react";
import PhoneNumberInput from "../phone-number-input";
import { Button } from "../button";

function ServiceOrderForm() {
  const [service, setService] = useState("");
  const [term, setTerm] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      service,
      term,
      message,
      isChecked,
      name, 
    };

    console.log("Form Data:", formData);

    // Очистка формы после отправки
    setService("");
    setTerm("");
    setMessage("");
    setIsChecked(false);
    setName("");
  };

  return (
    <div className="flex items-center justify-center w-full mt-14 bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="border-4 border-sky-700 p-6 rounded-xl space-y-4 w-full"
      >
        <h1 className="text-5xl font-bold text-center mb-4 text-almost-white">Send <span className="text-sky-500">Us</span> a Request, and We Chat to You Back Later</h1>

        {/* Выбор услуги */}
        <div>
          <label className="block text-almost-white">Choose a prefered service:</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full mt-1 p-2 rounded-lg border-4 focus:border-sky-500"
            required
          >
            <option value="">Select...</option>
            <option value="Consultation">Consultation</option>
            <option value="Web Site Development">Web Site Development</option>
            <option value="UX\UI Design">UX/UI Design</option>
            <option value="Logo Development">Logo Development</option>
            <option value="Installing The Software">Installing The Software</option>
            <option value="Building PC">Building PC</option>
            <option value="Other">Computer/Software is not working</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Срок */}
        <div>
          <label className="block text-almost-white">Term:</label>
          <select
            value={term} // Используем отдельное состояние для срока
            onChange={(e) => setTerm(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-400 rounded-lg"
            required
          >
            <option value="">Select...</option>
            <option value="Emergency">Emergency</option>
            <option value="Not Emergency">Not Emergency</option>
          </select>
        </div>

        {/* Name */}

        <div>
          <label htmlFor="inputname" className="block text-almost-white">
            Name:
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="inputname"
              value={name} // Используем состояние для имени
              onChange={(e) => setName(e.target.value)} // Обновляем состояние при вводе
              className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-900"
              required // Делаем поле обязательным
            />
          </div>
        </div>

        {/* Number */}

        <PhoneNumberInput/>

        {/* Поле для текста */}
        <div>
          <label className="block text-almost-white">Briefly describe:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-400 rounded-lg"
            rows="4"
            placeholder="Type something.."
          ></textarea>
        </div>

        {/* Чекбокс */}
        <div className="flex justify-center items-center">
          <label className="container">
            <input
              type="checkbox"
              className="peer cursor-pointer hidden"
              checked={isChecked} // Привязываем к состоянию isChecked
              onChange={() => setIsChecked(!isChecked)} // Изменение состояния при клике
            />
            <span
              className="inline-block w-5 h-5 border-2 border-almost-white relative cursor-pointer 
                after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 
                after:-translate-y-1/2 after:w-[10px] after:h-[10px] after:bg-sky-500 after:rounded-[2px] 
                after:opacity-0 peer-checked:after:opacity-100"
            ></span>
            <p className="inline-flex text-almost-white ml-4">I agree to the &nbsp; <a className="text-sky-500 underline cursor-pointer">terms</a> &nbsp; of personal data processing (Your data is protected)</p>
          </label>
        </div>

        {/* Кнопка отправки */}
        <Button hasBlueStyle={ true }
          type="submit"
        >
          Sent
        </Button>
      </form>
    </div>
  );
}

export default ServiceOrderForm;