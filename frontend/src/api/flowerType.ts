import type { FlowerType } from '../types';

export async function fetchFlowerTypes(): Promise<string[]> {
	const res = await fetch('http://localhost:4000/flowertypes');
	const flowerTypes: FlowerType[] = await res.json();
	return flowerTypes.map((flowerType: FlowerType) => flowerType.name);
}
