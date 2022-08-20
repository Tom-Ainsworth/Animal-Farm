import { useEffect, useState } from 'react';
import './App.css';
import Animal from './components/Animal';
import useAnimalSearch from './hooks/useAnimalSearch';

function App() {
	const { search, animals } = useAnimalSearch();

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
