<template>
	<ion-grid>
		<ion-row class="ion-align-items-center">
			<ion-col class="ion-align-self-center ion-text-center">
				<ion-text color="dark">
					<h1>404! Not found</h1>
				</ion-text>
				<ion-button href="/" color="dark" shape="round">Go home</ion-button>
			</ion-col>
		</ion-row>
	</ion-grid>

</template>

<style>
	ion-grid{
		height: 100%;
	}
	ion-row{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>

<script>

import {
	IonButton,IonCol, IonGrid, IonRow
} from '@ionic/vue';

export default {
	name: 'NotFound',
	data() {
		return {
			content: ''
		};
	},
	components: {
		IonButton, IonCol, IonGrid, IonRow
	}
};
</script>
