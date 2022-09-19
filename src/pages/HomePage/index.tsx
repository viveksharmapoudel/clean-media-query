import styled from "styled-components";
import { media } from "../../styles/media";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
	& > div {
		width: 300px;
		border: 1px solid;
		height: 300px;
		background-color: pink;
	}

	${media.md`
    grid-template-columns:1fr 1fr ;
  `}
	${media.sm`
    width:100%;
  	grid-template-columns: 1fr ;
    & >div{

    }
  `};
`;

const HomePage = () => {
	return (
		<Wrapper>
			<div>column1</div>
			<div>column2</div>
			<div>column3</div>
			<div>column4</div>
		</Wrapper>
	);
};

export default HomePage;
