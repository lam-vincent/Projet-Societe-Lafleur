<script>
	import Layout from '../components/Layout.svelte';
	import Date from '../components/Date.svelte';
	import Text from '../components/Text.svelte';
	import Email from '../components/Email.svelte';
	import Radio from '../components/Radio.svelte';
	import Select from '../components/Select.svelte';
	import Textarea from '../components/Textarea.svelte';
	import Button from '../components/Button.svelte';
</script>

<Layout>
	<h1>Demande de contact</h1>
	<Date label="Date du contact" />
	<Text label="Nom" value="Entrez votre nom" />
	<Text label="Prénom" value="Entrez votre prénom" />
	<Email label="Email" value="monmail@monsite.org" />
	<Text label="Sujet" value="Entrez le sujet de votre mail" />
	<Textarea label="Contenu" helper="Tapez ici votre mail" />

	<Button label="Envoyer" />
</Layout>
