import ko from "knockout";
import $ from "jquery";
import SportItem from "./SportItem";
import template from "./sports-list.html";

class SportsList {
	constructor() {
		this.sportList = ko.observableArray();
		
		$.ajax({
			url: '/api/data',
			method: 'GET',
			cache: false,
			dataType: 'json',
			contentType: 'application/json'
		}).done((data) => {
			this.sportList(ko.utils.arrayMap(data, (item) => {
				return new SportItem(item);
			}));
		});
	}
}

export default {
	viewModel: SportsList,
	template: template
}