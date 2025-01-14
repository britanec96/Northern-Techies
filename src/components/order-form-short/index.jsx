import React, { useState } from "react";
import PhoneNumberInput from "../phone-number-input";
import { Button } from "../button";

function ServiceOrderFormShort() {
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      message,
      isChecked,
      name
    };

    console.log("Form Data:", formData);

    // Очистка формы после отправки
    setMessage("");
    setIsChecked(false);
    setName("");
  };

  return (
    <div className="flex items-center justify-center w-full mt-14 bg-white">
      <form
        name="Submit"
        onSubmit={handleSubmit}
        className="border-4 border-sky-700 p-6 rounded-lg space-y-4 w-full"
      >
        <h1 className="text-5xl font-bold text-center mb-4 text-almost-black">Tech Troubles? <span className="text-sky-500">We're</span> Here to Help!</h1>


        {/* Name */}

        <div>
          <label htmlFor="inputname" className="block text-almost-black">
            Your Name:
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="inputname"
              value={name} 
              onChange={(e) => setName(e.target.value)} // Обновляем состояние при вводе
              className="block w-full border-2 rounded-md p-2 focus:text-sky-500 text-2xl"
              required // Делаем поле обязательным
            />
          </div>
        </div>

        {/* Number */}
        
        <PhoneNumberInput/>

        {/* Поле для текста */}
        <div>
          <label className="block text-almost-black">Message:</label>
          <textarea
            name="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-2 mt-1 p-2 border-gray-400 rounded-lg"
            rows="4"
            placeholder="Type something.."
          ></textarea>
        </div>

        {/* Чекбокс */}
        <div className="flex justify-center items-center">
  <label className="flex items-center">
    <input
      type="checkbox"
      className="peer cursor-pointer hidden"
      checked={isChecked} // Привязываем к состоянию isChecked
      onChange={() => setIsChecked(!isChecked)} // Изменение состояния при клике
    />
    <span
      className="inline-block w-5 h-5 border-2 border-almost-black relative cursor-pointer 
        after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 
        after:-translate-y-1/2 after:w-[10px] after:h-[10px] after:bg-sky-500 after:rounded-[2px] 
        after:opacity-0 peer-checked:after:opacity-100"
    ></span>
    <p className="inline-flex text-almost-black ml-4">
      I agree to the&nbsp;<a className="text-sky-500 underline cursor-pointer">terms</a>&nbsp;of personal data processing
    </p>
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

export default ServiceOrderFormShort;