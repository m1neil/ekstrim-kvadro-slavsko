/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Підключення базових стилів
import './slider.scss'
// Повний набір стилів з node_modules
// import 'swiper/css/bundle';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.routes__slider')) {
		// <- Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.routes__slider', {
			// <- Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 1.05,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			scrollbar: {
				el: '.routes .swiper-scrollbar',
				hide: false,
				draggable: true,
			},

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.routes .swiper-button-prev',
				nextEl: '.routes .swiper-button-next',
				addIcons: false,
			},
			// Брейкпоінти
			breakpoints: {
				575: {
					slidesPerView: 1.7,
				},
				768: {
					slidesPerView: 2.1,
				},
				992: {
					slidesPerView: 2.7,
				},
				1140: {
					slidesPerView: 3.2,
				},
			},
			// Події
			on: {},
		})
	}
}
document.querySelector('[data-fls-slider]')
	? window.addEventListener('load', initSliders)
	: null
