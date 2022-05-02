<script>
	import '../app.css';
	import FaHandHoldingHeart from 'svelte-icons/fa/FaHandHoldingHeart.svelte';
	import Navbar from './Navbar.svelte';
	import FaUserCircle from 'svelte-icons/fa/FaUserCircle.svelte';
	import FaSignOutAlt from 'svelte-icons/fa/FaSignOutAlt.svelte';
</script>

<div class="header">
	<div class="left">
		<div class="logo"><FaHandHoldingHeart /></div>
	</div>
	<div class="middle">
		<h1><strong>Société Lafleur</strong></h1>
		<Navbar />
	</div>
	<div class="user">
		<span class="username">Vincent LAM</span>
		<div class="user-logo">
			<FaUserCircle />
		</div>
		<div class="user-logo">
			<FaSignOutAlt />
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Square+Peg&display=swap');

	.header {
		height: 14rem;
		background-color: #42b5d3;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: 'Square Peg', cursive;
	}

	.left {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 16rem;
	}

	.logo {
		width: 6rem;
		background-color: lightgreen;
		border-radius: 8rem;
		padding: 2rem;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

	.user {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 16rem;
		height: 4rem;
		background-color: lightgreen;
		border-radius: 4rem;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin: 2rem;
	}

	.username {
		font-family: Arial, Helvetica, sans-serif;
	}

	.user-logo {
		display: flex;
		width: 2rem;
	}
</style>
