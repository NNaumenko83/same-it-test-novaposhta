import React, { useState } from "react";
import { TrackInfo } from "../TrackInfo/TrackInfo";
import { Sidebar } from "../SideBar/Sidebar";
import { InfoWrapper, MainContainer, TrackFormWrapper } from "./Main.styled";
import { TrackForm } from "../TrackForm/TrackForm";

import { Container } from "../Container/Container";

export const Main: React.FC = () => {
	const [trackedNumbers, setTrackedNumbers] = useState<string[]>([]);

	const handleTrackingResponse = (response: string) => {
		// Оновлюємо список відстежуваних номерів
		setTrackedNumbers(prevTrackedNumbers => [...prevTrackedNumbers, response]);
	};

	return (
		// <MainContainer>
		<main>
			<Container>
				<MainContainer>
					<TrackFormWrapper>
						<TrackForm />
					</TrackFormWrapper>
					<InfoWrapper>
						<h1>Main Content</h1>
						<p>This is the main content of the website.</p>
						{/* Зберігайте тут trackInfo та відображайте відповідні компоненти */}
						{trackedNumbers.map((number, index) => (
							<TrackInfo key={index} ttnNumber={number} onTrackingResponse={handleTrackingResponse} />
						))}
					</InfoWrapper>
					<Sidebar trackingNumbers={trackedNumbers} />
				</MainContainer>
			</Container>
		</main>

		// </MainContainer>
	);
};

{
	/* <div class="parent">
	<div class="div1"> </div>
	<div class="div2"> </div>
	<div class="div3"> </div>
</div>; */
}
