<script lang="ts">
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';

	let valueB = '';
	export let label = '';
	export let value = '';
</script>

<div class="wrapper">
	<div>
		<Textfield variant="outlined" bind:value={valueB} {label}>
			<HelperText slot="helper">{value}</HelperText>
		</Textfield>

		<pre class="status">Value: {valueB}</pre>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
</style>
