<script lang="ts">
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Button from '@smui/button';

	let active = 'Home';
</script>

<div>
	<TabBar
		tabs={['Accueil', 'Bulbes', 'Rosiers', 'Plantes à massif', 'Contact']}
		let:tab
		bind:active
	>
		<Tab {tab}>
			<Label>{tab}</Label>
		</Tab>
	</TabBar>

	<div style="margin-top: 1em;">
		{#each ['Accueil', 'Bulbes', 'Rosiers', 'Plantes à massif', 'Contact'] as tab}
			<Button on:click={() => (active = tab)}><Label>{tab}</Label></Button>
		{/each}
	</div>
</div>
