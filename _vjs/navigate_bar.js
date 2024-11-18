export default {  
	data() { 
		return {
			search_text: ""
		}
	},
	methods: {
		searchHandler() {
			this.$emit("search", parseInt(this.search_text));
		}
	},
	template: `
	<nav class="navbar navbar-light bg-light">
		<div class="container-fluid"> 
			<a class="navbar-brand fw-bold">Home</a>
			<form class="d-flex">
				<input v-model="search_text" class="form-control me-2" type="search" placeholder="Search by page number" aria-label="Search">
				<button class="btn btn-outline-success" @click="searchHandler">Search</button>
			</form>
		</div>
	</nav>
	`
}