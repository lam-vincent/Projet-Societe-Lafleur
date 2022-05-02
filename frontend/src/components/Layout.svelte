<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Menu from './Menu.svelte';
</script>

<div class="wrapper">
	<Header />
	<div class="middle">
		<div class="menu"><Menu /></div>
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
	}

	.page {
		background-color: #f8fafc;
		flex-grow: 1;
	}
</style>
