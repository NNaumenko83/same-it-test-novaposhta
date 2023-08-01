import { styled } from "styled-components";

export const MainContainer = styled.div`
	display: grid;
	min-height: 100%;
	grid-template-columns: 1fr;
	grid-template-rows: 50px 1fr 3fr;

	@media screen and (min-width: 768px) {
		grid-template-columns: 3fr 1fr;
		grid-template-rows: 80px 1fr;
		grid-column-gap: 5px;
		grid-row-gap: 5px;
	}
`;

export const TrackFormWrapper = styled.div`
	border: 3px solid red;
	border-radius: 20px;
	@media screen and (min-width: 768px) {
		grid-area: 1/1/2/3;
	}
`;

export const InfoWrapper = styled.div`
	border: 3px solid red;
	border-radius: 20px;
	@media screen and (min-width: 768px) {
		grid-area: 2/1/3/2;
	}
`;
