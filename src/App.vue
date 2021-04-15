<template>
	<div>
		<router-view id="main"/>
	</div>
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
