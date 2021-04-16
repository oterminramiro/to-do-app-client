<template>
	<ion-app>
		<Nav />
		<ion-content id="main" >
				<ion-row class="ion-justify-content-center ion-text-center">
					<ion-col size="10">
						<ion-button href="/new_task" shape="round">New task</ion-button>
						<ion-row>
							<ion-col v-for="task in tasks" size="12" size-sm="12" size-md="6" size-lg="4" size-xl="4">
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
		</ion-content>
	</ion-app>
</template>

<script>

	import Nav from './Nav'
	import TaskService from '../services/task.service';
	import {
		IonApp,
		IonRow,
		IonCol,
		IonButton,
		IonCard,
		IonCardContent,
		IonCardSubtitle,
		IonCardTitle,
		IonCardHeader,
		IonIcon,
		IonItem,
		IonLabel,
		IonListHeader,
		IonList,
		IonContent,
		modalController
	} from '@ionic/vue';

	export default {
		name: 'Task',
		components: {
			IonApp,
			IonRow,
			IonCol,
			IonButton,
			IonCard,
			IonCardContent,
			IonCardSubtitle,
			IonCardTitle,
			IonCardHeader,
			IonIcon,
			IonItem,
			IonLabel,
			IonListHeader,
			IonList,
			IonContent,
			Nav,
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
