import Person from "./Person.js";
const { reactive } = Vue;

export default reactive ({
	persons: [], 
	currentPerson: null
}); 