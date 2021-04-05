<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Home</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content class="ion-padding">
			<router-view />
		</ion-content>
	</ion-page>
</template>

<script>
	import {
		IonContent,
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar
	} from '@ionic/vue';
	import { defineComponent } from 'vue';

	export default defineComponent({
		components: {
			IonContent,
			IonHeader,
			IonPage,
			IonTitle,
			IonToolbar
		}
	});
</script>
