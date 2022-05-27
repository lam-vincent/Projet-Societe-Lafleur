<script>
	import Layout from '../components/Layout.svelte';
	import Text from '../components/Text.svelte';
	import Button from '../components/Button.svelte';
</script>

<Layout>
	<div class="wrapper">
		<div class="card">
			<h1 class="title">firstname</h1>
			<span>lastname</span>
			<span>day of birth</span>
		</div>
	</div>
</Layout>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: lightgreen;
		width: 20rem;
		height: 25rem;
		border-radius: 1rem;
	}

	.title {
		font-size: 1.5rem;
	}
</style>
