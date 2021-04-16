<template>
	<ion-toolbar>
		<ion-buttons slot="start">
			<ion-menu-button
				menuId="first"
				autoHide="false"
			></ion-menu-button>
		</ion-buttons>
	</ion-toolbar>

	<ion-menu menuId="first" content-id="main" type="overlay">
		<ion-header>
			<ion-toolbar color="primary">
				<ion-title>Menu</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<ion-list>
				<ion-item name="home" slot="start" href="/">
					<ion-label>
						Home
					</ion-label>
				</ion-item>
				<ion-item name="logout" slot="start" href="/logout">
					<ion-label>
						Logout
					</ion-label>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-menu>
</template>

<script>
	import {
		IonToolbar,
		IonButtons,
		IonMenuButton,
		IonMenu,
		IonHeader,
		IonTitle,
		IonList,
		IonItem,
		IonLabel,
		IonContent,
		menuController
	} from '@ionic/vue';
	import { defineComponent } from 'vue';

	export default defineComponent({
		components: {
			IonToolbar,
			IonButtons,
			IonMenuButton,
			IonMenu,
			IonHeader,
			IonTitle,
			IonList,
			IonItem,
			IonLabel,
			IonContent,
		},
		methods: {
			openFirst() {
				menuController.enable(true, 'first');
				menuController.open('first');
			},
		}
	});
</script>
