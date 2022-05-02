<script lang="ts">
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';

	let value = '';
	export let helper = '';
	export let label = '';
</script>

<div class="wrapper">
	<Textfield textarea bind:value {label} input$rows={4} input$cols={24} input$resizable={false}>
		<HelperText slot="helper">{helper}</HelperText>
	</Textfield>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
</style>
