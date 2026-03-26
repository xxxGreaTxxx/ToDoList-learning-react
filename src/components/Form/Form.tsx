import './Form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearInputValue, setInputValue } from '../../feature/forminput';
import type { RootState } from '../../store';

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
		<div className="form-wrapper">
			<form action="#" onSubmit={formSubmit}>
				<label>
					<input
						value={inputText}
						type="text"
						onChange={handleChange}
					/>
					<button></button>
				</label>
			</form>
		</div>
	);
}