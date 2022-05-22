<script>
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import { fetchFlowerTypes } from '../api/flowerType';

	let active = 'Accueil';
	let tabs = ['Accueil', 'Contact'];

	// On appelle la fonction
	fetchFlowerTypes().then((res) => (tabs = ['accueil', ...res, 'contact']));

	function link(tab) {
		if (tab == 'accueil') {
			return 'http://localhost:3000/';
		}
		if (tab == 'plantes à massif') {
			return 'http://localhost:3000/plantes-a-massif';
		}
		return 'http://localhost:3000/' + tab;
	}
</script>

<div>
	<TabBar {tabs} let:tab bind:active>
		<Tab {tab} href={link(tab)}>
			<Label>{tab}</Label>
		</Tab>
	</TabBar>
</div>
