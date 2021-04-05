<template>
	<ion-page>
		<ion-content class="ion-padding">
			<router-view />
		</ion-content>
	</ion-page>
</template>

<script>
	import {
		IonContent,
		IonPage
	} from '@ionic/vue';
	import { defineComponent } from 'vue';

	export default defineComponent({
		components: {
			IonContent,
			IonPage
		}
	});
</script>
