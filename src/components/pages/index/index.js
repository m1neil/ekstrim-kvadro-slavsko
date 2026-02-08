import './index.scss'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	let timeout
	document.addEventListener('formSent', e => {
		const currentForm = e.detail.form
		const formId = currentForm.getAttribute('id')
		if (formId === 'join-member') {
			const infoSuccess = currentForm.parentElement.nextElementSibling
			if (!infoSuccess) return
			infoSuccess.classList.add('--show')
			currentForm.parentElement.classList.add('--hide')
		} else {
			clearTimeout(timeout)
			currentForm.classList.add('--sended')
			timeout = setTimeout(() => {
				currentForm.classList.remove('--sended')
			}, 5000)
		}
	})
}
