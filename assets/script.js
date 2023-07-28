const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function init() {
	let index = 0;
	this.index = index;
	click_arrow()
	generate_dots()
	click_dots()

}

init()

function click_arrow() {
	const arrow_left = document.querySelector('#arrow_left')
	const arrow_right = document.querySelector('#arrow_right')

	arrow_left.addEventListener('click', () => update_index(-1))
	arrow_right.addEventListener('click', () => update_index(1))
}

function update_index(value) {
	index += value
	if (index < 0) {
		index = slides.length - 1
	}
	if (index > slides.length - 1) {
		index = 0
	}
	update_slide()
}

function update_slide() {
	const banner_img = document.querySelector('.banner-img')
	const banner_text = document.querySelector('.banner-text')

	banner_img.src = `./assets/images/slideshow/${slides[index].image}`;
	banner_text.innerHTML = slides[index].tagLine;

}

function generate_dots() {
	const div_dots = document.querySelector('.dots')
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add('dot')
		dot.setAttribute('data-number', i)
		div_dots.appendChild(dot);
	}
}



function click_dots() {
	const dot = document.querySelectorAll('.dot')

	dot.forEach(element => {
		element.addEventListener('click', (e) => {
			let valueClicked = e.target.dataset.number;
			go_to_slide(valueClicked)
		})
	});
}

function go_to_slide(number) {
	const banner_img = document.querySelector('.banner-img')
	const banner_text = document.querySelector('.banner-text')

	banner_img.src = `./assets/images/slideshow/${slides[number].image}`;
	banner_text.innerHTML = slides[number].tagLine;
}