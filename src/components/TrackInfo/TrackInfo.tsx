// TrackInfo.tsx
import React, { useState } from "react";
import { fetchFakeTrackInfo } from "../../services/fetchFakeTrackInfo";

interface TrackInfoProps {
  ttnNumber: string;
  onTrackingResponse: (response: string) => void;
}

export const TrackInfo: React.FC<TrackInfoProps> = ({
  ttnNumber,
  onTrackingResponse,
}) => {
  const [trackInfo, setTrackInfo] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Запит на сервер для отримання інформації про посилку (фейковий запит)
    // Результат можна зберігати у стейті і виводити на сторінку
    fetchFakeTrackInfo('123').then((response) => {
      setTrackInfo(response);
      onTrackingResponse(ttnNumber); // Передаємо отриманий номер для оновлення історії
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ttnNumber}
          onChange={() => {}}
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
      {trackInfo && (
        <div>
          <p>{trackInfo}</p>
        </div>
      )}
    </div>
  );
};
