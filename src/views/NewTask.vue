<template>
	<ion-row class="ion-justify-content-center ion-text-center">
		<ion-col size="4">
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
					<ion-input v-model="color" name="color" type="text"></ion-input>
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
			</form>
		</ion-col>
	</ion-row>
</template>

<script>

	import TaskService from '../services/task.service';
	import {
		IonRow,
		IonCol,
		IonImg,
		IonItem,
		IonButton,
		IonLabel,
		IonInput,
		IonCheckbox,
		IonDatetime,
		toastController
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
			IonRow,
			IonCol,
			IonImg,
			IonItem,
			IonButton,
			IonLabel,
			IonCheckbox,
			IonDatetime,
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
				this.loading = true;

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
						// console.log(error)
						this.showToast(error.response.data)
					}
				);
				this.loading = false;
			}
		}
	};
</script>
