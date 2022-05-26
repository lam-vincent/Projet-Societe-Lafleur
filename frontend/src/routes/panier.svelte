<script>
	import Layout from '../components/Layout.svelte';
	import FaTrashAlt from 'svelte-icons/fa/FaTrashAlt.svelte';
</script>

<Layout>
	<div class="wrapper">
		<div class="container">
			<div class="card">
				<div class="info">
					<h1 class="title">name</h1>
					<span class="price">price</span>
					<span class="amount">amount</span>
				</div>
				<button class="logo"><FaTrashAlt /></button>
			</div>
		</div>
	</div>
</Layout>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: lightgreen;
		width: 50rem;
		height: 5rem;
		border-radius: 4rem;
	}

	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 2rem;
		width: 35rem;
	}

	.title {
		font-size: 1.5rem;
	}

	.logo {
		width: 2rem;
		background-color: lightgreen;
		border-radius: 8rem;
		margin-right: 2rem;
	}
</style>
