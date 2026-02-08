import './index.scss'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	document.addEventListener('formSent', e => {
		const currentForm = e.detail.form
		const formId = currentForm.getAttribute('id')
		if (formId !== 'join-member') return

		const infoSuccess = currentForm.parentElement.nextElementSibling
		if (!infoSuccess) return
		infoSuccess.classList.add('--show')
		currentForm.parentElement.classList.add('--hide')
	})
}
