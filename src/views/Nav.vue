<template>
	<ion-toolbar>
		<ion-buttons slot="start" :class="pageTitle != 'Home' ? 'w-100' : ''" >
			<ion-back-button></ion-back-button>
			<ion-menu-button
				menu="main-menu"
				autoHide="false"
				:class="pageTitle != 'Home' ? 'menu-right' : ''"
			></ion-menu-button>
		</ion-buttons>
	</ion-toolbar>

	<ion-menu menuId="main-menu" content-id="main" type="overlay">
		<ion-header>
			<ion-toolbar color="primary">
				<ion-title>Start Menu</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<ion-list>
				<ion-item name="mail" slot="start">Menu Item</ion-item>
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
			IonContent,
		},
		methods: {
			openFirst() {
				menuController.enable(true, 'first');
				menuController.open('first');
			},
			openEnd() {
				menuController.open('end');
			},
			openCustom() {
				menuController.enable(true, 'custom');
				menuController.open('custom');
			}
		}
	});
</script>
