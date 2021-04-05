<template>
	<ion-row class="ion-justify-content-center ion-text-center">
		<ion-col size="4">
			<ion-img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"></ion-img>
			<h2>Login</h2>
			<form name="form" v-on:submit.prevent="onSubmit">
				<ion-item>
					<ion-label position="floating">Email or Phone</ion-label>
					<ion-input v-model="username" name="username" type="text"></ion-input>
				</ion-item>

				<ion-item>
					<ion-label position="floating">Password</ion-label>
					<ion-input v-model="password" name="password" type="password"></ion-input>
				</ion-item>

				<ion-button fill="solid" type="submit" expand="block" class="ion-margin-top">
					<ion-spinner v-show="loading" name="crescent"></ion-spinner>
					<span>Login</span>
				</ion-button>
			</form>
		</ion-col>
	</ion-row>
</template>

<script>

import {
	IonRow,
	IonCol,
	IonImg,
	IonItem,
	IonButton,
	IonLabel,
	IonInput,
	toastController
} from '@ionic/vue';

export default {
	name: 'Login',
	data() {
		return {
			username: null,
			password: null,
			loading: false,
		};
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		}
	},
	mounted() {
		if (this.loggedIn) {
			this.$router.push('/');
		}
	},
	components: {
		IonRow,
		IonCol,
		IonImg,
		IonItem,
		IonButton,
		IonLabel,
		IonInput
	},
	methods: {
		async showToast (text) {
			const toast = await toastController.create({
				message: text,
				duration: 2000,
				color: "danger",
				showCloseButton: true,
			})
			await toast.present();
		},
		onSubmit(e) {
			this.errors = []
			this.loading = true;
			if (this.username && this.password) {
				let customer = new Object();
				customer.username = this.username;
				customer.password = this.password;

				this.$store.dispatch('auth/login', customer).then(
					() => {
						this.$router.push('/');
					},
					error => {
						this.loading = false;
						this.showToast(error.response.data.data)
					}
				);
			}
			if (!this.username) {
				this.showToast('Missing username')
			}
			if (!this.password) {
				this.showToast('Missing password')
			}
			this.loading = false;
			return;
		}
	}
};
</script>
