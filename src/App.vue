<template>
	<div class="container">
		<router-view />
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import {
		IonIcon,
		IonLabel,
		IonPage,
		IonTabBar,
		IonTabButton,
		IonTabs,
		IonApp,
		IonRouterOutlet
	} from '@ionic/vue';
	import { calendar, personCircle } from 'ionicons/icons';

	export default defineComponent({
		name: 'App',
		components: { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs, IonApp, IonRouterOutlet },
		setup() {
			const beforeTabChange = () => {
				// do something before tab change
			}
			const afterTabChange = () => {
				// do something after tab change
			}
			return {
				calendar,
				personCircle,
				beforeTabChange,
				afterTabChange
			}
		}
	});
</script>
