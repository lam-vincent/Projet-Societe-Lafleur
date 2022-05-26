import type { Flower } from '../types';

export async function fetchFlowers() {
	const res = await fetch('http://localhost:4000/flowers');
	const flowers: Flower[] = await res.json();
	console.log(flowers);
}
