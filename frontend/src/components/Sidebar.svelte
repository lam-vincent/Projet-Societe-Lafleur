<script lang="ts">
	import Menu from '@smui/menu';
	import List, { Separator } from '@smui/list';
</script>

<Menu static>
	<List>
		<h3 class="list">Sté Lafleur</h3>
		<button> <a href="http://localhost:3000/">Accueil</a> </button>
		<Separator />
		<h4><u>Nos produits</u></h4>
		<button> <a href="http://localhost:3000/bulbes">Bulbes</a> </button> <br /> <br />
		<button>
			<a href="http://localhost:3000/rosiers">Rosiers</a>
		</button> <br /> <br />
		<button> <a href="http://localhost:3000/plantes-a-massif">Plantes à massif</a> </button>
		<Separator />
		<button> <a href="http://localhost:3000/contact">Contact</a> </button>
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
		height: 55vh;
	}
</style>
