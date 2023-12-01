import styled from "styled-components";
import { ReactComponent as loaderIcon } from "../Loader/icon.svg";

export const StyledLoader = styled(loaderIcon)`
	margin:0 auto;
	align-self: center;
	width: 91px;
	height: 91px;
	animation: spiner 0.7s linear infinite;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 70px;
		height: 70px;
	}

	
	@keyframes spiner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;