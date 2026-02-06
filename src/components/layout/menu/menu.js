// Підключення функціоналу "Чортоги Фрілансера"
import {
	addTouchAttr,
	bodyLockStatus,
	bodyLockToggle,
	FLS,
} from '@js/common/functions.js'

import './menu.scss'

export function menuInit() {
	document.addEventListener('click', function (e) {
		if (bodyLockStatus && e.target.closest('[data-burger]')) {
			bodyLockToggle()
			document.documentElement.toggleAttribute('data-fls-menu-open')
		}
	})
}

document.querySelector('[data-burger]')
	? window.addEventListener('load', menuInit)
	: null
