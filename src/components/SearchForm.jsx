import { useRef, useState } from 'react';
import './SearchForm.scss';

function SearchForm({ setSearch }) {
	const inputRef = useRef();
	const [error, setError] = useState('');

	const handelSubmit = (e) => {
		e.preventDefault();
		setError('');
		const value = inputRef.current.value.trim();

		if (!value) {
			setError('Please enter a valid location id');
			return;
		}

		if (isNaN(+value) || +value < 1) {
			setError('Please enter a valid number');
			return;
		}

		if (+value > 126) {
			setError('You must provide a number between a 1 and 126');
		}

		setSearch(value);
		inputRef.current.value = '';
	};

	return (
		<form className="search" onSubmit={handelSubmit}>
			<div className="container">
				<input
					className="search__input"
					type="text"
					ref={inputRef}
					placeholder="Enter a location id"
				/>
				<button className="search__btn">Search</button>
				{error && <p className="search__error">{error}</p>}
			</div>
		</form>
	);
}

export default SearchForm;
