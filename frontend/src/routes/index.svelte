<script>
	import Layout from '../components/Layout.svelte';
</script>

<Layout>
	<div class="wrapper">
		<h1>"Dites-le avec Lafleur"</h1>

		<img
			src="https://www.thoughtco.com/thmb/U3uVJMsgzLd00DbkIicnnIYM_kM=/1414x1414/smart/filters:no_upscale()/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg"
			alt="Lotus Flower"
		/>

		<span>Appelez notre service commercial au 03 22 84 65 74 pour recevoir un bon de commande</span>
	</div>
</Layout>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	img {
		display: block;
		width: 500px;
		height: auto;
		margin-left: auto;
		margin-right: auto;
	}

	span {
		text-align: center;
		padding: 2rem;
	}
</style>
