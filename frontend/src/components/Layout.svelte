<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<div class="wrapper">
	<Header />
	<div class="middle">
		<div class="page"><slot /></div>
	</div>
	<Footer />
</div>

<style>
	.wrapper {
		display: flex;
		height: 100vh;
		flex-direction: column;
	}

	.middle {
		display: flex;
		flex-grow: 1;
	}

	.page {
		background-color: #f8fafc;
		flex-grow: 1;
	}
</style>
