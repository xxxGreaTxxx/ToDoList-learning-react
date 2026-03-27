import { useDispatch, useSelector } from 'react-redux';
import { clearInputValue, setInputValue } from '../../feature/forminput';
import type { RootState } from '../../store';
import { FormControl, FormBlock, FormField, FormLabel, FormWrapper } from './Form.style';

import plusIcon from '../../assets/images/plus.png';

export const Form = (props: { createNewToDo: Function }) => {
	const dispatch = useDispatch();
	const inputText = useSelector((state: RootState) => state.inputValue.value);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setInputValue(event.target.value));
	}

	const formSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (inputText.trim()) {
			props.createNewToDo(inputText);
			dispatch(clearInputValue());
		}
	}

	return (
		<FormWrapper>
			<FormBlock action="#" onSubmit={formSubmit}>
				<FormLabel>
					<FormField
						value={inputText}
						type="text"
						onChange={handleChange}
					/>
					<FormControl icon={plusIcon} />
				</FormLabel>
			</FormBlock>
		</FormWrapper>
	);
}