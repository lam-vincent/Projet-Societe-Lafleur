<script>
	import IconButton from '@smui/icon-button';
	import FaUserCircle from 'svelte-icons/fa/FaUserCircle.svelte';
	import FaSignOutAlt from 'svelte-icons/fa/FaSignOutAlt.svelte';
	import FaSignInAlt from 'svelte-icons/fa/FaSignInAlt.svelte';
	let clicked = 0;
</script>

<div class="user">
	<span class="username">déconnecté</span>
	<div class="user-logo">
		<IconButton class="material-icons" href="http://localhost:3000/profil"
			><FaUserCircle /></IconButton
		>
	</div>
	<div class="user-logo">
		<IconButton class="material-icons" href="http://localhost:3000/sign-in"
			><FaSignInAlt /></IconButton
		>
	</div>
</div>

<!-- 
    
<div class="user">
    <span class="username">Vincent LAM</span>
    <div class="user-logo">
        <IconButton class="material-icons" on:click={() => clicked++}><FaUserCircle /></IconButton>
    </div>
    <div class="user-logo">
        <IconButton class="material-icons" on:click={() => clicked++}><FaSignOutAlt /></IconButton>
    </div>
</div>

 -->
<style>
	.user {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 16rem;
		height: 4rem;
		background-color: lightgreen;
		border-radius: 4rem;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin: 2rem;
	}

	.username {
		font-family: Arial, Helvetica, sans-serif;
	}

	.user-logo {
		display: flex;
	}
</style>
