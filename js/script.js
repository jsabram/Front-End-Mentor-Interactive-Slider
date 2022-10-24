const slider = document.querySelector('.price-slider');
const viewsAmount = document.querySelector('.views-amount');
const priceAmount = document.querySelector('.price-amount');
const checkbox = document.querySelector('.checkbox');
const views = [10, 50, 100, 500, 1];
const prices = [8, 12, 16, 24, 36];

const viewsUpdate = () => {
	viewsAmount.textContent = `${views[slider.value]}k`;

	if (slider.value > 3) {
		viewsAmount.textContent = `${views[slider.value]}m`;
	}
};

const sliderUpdate = () => {
	slider.style.background = `linear-gradient(to right, 
        hsl(174deg, 77%, 80%) 0%, 
        hsl(174deg, 77%, 80%) ${slider.value * 25}%, 
        hsl(223deg, 50%, 87%) 0%, 
        hsl(223deg, 50%, 87%) 100%)`;
};

const valueUpdate = () => {
	if (checkbox.checked) {
		priceAmount.textContent = `$${prices[slider.value] * 0.75}.00`;
		viewsUpdate();
		sliderUpdate();
	} else {
		priceAmount.textContent = `$${prices[slider.value]}.00`;
		viewsUpdate();
		sliderUpdate();
	}
};

slider.addEventListener('input', valueUpdate);
checkbox.addEventListener('click', valueUpdate);
