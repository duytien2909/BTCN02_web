import voH from './header.js'; 
import voN from './navigate_bar.js';
import voS from './side.js'; 
import voM from './main.js';
import voM2 from './main2.js';
import voF from './footer.js';
import store from './store.js';
import Person from "./Person.js";

export default {
	data() { 
		return {
			store, 
			currentContent: voM // Hiển thị thành phần voM mặc định
		} 
	},
	components: {
		voH, voN, voS, voM, voM2, voF
	},
	methods: {
		async load(page = 1) {
			try {
				const response = await fetch(`https://reqres.in/api/users?per_page=2&page=${page}`);
				if (!response.ok) throw new Error("Failed to fetch users");
				const dt = await response.json();
				store.persons = dt.data.map(item => new Person(item));
				this.currentContent = voM; // Hiển thị danh sách khi tải lại
			} catch (error) {
				console.error("Error loading users:", error);
			}
		},
		async select(id) {
			try {
				const response = await fetch(`https://reqres.in/api/users/${id}`);
				if (!response.ok) throw new Error("Failed to fetch user details");
				const dt = await response.json();
				store.currentPerson = new Person(dt.data);
				this.currentContent = voM2; // Chuyển sang hiển thị chi tiết người dùng
			} catch (error) {
				console.error("Error selecting user:", error);
			}
		}
	},
	template: `
		<div><h1>Ứng dụng Vue đang hoạt động!</h1></div>
		
	`
}




// <div class="row">
// 			<div class="col-12">
// 				<voH/>
// 			</div>
// 		</div>
// 		<div class="row">
// 			<div class="col-12">
// 				<voN @search="load"/>
// 			</div>
// 		</div>
// 		<div class="row my-3">
// 			<div class="col-3">
// 				<div class="card h-100">
// 					<voS/>
// 				</div>
// 			</div>
// 			<div class="col-9">
// 				<div class="card h-100">
// 					<div class="card-header fw-bold fs-5 text-info">Main</div>
// 					<div class="card-body d-flex flex-column">
// 						<component :is="currentContent" @select="select"></component>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		<div class="row">
// 			<div class="col-12">
// 				<voF/>
// 			</div>
// 		</div>