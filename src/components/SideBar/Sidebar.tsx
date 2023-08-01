// Sidebar.tsx
import React from "react";
import { SideBarStyled } from "./SideBar.styled";

interface SidebarProps {
	trackingNumbers: string[];
}

export const Sidebar: React.FC<SidebarProps> = ({ trackingNumbers }) => {
	return (
		<SideBarStyled>
			<h2>Історія</h2>
			<ul>
				{trackingNumbers.slice(0, 5).map((number, index) => (
					<li key={index}>{number}</li>
				))}
			</ul>
		</SideBarStyled>
	);
};
