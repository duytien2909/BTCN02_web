import store from './store.js'; 
import Person from "./Person.js"; 
 
export default {
	name: 'voM2',  // Đặt tên cho component, ví dụ là 'voM2'
	data() {
		return {
			store
		}
	},
	computed: {
		// Computed property để lấy dữ liệu người dùng hiện tại
		currentPerson() {
			return this.store.currentPerson || new Person({});
		}
	},
	template: `
		<div class="text-center">
			<h1 v-if="currentPerson.first_name">{{ currentPerson.first_name + " " + currentPerson.last_name }}</h1>
			<img v-if="currentPerson.avatar" :src="currentPerson.avatar" :alt="currentPerson.first_name" class="img-fluid rounded-circle">
			<h5 v-if="currentPerson.email">{{ currentPerson.email }}</h5>
		</div>
	`
}
