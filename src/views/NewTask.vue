<template>
	<ion-app>
		<Nav />
		<ion-content id="main" >
			<ion-row class="ion-justify-content-center ion-text-center">
				<ion-col size="10">
					<h2>New Task</h2>
					<form name="form" v-on:submit.prevent="onSubmit">
						<ion-item>
							<ion-label position="floating">Name</ion-label>
							<ion-input v-model="name" name="name" type="text"></ion-input>
						</ion-item>

						<ion-item>
							<ion-label position="floating">Description</ion-label>
							<ion-input v-model="description" name="description" type="text"></ion-input>
						</ion-item>

						<ion-item>
							<ion-label position="floating">Priority</ion-label>
							<ion-input v-model="priority" name="priority" type="number"></ion-input>
						</ion-item>

						<ion-item>
							<ion-label position="floating">Color</ion-label>
							<ion-select v-model="color" name="color">
						        <ion-select-option value="#3880ff">Primary</ion-select-option>
						        <ion-select-option value="#3dc2ff">Secondary</ion-select-option>
						        <ion-select-option value="#2dd36f">Success</ion-select-option>
						        <ion-select-option value="#ffc409">Warning</ion-select-option>
						        <ion-select-option value="#eb445a">Danger</ion-select-option>
						        <ion-select-option value="#222428">Dark</ion-select-option>
						        <ion-select-option value="#92949c">Medium</ion-select-option>
						        <ion-select-option value="#f4f5f8">Light</ion-select-option>
						    </ion-select>
						</ion-item>

						<ion-item>
							<ion-label>Pinned</ion-label>
							<ion-checkbox v-model="pinned" name="pinned"></ion-checkbox>
						</ion-item>

						<ion-item>
							<ion-label position="floating">Date</ion-label>
							<ion-datetime v-model="date" name="date" display-format="MMM DD, YYYY HH:mm"></ion-datetime>
						</ion-item>

						<ion-button fill="solid" type="submit" expand="block" class="ion-margin-top">
							<ion-spinner v-show="loading" name="crescent"></ion-spinner>
							<span>Create</span>
						</ion-button>

						<ion-button fill="solid" href="/" expand="block" class="ion-margin-top">
							<span>Go back</span>
						</ion-button>
					</form>
				</ion-col>
			</ion-row>
		</ion-content>
	</ion-app>
</template>

<script>
	import Nav from './Nav'
	import TaskService from '../services/task.service';
	import {
		IonApp,
		IonContent,
		IonRow,
		IonCol,
		IonImg,
		IonItem,
		IonButton,
		IonLabel,
		IonInput,
		IonCheckbox,
		IonDatetime,
		IonSelect,
		IonSelectOption,
		toastController,
	} from '@ionic/vue';

	export default {
		name: 'NewTask',
		data() {
			return {
				name: '',
				description: '',
				priority: 1,
				color: '',
				pinned: 0,
				date: '',
				loading: false,
			};
		},
		computed: {
			loggedIn() {
				return this.$store.state.auth.status.loggedIn;
			}
		},
		mounted() {
			if (!this.loggedIn) {
				this.$router.push('/login');
			}
		},
		components: {
			IonApp,
			IonContent,
			IonRow,
			IonCol,
			IonImg,
			IonItem,
			IonButton,
			IonLabel,
			IonCheckbox,
			IonDatetime,
			IonInput,
			IonSelect,
			IonSelectOption,
			Nav,
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
				this.loading = true;
				console.log(this.color)
				let task = new Object();
				if(this.name) task.Name = this.name;
				if(this.description) task.Description = this.description;
				if(this.priority) task.Priority = parseInt(this.priority,10);
				if(this.color) task.Color = this.color;
				if(this.pinned) task.Pinned = this.pinned;
				if(this.date) task.Date = this.date;

				TaskService.createTask(task).then(
					response => {
						// console.log(response.data.data)
						this.$router.push('/');
					},
					error => {
						Object.values(error.response.data).forEach(val => {
							this.showToast(val)
						});

					}
				);
				this.loading = false;
			}
		}
	};
</script>
