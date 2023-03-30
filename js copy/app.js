window.onload = function () {
	let emailState = false;
	//get email modal by class
	let emailModal = document.getElementsByClassName("email-modal")[0];
	// get button by class
	let closeButton = document.getElementsByClassName(
		"email-modal__close-btn"
	)[0];

	let emailInput = document.getElementsByClassName("email-modal__input")[0];

	let emailButton = document.getElementsByClassName("email-modal__button")[0];

	let thankContainer = document.getElementsByClassName("email-thank")[0];

	let declineOffer = document.getElementsByClassName(
		"email-modal__decline-offer"
	)[0];
	//regex to verify email is valid
	function emailIsValid(email) {
		return /\S+@\S+\.\S+/.test(email);
	}
	//shows modal
	let showModal = () => {
		if (emailState == false) {
			emailModal.classList.add("email-modal--visible");
			emailState = true;
		}
	};
	//closes modal
	let closeModal = () => {
		emailModal.classList.remove("email-modal--visible");
	};
	//adds errors around email input
	let addErrors = () => {
		document
			.getElementsByClassName("email-modal__form-group")[0]
			.classList.add("email-modal__form-group--error");
		document
			.getElementsByClassName("email-modal__error-message")[0]
			.classList.add("email-modal__error-message--active");
	};
	// removes errors
	let removeErrors = () => {
		document
			.getElementsByClassName("email-modal__form-group")[0]
			.classList.remove("email-modal__form-group--error");
		document
			.getElementsByClassName("email-modal__error-message")[0]
			.classList.remove("email-modal__error-message--active");
	};
	// this adds the yellow thank you modal it also
	// sets a delay for the message
	let showThankMessage = () => {
		thankContainer.classList.add("email-thank--success");
		setTimeout(() => {
			closeModal();
		}, 3000);
	};
	//here it listens for a click to remove the red around email input
	emailInput.addEventListener("click", () => {
		removeErrors();
	});
	// event listener for click and listens for the value and
	// sends it back if not it adds error function
	emailButton.addEventListener("click", () => {
		if (emailIsValid(emailInput.value)) {
			showThankMessage();
		} else {
			addErrors();
		}
	});
	//it closes modal if they dont want to submit a email
	declineOffer.addEventListener("click", () => {
		closeModal();
	});
	//close button listener
	closeButton.addEventListener("click", () => {
		closeModal();
	});
	//event listener that listens for mouse to leave to bring up modal
	document.body.addEventListener("mouseleave", () => {
		showModal();
	});
};
