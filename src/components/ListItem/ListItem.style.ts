import styled from 'styled-components';

export const ListItemBlock = styled.a`
	text-decoration: none;
	padding: 10px;

	&.done {
		color: green;
	}

	&.notDone {
		color: red;
	}
`;