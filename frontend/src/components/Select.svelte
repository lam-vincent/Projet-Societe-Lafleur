<script lang="ts">
	import Select, { Option } from '@smui/select';

	export let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

	export let value = '';
	export let label = '';
</script>

<div class="wrapper">
	<div>
		<Select variant="outlined" bind:value {label}>
			<Option value="" />
			{#each fruits as fruit}
				<Option value={fruit}>{fruit}</Option>
			{/each}
		</Select>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
</style>
