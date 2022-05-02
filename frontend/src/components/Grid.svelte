<script lang="ts">
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Card from './Card.svelte';
</script>

<LayoutGrid>
	{#each Array(9) as _unused, i}
		<Cell>
			<div class="demo-cell"><Card /></div>
		</Cell>
	{/each}
</LayoutGrid>

<style>
	.demo-cell {
		height: 12rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
