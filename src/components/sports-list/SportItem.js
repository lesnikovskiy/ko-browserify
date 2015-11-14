import ko from "knockout";

class SportItem {
	constructor(params) {
		this.weight = ko.observable(params.weight);
		this.date = ko.observable(params.date);
		this.training = ko.observable(params.training);
		this.walking = ko.observable(params.walking);
	}
}

export default SportItem;