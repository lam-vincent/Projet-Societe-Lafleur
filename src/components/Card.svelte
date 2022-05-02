<script lang="ts">
	import FaMinusCircle from 'svelte-icons/fa/FaMinusCircle.svelte';
	import FaPlusCircle from 'svelte-icons/fa/FaPlusCircle.svelte';

	export let amount = 0;
</script>

<div class="card">
	<div class="image">
		<span>purple lilac</span>
	</div>
	<div class="details">
		<div class="stats">
			<span class="information">réf : r01</span>
			<span class="information">10 €</span>
			<span class="information">quantité : 10</span>
		</div>
		<div class="content">une très belle fleur</div>
		<div class="order">
			<div class="logo"><FaMinusCircle /></div>
			<input bind:value={amount} />
			<div class="logo"><FaPlusCircle /></div>
			<span class="basket">Ajouter au panier</span>
		</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		width: 34rem;
		height: 12rem;
	}

	.image {
		background-image: url('https://www.larbre-yoga.fr/wp-content/uploads/2019/03/flower-purple-lical-blosso.jpg');
		background-size: cover;
		width: 16rem;
		height: 12rem;
		border-radius: 1rem;

		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	.details {
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		background-color: #e5e7eb;
		width: 18rem;
		height: 12rem;
		border-radius: 1rem;
		transform: translate(-2rem, 0);
	}

	.stats {
		display: flex;
		justify-content: space-evenly;
	}

	.information {
		text-align: center;
		background-color: lightgreen;
		border-radius: 4rem;
		padding: 0.5rem;
	}

	.content {
		display: flex;
		justify-content: space-evenly;
	}

	.order {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.logo {
		width: 2rem;
		display: flex;
		align-items: center;
	}

	input {
		width: 2rem;
		height: 1rem;
	}

	.basket {
		text-align: center;
		background-color: lightgreen;
		border-radius: 4rem;
		padding: 0.6rem;
	}
</style>
