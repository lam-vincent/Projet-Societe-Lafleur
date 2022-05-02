<script lang="ts">
	import Badge from '@smui-extra/badge';
	import FaShoppingBasket from 'svelte-icons/fa/FaShoppingBasket.svelte';

	import IconButton, { Icon } from '@smui/icon-button';
</script>

<IconButton
	style="position: relative; 
    background-color: lightgreen;
    border-radius: 2rem;"
>
	<FaShoppingBasket />
	<Badge aria-label="unread content count">2</Badge>
</IconButton>
