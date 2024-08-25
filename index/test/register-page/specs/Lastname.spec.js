import {expect} from "@wdio/globals"
import registerPage from "../../../pageobjects/register-page.js";

describe('Lastname Field', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await registerPage.openCermati();
    });

	it("should be fill the last name field", async () => {
        await registerPage.lastNameField.waitForExist();
        await registerPage.lastNameField.setValue("Anastasia");
        await expect(registerPage.lastNameField).toHaveValue("Anastasia")
    });
	
    it("lastname should be in letter only", async () => {
        await registerPage.lastNameField.waitForExist();
        await registerPage.lastNameField.setValue("123!@#");
        await registerPage.daftarButton.waitForClickable();
        await registerPage.daftarButton.click();
        await expect(registerPage.lastNameErrorMessage).toBeDisplayed();
        await expect(registerPage.lastNameErrorMessage).toHaveText(
            "Input harus berupa huruf"
        );
    });
});