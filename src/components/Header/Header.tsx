import React, { useState } from "react";

import { TrackForm } from "../TrackForm/TrackForm";
import { HeaderStyled } from "./Header.styled";
import { ContainerStyled } from "../Container/Container.styled";

export const Header: React.FC = () => {
	const [showTrackForm, setShowTrackForm] = useState(false);

	const handleTrackClick = () => {
		setShowTrackForm(true);
	};

	return (
		<HeaderStyled>
			<ContainerStyled>
				<h1>NovaPoshta</h1>
				{/* <img src={logo} alt="Nova Poshta Logo" style={{ height: "40px" }} /> */}
				<button
					onClick={handleTrackClick}
					style={{
						background: "white",
						color: "red",
						border: "none",
						padding: "10px",
					}}
				>
					Відстежити ТТН
				</button>
				{showTrackForm && <TrackForm />}
			</ContainerStyled>
		</HeaderStyled>
	);
};
