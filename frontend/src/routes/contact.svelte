<script>
	import Layout from '../components/Layout.svelte';
	import Date from '../components/Date.svelte';
	import Text from '../components/Text.svelte';
	import Email from '../components/Email.svelte';
	import Radio from '../components/Radio.svelte';
	import Select from '../components/Select.svelte';
	import Textarea from '../components/Textarea.svelte';
	import Button from '../components/Button.svelte';

	share = async (email, Name, Surname, Date, Body, Subject) => {
	  const args = {
	    Destination: {
	      ToAddresses: societelafleur5@gmail.com
	    },
	    Message: {
	      Body: {
		Html: {
		  Charset: 'UTF-8',
		  Data: `
		      <h1>Mail envoyer par [Name] [Surname] le [Date]</h1>
		      [Body]
		      (Contact [email])
		      `
		}
	      },
	      Subject: {
		Charset: 'UTF-8',
		Data: `[Subject]`
	      }
	    },
	    Source: 'picstream@ses.aydrian.me'
	  }

	  const request = new AwsRequest.Builder()
	    .withService('ses')
	    .withAction('SendEmail')
	    .withRegion('us-east-1')
	    .withArgs(args)
	    .build()

	  return this.aws.execute(request)
	}
	function submit(){
		share(email, Name, Surname, Date, Body, Subject);
	}
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
