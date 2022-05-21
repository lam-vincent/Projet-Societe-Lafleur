<script lang="ts">
	import Menu from '@smui/menu';
	import List, { Item, Separator, Text } from '@smui/list';

	let clicked = 'nothing yet';
</script>

<Menu static>
	<List class="list">
		<h3 class="list">Sté Lafleur</h3>
		<Item on:SMUI:action={() => (clicked = 'Accueil')}>
			<Text class="list">Accueil</Text>
		</Item>
		<Separator />
		<h4 class="list"><u>Nos produits</u></h4>
		<Item on:SMUI:action={() => (clicked = 'Bulbes')}>
			<Text class="list">Bulbes</Text>
		</Item>
		<Item on:SMUI:action={() => (clicked = 'Rosiers')}>
			<Text class="list">Rosiers</Text>
		</Item>
		<Item on:SMUI:action={() => (clicked = 'Plantes à massif')}>
			<Text class="list">Plantes à massif</Text>
		</Item>
		<Separator />
		<Item on:SMUI:action={() => (clicked = 'Contact')}>
			<Text class="list">Contact</Text>
		</Item>
		<div class="space" />
	</List>
</Menu>

<style>
	h3,
	h4 {
		text-align: center;
	}

	.list {
		width: 20rem;
	}

	.space {
		height: 17rem;
	}
</style>
