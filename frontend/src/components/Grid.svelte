<script lang="ts">
	import Card from './Card.svelte';
</script>

<div class="grid">
	{#each Array(5) as _unused, i}
		<div class="demo-cell"><Card /></div>
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
