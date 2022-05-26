<script lang="ts">
	import FaTrashAlt from 'svelte-icons/fa/FaTrashAlt.svelte';
</script>

<div class="card">
	<div class="item">
		<span class="name">name</span>
		<span>price</span>
		<span>amount</span>
		<FaTrashAlt />
	</div>
</div>

<style>
	.card {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: lightgreen;
	}
</style>
