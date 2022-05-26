<script>
	import Layout from '../components/Layout.svelte';
	import Grid from '../components/Grid.svelte';
	import { fetchFlowers } from '../api/flowers';

	let flowers = [];
	(async () => {
		flowers = await fetchFlowers('bulbes');
	})();
</script>

<Layout>
	<Grid {flowers} />
</Layout>
