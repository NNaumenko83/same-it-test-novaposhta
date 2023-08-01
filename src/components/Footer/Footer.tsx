import React from "react";
import { Container } from "../Container/Container";

export const Footer: React.FC = () => {
	return (
		<footer style={{ background: "red", color: "white", padding: "10px" }}>
			<Container>
				<p>Created by Mykola Naumenko</p>
			</Container>
		</footer>
	);
};
