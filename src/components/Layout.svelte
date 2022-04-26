<script>
	import '../app.css';
	import Footer from './Footer.svelte';
</script>

<div class="wrapper">
	<div class="header">
		<span>header</span>
	</div>
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

	.header {
		height: 8rem;
		background-color: #42b5d3;
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
