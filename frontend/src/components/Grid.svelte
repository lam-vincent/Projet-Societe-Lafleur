<script>
	import Card from './Card.svelte';

	export let flowers = [];
</script>

<div class="grid">
	{#each flowers as flower}
		<div class="demo-cell">
			<Card
				id={flower._id.slice(3, 7)}
				name={flower.name}
				description={flower.description}
				stock={flower.stock}
				price={flower.price}
			/>
		</div>
	{/each}
</div>

<style>
	.demo-cell {
		height: 12rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px;
		margin: 1rem;
	}
</style>
