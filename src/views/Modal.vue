<template>
	<ion-header>
		<ion-toolbar>
			<ion-title>HOla</ion-title>
		</ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
		Contenido
	</ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';

export default ({
	name: 'Modal',
	props: {
		title: { type: String, default: 'Super Modal' },
	},
	data() {
		return {
			content: 'Content',
		}
	},
	components: {
		IonContent,
		IonHeader,
		IonTitle,
		IonToolbar
	}
});
</script>
