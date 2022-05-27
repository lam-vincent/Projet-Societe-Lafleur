<script lang="ts">
	import Textfield from '@smui/textfield';
	import FaRegCalendarAlt from 'svelte-icons/fa/FaRegCalendarAlt.svelte';

	export let valueTypeDate = '';
	export let label = '';
</script>

<div class="wrapper">
	<div>
		<Textfield bind:value={valueTypeDate} {label} type="datetime-local">
			<div class="icon"><FaRegCalendarAlt /></div>
		</Textfield>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	.icon {
		position: absolute;
		top: 50%;
		left: 90%;
		width: 1rem;
	}
</style>
