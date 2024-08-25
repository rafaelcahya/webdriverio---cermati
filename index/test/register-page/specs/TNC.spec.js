import { expect } from "@wdio/globals";
import registerPage from "../../../pageobjects/register-page";

describe('TNC', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await registerPage.openCermati();
    });

	it('register information is displayed', async () => {
        await registerPage.tncInfo.waitForExist()
        await registerPage.tncInfo.isDisplayed()
        await expect(registerPage.tncInfo).toHaveText("Dengan klik Daftar, Saya telah membaca dan menyetujui Syarat dan Ketentuan dan Kebijakan Privasi dan bersedia untuk dihubungi oleh Cermati.com.")
    });

    it('TNC Button should be navigate to TNC Page', async () => {
        await registerPage.tncButton.waitForClickable()
        await registerPage.tncButton.click()
        await expect(browser).toHaveUrl("https://www.cermati.com/pages/terms-and-conditions")
    });

    it('Kebijakan Privasi Button should be navigate to Kebijakan Privasi Page', async () => {
        await registerPage.ppButton.waitForClickable()
        await registerPage.ppButton.click()
        await expect(browser).toHaveUrl("https://www.cermati.com/pages/privacy-policy")
    });
});