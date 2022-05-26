import type { Flower } from '../types';

export async function fetchFlowers(flowerType: string) {
	const searchParams = new URLSearchParams({
		flowertype: flowerType
	});
	const res = await fetch('http://localhost:4000/flowersbytype?' + searchParams);
	const flowers: Flower[] = await res.json();
	return flowers;
}
