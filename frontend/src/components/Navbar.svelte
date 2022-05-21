<script>
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import { fetchFlowerTypes } from '../api/flowerType';

	let active = 'Accueil';
	let tabs = ['Accueil', 'Contact'];

	// On appelle la fonction
	fetchFlowerTypes().then((res) => (tabs = ['Accueil', ...res, 'Contact']));
</script>

<div>
	<TabBar {tabs} let:tab bind:active>
		<Tab {tab}>
			<Label>{tab}</Label>
		</Tab>
	</TabBar>
</div>
