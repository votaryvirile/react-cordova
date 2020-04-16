import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	height: 80px;
`;

export const HeaderElement = styled.div`
	color: #fff;
	float: right;
	letter-spacing: 1px;
	margin: 30px 20px;

	.linkWrapper {
		padding: 3px;
	    color: #fff;
	    text-decoration: none;
    }

    .linkWrapper:hover {
	    color: #fff;
	    font-weight: 600;
    }

    .activeItem {
    	padding: 3px 10px;
	    color: #fff;
	    font-weight: 600;
		border-bottom: 2px solid #fff;
		text-transform: uppercase;   
    }
`;

export const ReactLogo = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	position: absolute;
	margin: 10px 30px;
	padding: 5px;

	svg {
		color: #fff;
	}
`;