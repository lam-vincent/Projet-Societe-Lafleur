<script lang="ts">
	import Menu from '@smui/menu';
	import List, { Item, Separator, Text } from '@smui/list';
	let clicked = 'nothing yet';
</script>

<Menu static>
	<List>
		<h3 class="list">Sté Lafleur</h3>
		<Item on:SMUI:action={() => (clicked = 'Accueil')}>
			<Text>Accueil</Text>
		</Item>
		<Separator />
		<h4><u>Nos produits</u></h4>
		<Item on:SMUI:action={() => (clicked = 'Bulbes')}>
			<Text>Bulbes</Text>
		</Item>
		<Item on:SMUI:action={() => (clicked = 'Rosiers')}>
			<Text>Rosiers</Text>
		</Item>
		<Item on:SMUI:action={() => (clicked = 'Plantes à massif')}>
			<Text>Plantes à massif</Text>
		</Item>
		<Separator />
		<Item on:SMUI:action={() => (clicked = 'Contact')}>
			<Text>Contact</Text>
		</Item>
	</List>
	<div class="space" />
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
		height: 50vh;
	}
</style>
