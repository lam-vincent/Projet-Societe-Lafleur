<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<div class="wrapper">
	<Header />
	<div class="middle">
		<div class="menu"><span>menu</span></div>
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

	.menu {
		width: 20rem;
		background-color: #e5e7eb;
	}

	.page {
		background-color: #f8fafc;
		flex-grow: 1;
	}
</style>
