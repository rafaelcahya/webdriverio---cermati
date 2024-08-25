import { expect } from "@wdio/globals";
import registerPage from "../../../pageobjects/register-page.js";

describe("Email Input Field", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await registerPage.openCermati();
    });
	
    it("should be fill the email field", async () => {
        await registerPage.emailField.waitForExist();
        await registerPage.emailField.setValue("test@gmail.com");
        await expect(registerPage.emailField).toHaveValue("test@gmail.com")
    });

    it("should display error message when email is empty", async () => {
        await registerPage.emailField.waitForExist();
        await registerPage.emailField.setValue("");
        await registerPage.daftarButton.waitForClickable();
        await registerPage.daftarButton.click();
        await expect(registerPage.emailErrorMessage).toBeDisplayed();
        await expect(registerPage.emailErrorMessage).toHaveText(
            "Input wajib diisi"
        );
    });

    it("should display error message when email is invalid format", async () => {
        await registerPage.emailField.waitForExist();
        await registerPage.emailField.setValue("email.domain.com");
        await registerPage.daftarButton.waitForClickable();
        await registerPage.daftarButton.click();
        await expect(registerPage.emailErrorMessage).toBeDisplayed();
        await expect(registerPage.emailErrorMessage).toHaveText(
            "Format email tidak valid"
        );
    });

    it("daftar button should be disabled when email is empty", async () => {
        await registerPage.emailField.waitForExist();
        await registerPage.emailField.setValue("");
        await registerPage.daftarButton.waitForClickable();
        await registerPage.daftarButton.click();
        await expect(registerPage.daftarButton).toBeDisabled()
    });
});
