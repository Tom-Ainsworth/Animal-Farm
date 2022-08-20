import { useEffect, useState } from 'react';

const useAnimalSearch = () => {
	const [animals, setAnimals] = useState([]);

	useEffect(() => {
		const lastQuery = localStorage.getItem('lastQuery');
		search(lastQuery);
	}, []);

	const search = async (q) => {
		try {
			const response = await fetch(
				'http://localhost:8080?' + new URLSearchParams({ q })
			);
			const data = await response.json();
			setAnimals(data);

			localStorage.setItem('lastQuery', q);
		} catch (err) {
			// console.log(err)
		}
	};
	return { search, animals };
};

export default useAnimalSearch;
