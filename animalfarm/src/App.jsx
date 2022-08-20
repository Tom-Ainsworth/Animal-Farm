import { useState } from 'react';
import './App.css';
import Animal from './components/Animal';

function App() {
	const [animals, setAnimals] = useState([]);

	const search = async (q) => {
		try {
			const response = await fetch(
				'http://localhost:8080?' + new URLSearchParams({ q })
			);
			const data = await response.json();
			setAnimals(data);
		} catch (err) {
			// console.log(err)
		}
	};

	return (
		<main>
			<h1>Animal Farm</h1>

			<input
				type="text"
				placeholder="Search"
				onChange={(e) => search(e.target.value)}
			/>

			<ul>
				{animals.length ? (
					<>
						{animals.map((animal) => (
							<Animal key={animal.id} {...animal} />
						))}
					</>
				) : (
					<h2>No animals found</h2>
				)}
			</ul>
		</main>
	);
}

export default App;
