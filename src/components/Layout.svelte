<script>
	import '../app.css';
</script>

<div class="wrapper">
	<div class="header">
		<span>header</span>
	</div>
	<div class="middle">
		<div class="menu"><span>menu</span></div>
		<div class="page"><slot /></div>
	</div>
	<div class="footer"><span>footer</span></div>
</div>

<style>
	.wrapper {
		display: flex;
		height: 100vh;
		flex-direction: column;
	}

	.header {
		height: 8rem;
		background-color: blue;
	}

	.middle {
		display: flex;
		flex-grow: 1;
	}

	.menu {
		width: 20rem;
		background-color: green;
	}

	.page {
		background-color: red;
		flex-grow: 1;
	}

	.footer {
		height: 8rem;
		background-color: yellow;
	}
</style>
