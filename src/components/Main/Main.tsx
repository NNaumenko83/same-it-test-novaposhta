import React, { useState } from "react";
import { TrackInfo } from "../TrackInfo/TrackInfo";
import { Sidebar } from "../SideBar/Sidebar";

export const Main: React.FC = () => {
  const [trackedNumbers, setTrackedNumbers] = useState<string[]>([]);

  const handleTrackingResponse = (response: string) => {
    // Оновлюємо список відстежуваних номерів
    setTrackedNumbers((prevTrackedNumbers) => [
      ...prevTrackedNumbers,
      response,
    ]);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1", padding: "20px" }}>
        <h1>Main Content</h1>
        <p>This is the main content of the website.</p>
        {/* Зберігайте тут trackInfo та відображайте відповідні компоненти */}
        {trackedNumbers.map((number, index) => (
          <TrackInfo
            key={index}
            ttnNumber={number}
            onTrackingResponse={handleTrackingResponse}
          />
        ))}
      </div>
      <Sidebar trackingNumbers={trackedNumbers} />
    </div>
  );
};
