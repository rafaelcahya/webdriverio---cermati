import { $ } from '@wdio/globals'
import Page from "./page";

class RegisterPage extends Page {
    get phoneNumberField() {
        return $("#mobilePhone");
    }

    get emailField() {
        return $("#email");
    }

    get firstNameField() {
        return $("#firstName");
    }

    get lastNameField() {
        return $("#lastName");
    }

	get daftarButton(){
		return $('button[data-button-name="register-new"]')
	}

    get phoneNumberErrorMessage() {
        return $('input[id="mobilePhone"][aria-invalid="true"] + div');
    }

    get emailErrorMessage() {
        return $('input[id="email"][aria-invalid="true"] + div');
    }

    get firstNameErrorMessage() {
        return $(`label[for="firstName"] + div + div`);
    }

    get lastNameErrorMessage() {
        return $(`label[for="lastName"] + div + div`);
    }

    get tncInfo(){
        return $('label[for="terms-and-condition"]')
    }
    
    get tncButton(){
        return $("//a[contains(text(), 'Syarat dan Ketentuan')]");
    }
    
    get ppButton(){
        return $("//a[contains(text(), 'Kebijakan Privasi')]");
    }

    get backButton(){
        return $('button[aria-label="Back"]')
    }

    openCermati (){
        return super.openCermati("gabung")
    }
}

export default new RegisterPage()