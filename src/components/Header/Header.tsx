import { Container } from "../Container/Container";
import { HeaderStyled } from "./Header.styled";

export const Header: React.FC = () => {
	return (
		<HeaderStyled>
			<Container>
				<h1>NovaPoshta</h1>
				{/* <img src={logo} alt="Nova Poshta Logo" style={{ height: "40px" }} /> */}
			</Container>
		</HeaderStyled>
	);
};
