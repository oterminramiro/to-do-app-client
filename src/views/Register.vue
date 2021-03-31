<template>
	<ion-card>
		<ion-card-header>
			<img
				id="profile-img"
				src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
				class="profile-img-card"
			/>
			<ion-card-title>Register</ion-card-title>
		</ion-card-header>
		<ion-card-content>
			<form name="form" v-on:submit.prevent="onSubmit">
				<div class="form-group">
					<label for="email">Email</label>
					<input
					v-model="email"
					type="text"
					class="form-control"
					name="email"
					/>
				</div>
				<div class="form-group">
					<label for="phone">Phone</label>
					<input
					v-model="phone"
					type="text"
					class="form-control"
					name="phone"
					/>
				</div>
				<div class="form-group">
					<label for="name">name</label>
					<input
					v-model="name"
					type="text"
					class="form-control"
					name="name"
					/>
				</div>
				<div class="form-group">
					<label for="lastname">lastname</label>
					<input
					v-model="lastname"
					type="text"
					class="form-control"
					name="lastname"
					/>
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input
					v-model="password"
					type="password"
					class="form-control"
					name="password"
					/>
				</div>
				<div class="form-group">
					<ion-button fill="solid" type="submit">
						<span v-show="loading" class="spinner-border spinner-border-sm"></span>
						<span>Register</span>
					</ion-button>
				</div>
				<div class="form-group">
					<div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
				</div>
			</form>
		</ion-card-content>
	</ion-card>
</template>

<script>
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
			message: ''
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
	methods: {
		onSubmit() {
			this.message = '';
			this.submitted = true;

			let user = new Object();
			user.phone = this.phone;
			user.email = this.email;
			user.name = this.name;
			user.lastname = this.lastname;
			user.password = this.password;

			this.$store.dispatch('auth/register', user).then(
				data => {
					this.successful = true;
					this.$router.push('/login');
				},
				error => {
					this.message =
					(error.response && error.response.data) ||
					error.message ||
					error.toString();
					this.successful = false;
				}
			);
		}
	}
};
</script>
