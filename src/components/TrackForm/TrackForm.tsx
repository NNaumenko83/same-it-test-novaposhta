// TrackForm.tsx
import React, { useState } from "react";
import { fetchFakeTrackInfo } from "../../services/fetchFakeTrackInfo";

export const TrackForm: React.FC = () => {
  const [ttnNumber, setTtnNumber] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Валідація: зберігаємо тільки цифри
    const value = e.target.value.replace(/[^\d]/g, "");
    setTtnNumber(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Запит на сервер для отримання інформації про посилку (фейковий запит)
    // Результат можна зберігати у стейті і виводити на сторінку
    fetchFakeTrackInfo(ttnNumber).then((response) => {
      console.log(response);
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
      <input
        type="text"
        value={ttnNumber}
        onChange={handleChange}
        placeholder="Введіть номер ТТН"
        style={{ marginRight: "10px" }}
      />
      <button
        type="submit"
        style={{ background: "red", color: "white", border: "none" }}
      >
        Пошук
      </button>
    </form>
  );
};
