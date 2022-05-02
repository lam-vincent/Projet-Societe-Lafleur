<script lang="ts">
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Card from './Card.svelte';
</script>

<LayoutGrid>
	{#each Array(3) as _unused, i}
		<Cell>
			<div class="demo-cell"><Card /></div>
		</Cell>
	{/each}
</LayoutGrid>

<style>
	.demo-cell {
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--mdc-theme-secondary, #333);
		color: var(--mdc-theme-on-secondary, #fff);
	}
</style>
