<template>
	<ion-card>
		<ion-card-header>
			<img
				id="profile-img"
				src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
				class="profile-img-card"
			/>
			<ion-card-title>Login</ion-card-title>
		</ion-card-header>
		<ion-card-content>
			<form name="form" v-on:submit.prevent="onSubmit">
				<div class="form-group">
					<label for="username">Email or Phone</label>
					<input
					v-model="username"
					type="text"
					class="form-control"
					name="username"
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
						<span>Login</span>
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
	name: 'Login',
	data() {
		return {
			username: null,
			password: null,
			loading: false,
			message: '',
			errors: []
		};
	},
	methods: {
		onSubmit(e) {
			this.loading = true;
			if (this.username && this.password) {

				let customer = new Object();
				customer.username = this.username;
				customer.password = this.password;

				this.$store.dispatch('auth/login', customer).then(
					() => {
						this.$router.push('/profile');
					},
					error => {
						this.loading = false;
						this.message =
						(error.response && error.response.data) ||
						error.message ||
						error.toString();
					}
				);
			}
			if (!this.username) {
				this.errors.push('El username es obligatorio.');
			}
			if (!this.password) {
				this.errors.push('La password es obligatoria.');
			}
			this.loading = false;
			return;
		}
	}
};
</script>
