<script lang="ts">
	import Badge from '@smui-extra/badge';
	import FaShoppingBasket from 'svelte-icons/fa/FaShoppingBasket.svelte';

	import IconButton from '@smui/icon-button';
</script>

<IconButton
	style="position: relative; 
    background-color: lightgreen;
    border-radius: 2rem;"
	href="http://localhost:3000/panier"
>
	<FaShoppingBasket />
	<Badge aria-label="unread content count">2</Badge>
</IconButton>
