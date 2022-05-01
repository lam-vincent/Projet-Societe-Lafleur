<script>
	import '../app.css';
	import FaHandHoldingHeart from 'svelte-icons/fa/FaHandHoldingHeart.svelte';
	import Navbar from './Navbar.svelte';
</script>

<div class="header">
	<div class="logo"><FaHandHoldingHeart /></div>
	<div class="middle">
		<h1><strong>Société Lafleur</strong></h1>
		<Navbar />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Square+Peg&display=swap');

	.header {
		height: 14rem;
		background-color: #42b5d3;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		font-family: 'Square Peg', cursive;
	}

	.logo {
		width: 5rem;
		left: 1rem;
		position: absolute;
	}

	.middle {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	h1 {
		margin: 0;
		font-size: 4rem;
	}
</style>
