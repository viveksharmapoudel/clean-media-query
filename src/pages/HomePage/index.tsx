import styled from "styled-components";
import { media } from "../../styles/media";

const Wrapper = styled.div`
	width: 1200px;
	border: 1px solid;
	height: 300px;
	background-color: blue;
	${media.sm`
    width:100%;
  `};
`;

const HomePage = () => {
	return <Wrapper>homepage</Wrapper>;
};

export default HomePage;
