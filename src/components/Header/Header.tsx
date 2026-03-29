import { useDispatch } from 'react-redux';
import { HeaderBlock, HeaderContainer, HeaderLink, ThemeToggleButton } from './Header.style';
import { toggleThemeAction } from '../../feature/themeList';

export const Header = () => {
	const dispatch = useDispatch();

	return (
		<HeaderBlock>
			<HeaderContainer>
				<HeaderLink
					to="/"
				>ToDo</HeaderLink>
				<HeaderLink
					to="/list"
				>List</HeaderLink>
				<ThemeToggleButton
					onClick={() => dispatch(toggleThemeAction())}
				>
					Change Theme
				</ThemeToggleButton>
			</HeaderContainer>
		</HeaderBlock>
	);
}