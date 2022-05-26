<script lang="ts">
	import FaMinusCircle from 'svelte-icons/fa/FaMinusCircle.svelte';
	import FaPlusCircle from 'svelte-icons/fa/FaPlusCircle.svelte';
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';

	let clicked = 0;
	export let name;
	export let id;
	export let price;
	export let stock;
	export let description;
	export let picture;
</script>

<div class="card">
	<div class="image" style="background-image: url({picture});">
		<span>{name}</span>
	</div>
	<div class="details">
		<div class="stats">
			<span class="information">réf : {id}</span>
			<span class="information">{price} €</span>
			<span class="information">quantité : {stock}</span>
		</div>
		<div class="content">{description}</div>
		<div class="order">
			<div class="logo">
				<IconButton
					class="material-icons"
					on:click={() => {
						if (clicked > 0) {
							clicked--;
						}
					}}><FaMinusCircle /></IconButton
				>
			</div>
			<input bind:value={clicked} type="number" min="0" max={stock} />
			<div class="logo">
				<IconButton
					class="material-icons"
					on:click={() => {
						if (clicked < stock) {
							clicked++;
						}
					}}><FaPlusCircle /></IconButton
				>
			</div>
			<span class="basket">
				<Button on:click={() => clicked++} variant="raised">
					<Label>Ajouter au panier</Label>
				</Button></span
			>
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
		background-size: cover;
		width: 16rem;
		height: 12rem;
		border-radius: 1rem;

		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	.image span {
		text-shadow: black 0.2rem 0.2rem 0.2rem;
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
		display: flex;
		align-items: center;
	}

	input {
		width: 2rem;
		height: 1rem;
	}

	.basket {
		text-align: center;
	}
</style>
