<template>
	<ion-row class="ion-justify-content-center ion-text-center">
		<ion-col size="8">

			<ion-button href="/new_task" shape="round" v-on:click="createTask">New task</ion-button>

			<ion-row>
				<ion-col v-for="task in tasks" size="4">
					<ion-card style="background-color: {{card.color}}">
						<ion-card-header>
							<ion-card-title>{{task.Name}}</ion-card-title>
						</ion-card-header>

						<ion-card-content>
							{{task.Description}}
						</ion-card-content>
					</ion-card>
				</ion-col>
			</ion-row>

		</ion-col>
	</ion-row>
</template>

<script>

import TaskService from '../services/task.service';
import {
	IonCard,
	IonCardContent,
	IonCardSubtitle,
	IonCardTitle,
	IonIcon,
	IonItem,
	IonLabel,
	IonListHeader,
	IonList,
	modalController
} from '@ionic/vue';

export default {
	name: 'Task',
	components: {
		IonCard,
		IonCardContent,
		IonCardSubtitle,
		IonCardTitle,
		IonIcon,
		IonItem,
		IonLabel,
		IonListHeader,
		IonList,
	},
	data() {
		return {
			tasks: '',
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
		TaskService.getTasks().then(
			response => {
				this.tasks = response.data.data;
			},
			error => {
				this.content =
					(error.response && error.response.data) ||
					error.message ||
					error.toString();
			}
		);
	},
	methods: {
	}
};
</script>
