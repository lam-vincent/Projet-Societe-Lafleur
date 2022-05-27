<script>
	import Layout from '../components/Layout.svelte';
	import Text from '../components/Text.svelte';
	import Button from '../components/Button.svelte';
	import Email from '../components/Email.svelte';
	import Date from '../components/Date.svelte';

	let current = '1';

	function handleClick() {
		console.log(current);
		let current = '2';
		console.log(current);
	}
</script>

<Layout>
	<div class="wrapper">
		<form data-multi-step>
			<div class="card" class:selected={current === '1'}>
				<h1 class="title">Création de compte</h1>
				<Email label="Email" />
				<Text label="Mot de passe" value="Entrez votre mot de passe" />
				<Text label="Confirmer le mot de passe" value="Réécrire votre mot de passe" />
				<Button label="Etape suivante" on:click|once={handleClick} />
				<button on:click|once={handleClick}>appuie</button>
			</div>
			<div class="card" class:selected={current === '2'}>
				<h1 class="title">Informations personnelles</h1>
				<Text label="Prénom" value="Entrez votre prénom" />
				<Text label="Nom" value="Entrez votre nom de famille" />
				<Text label="Nom d'utilisateur" value="Entrez votre nom d'utilisateur" />
				<Date label="Date de naissance" />
				<Button label="Envoyer" />
			</div>
		</form>
	</div>
</Layout>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.card {
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: lightgreen;
		width: 20rem;
		height: 30rem;
		border-radius: 1rem;
	}

	.title {
		font-size: 1.5rem;
	}

	.selected {
		display: flex;
	}
</style>
