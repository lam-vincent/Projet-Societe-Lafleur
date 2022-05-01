<script lang="ts">
	import Radio from '@smui/radio';
	import FormField from '@smui/form-field';

	let onoff = 'Femme';
	export let label = '';
</script>

<div class="wrapper">
	<span>{label}</span>
	{#each ['Femme', 'Homme'] as option}
		<FormField>
			<Radio bind:group={onoff} value={option} touch />
			<span slot="label">{option}</span>
		</FormField>
	{/each}
</div>

<pre class="status">Selected: {onoff}</pre>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	.radio-demo > :global(*) {
		margin: 0 0.2em;
	}
</style>
