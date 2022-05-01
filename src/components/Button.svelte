<script lang="ts">
	import Button, { Label } from '@smui/button';

	let clicked = 0;
	export let label = '';
</script>

<div class="wrapper">
	<Button on:click={() => clicked++} variant="raised">
		<Label>{label}</Label>
	</Button>
</div>

<style>
	.wrapper {
		height: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
