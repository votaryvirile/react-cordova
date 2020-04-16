import styled from 'styled-components';

export const ContentWrap = styled.div`
	color: #fff;
	margin: auto;
	position: relative;
	width: 700px;
	top: 50px;
	font-size: 24px;
	text-align: center;
	line-height: 48px;
`;

export const NameWrap = styled(ContentWrap)`
	text-transform: uppercase;
	font-weight: 700;
`;

export const Input = styled.input`
	border: unset;
	border-bottom: 2px solid #fff;
	width: 300px;
	margin: 100px auto;
	height: 40px;
	background: unset;
	display: block;
	color: #fff;
	font-size: 18px;
	padding-left: 10px;
	outline: none;
	text-align: center;

	&::placeholder {
		color: #fff;
		opacity: 0.7;
	}
`;

