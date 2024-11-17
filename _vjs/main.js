import store from './store.js';
import Person from "./Person.js"; 
 
export default {
	name: 'voM',
	data() {
		return {
			persons: [],
			store,
			perPage: 2,           // Số lượng người dùng trên mỗi trang
			currentPage: 1         // Trang hiện tại
		}
	},
	methods: {
		async getPersons(page = 1) {
			try {
				// Gọi API với tham số `page` và `perPage`
				const response = await fetch(`https://reqres.in/api/users?per_page=${this.perPage}&page=${page}`);
				const dt = await response.json();
				this.store.persons = dt.data.map(item => new Person(item));
			} catch (error) {
				console.log(error);
			}
		},
		selectPage(page) {
			this.currentPage = page;    // Cập nhật trang hiện tại
			this.getPersons(page);      // Tải dữ liệu người dùng theo trang
		}
	},
	mounted() {
		// Tải dữ liệu khi component được mount
		this.getPersons(this.currentPage);
	},
	template: `
		<table class="table table-hover">
			<thead class="table-primary">
				<tr>
					<th scope="col">ID</th>
					<th scope="col">First</th>
					<th scope="col">Last</th>
					<th scope="col">Email</th>
					<th scope="col">Avatar</th>
				</tr>
			</thead>
			<tbody id="content">
				<tr v-for="p in store.persons" :key="p.id" @click="$emit('select', p.id)">
					<th scope="row">{{ p.id }}</th>
					<td>{{ p.first_name }}</td>
					<td>{{ p.last_name }}</td>
					<td>{{ p.email }}</td>
					<td><img :src="p.avatar" alt="avatar" width="50"></td>
				</tr>
			</tbody>
		</table>

		<div class="mt-3">
			<nav aria-label="Page navigation">
				<ul class="pagination">
					<li 
						v-for="page in 6" 
						:key="page" 
						:class="['page-item', { active: page === currentPage }]"
					>
						<a 
							class="page-link" 
							href="#" 
							@click.prevent="selectPage(page)"
						>{{ page }}</a>
					</li>
				</ul>
			</nav>
		</div>
	`
}
