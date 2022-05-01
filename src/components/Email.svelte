<script lang="ts">
	import Textfield from '@smui/textfield';
	import { Icon as CommonIcon } from '@smui/common';

	let valueElementsLabel = '';
	export let value = '';
	export let label = '';
</script>

<div class="wrapper">
	<Textfield bind:value={valueElementsLabel} type="email">
		<svelte:fragment slot="label">
			<CommonIcon
				class="material-icons"
				style="font-size: 1em; line-height: normal; vertical-align: top;">{label}</CommonIcon
			>
			{value}
		</svelte:fragment>
	</Textfield>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
</style>
