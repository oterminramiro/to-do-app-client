<template>
	<ion-row class="ion-justify-content-center ion-text-center">
		<ion-col size="4">
			<ion-img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"></ion-img>
			<h2>Register</h2>
			<form name="form" v-on:submit.prevent="onSubmit">
				<ion-item>
					<ion-label position="floating">Phone</ion-label>
					<ion-input v-model="phone" name="phone" type="text"></ion-input>
				</ion-item>

				<ion-item>
					<ion-label position="floating">Email</ion-label>
					<ion-input v-model="email" name="email" type="text"></ion-input>
				</ion-item>

				<ion-item>
					<ion-label position="floating">Name</ion-label>
					<ion-input v-model="name" name="name" type="text"></ion-input>
				</ion-item>

				<ion-item>
					<ion-label position="floating">Lastname</ion-label>
					<ion-input v-model="lastname" name="lastname" type="text"></ion-input>
				</ion-item>

				<ion-item>
					<ion-label position="floating">Password</ion-label>
					<ion-input v-model="password" name="password" type="password"></ion-input>
				</ion-item>

				<ion-button fill="solid" type="submit" expand="block" class="ion-margin-top">
					<ion-spinner v-show="loading" name="crescent"></ion-spinner>
					<span>Register</span>
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
	name: 'Register',
	data() {
		return {
			phone: '',
			email: '',
			name: '',
			lastname: '',
			password: '',
			submitted: false,
			successful: false,
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
			// this.$router.push('/profile');
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
		onSubmit() {
			this.submitted = true;
			this.loading = true;

			let user = new Object();
			user.phone = this.phone;
			user.email = this.email;
			user.name = this.name;
			user.lastname = this.lastname;
			user.password = this.password;

			this.$store.dispatch('auth/register', user).then(
				data => {
					this.loading = false;
					this.successful = true;
					this.$router.push('/login');
				},
				error => {
					this.showToast(error.response.data.data)
					this.successful = false;
				}
			);
			this.loading = false;
		}
	}
};
</script>
