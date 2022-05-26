<script>
	import Layout from '../components/Layout.svelte';
	import Grid from '../components/Grid.svelte';
	import { fetchFlowers } from '../api/bulbes';

	fetchFlowers();
</script>

<Layout>
	<Grid />
</Layout>
