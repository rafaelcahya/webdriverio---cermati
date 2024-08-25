import { expect } from "@wdio/globals";
import registerPage from "../../../pageobjects/register-page";

describe("Phone Number Field", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await registerPage.openCermati();
    });

    it("should be fill the phone number field", async () => {
        await registerPage.phoneNumberField.waitForExist();
        await registerPage.phoneNumberField.setValue("0123");
        await expect(registerPage.phoneNumberField).toHaveValue("0123")
    });

    it("should display error message when phone number field is empty", async () => {
        await registerPage.phoneNumberField.waitForExist();
        await registerPage.phoneNumberField.setValue("");
        await registerPage.daftarButton.waitForClickable();
        await registerPage.daftarButton.click();
        await expect(registerPage.phoneNumberErrorMessage).toBeDisplayed();
        await expect(registerPage.phoneNumberErrorMessage).toHaveText(
            "Input wajib diisi"
        );
    });

    it("should display error message when phone number is invalid", async () => {
        await registerPage.phoneNumberField.waitForExist();
        await registerPage.phoneNumberField.setValue("123");
        await registerPage.daftarButton.waitForClickable();
        await registerPage.daftarButton.click();
        await expect(registerPage.phoneNumberErrorMessage).toBeDisplayed();
        await expect(registerPage.phoneNumberErrorMessage).toHaveText(
            "Nomor handphone tidak valid"
        );
    });

    it("phone number should have maximum lengh characters", async () => {
        await registerPage.phoneNumberField.waitForExist();
        const maxLength = await registerPage.phoneNumberField.getAttribute(
            "maxlength"
        );
        await registerPage.phoneNumberField.setValue(
            "1".repeat(Number(maxLength) + 16)
        );

        const getPhoneNumber = await registerPage.phoneNumberField.getValue();
        await expect(getPhoneNumber.length).toBe(Number(maxLength));
    });

    it("phone number should fill by number only", async () => {
        await registerPage.phoneNumberField.waitForExist();
        await expect(
            registerPage.phoneNumberField.toHaveAttribute("type", "tel")
        );
        await registerPage.phoneNumberField.setValue("123abc!@#456");
        await expect(registerPage.phoneNumberField.toHaveValue("123456"));
    });

    it("daftar button should be disabled when phone number is empty", async () => {
        await registerPage.phoneNumberField.waitForExist();
        await registerPage.daftarButton.waitForClickable();
        await registerPage.phoneNumberField.setValue("");
        await registerPage.daftarButton.click();
        await expect(registerPage.daftarButton).toBeDisabled();
    });
});
