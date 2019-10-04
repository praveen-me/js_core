const vue = new Vue({
	el: "#vue-app",
	data: {
		name: "Praveen",
		portfolioUrl: "https://praveen-me.github.io",
		number: 20,
		x: 0,
		y: 0
	},
	methods: {
		goodMorning(name) {
			return `Namaste ${name}.`
		},
		add() {
			return this.number++;
		},
		subtract() {
			return this.number--;
		},
		updateXY(event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	}
});


function howManyDalmations(number) {

	var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];

	var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number === 101 ? dogs[3] : dogs[2]))

	return respond
}