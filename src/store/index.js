import { createStore } from "vuex"
import { auth } from './auth.module';

const store = createStore({
	modules: {
		auth
	},
	state:{
		name: "Vue"
	}
})

export default store
