import { expect } from "@wdio/globals";
import registerPage from "../../../pageobjects/register-page.js";

describe("Firstname Field", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await registerPage.openCermati();
    });
	
    it("should be fill the first name field", async () => {
        await registerPage.firstNameField.waitForExist();
        await registerPage.firstNameField.setValue("Anastasia");
        await expect(registerPage.firstNameField).toHaveValue("Anastasia")
    });

    it("error message should be display when first name field is empty", async () => {
        await registerPage.firstNameField.waitForExist();
        await registerPage.firstNameField.setValue("");
        await registerPage.daftarButton.waitForClickable();
        await registerPage.daftarButton.click();
        await expect(registerPage.firstNameErrorMessage).toBeDisplayed();
        await expect(registerPage.firstNameErrorMessage).toHaveText(
            "Input wajib diisi"
        );
    });

    it("should be letter only on first name field", async () => {
        await registerPage.firstNameField.waitForExist();
        await registerPage.firstNameField.setValue("123!@#");
        await registerPage.daftarButton.waitForClickable();
        await registerPage.daftarButton.click();
        await expect(registerPage.firstNameErrorMessage).toBeDisplayed();
        await expect(registerPage.firstNameErrorMessage).toHaveText(
            "Input harus berupa huruf"
        );
    });

    it("error message should be display when first name field is more than 100 characters", async () => {
        await registerPage.firstNameField.waitForExist();
        await registerPage.firstNameField.setValue(
            "RhoshandiatellyneshiaunneveshenkRhoshandiatellyneshiaunneveshenkRhoshandiatellyneshiaunneveshenkRhoshandiatellyneshiaunneveshenk"
        );
        await registerPage.daftarButton.waitForClickable();
        await registerPage.daftarButton.click();
        await expect(registerPage.firstNameErrorMessage).toBeDisplayed();
        await expect(registerPage.firstNameErrorMessage).toHaveText(
            "Jumlah karakter tidak boleh lebih dari 100"
        );
    });
});
