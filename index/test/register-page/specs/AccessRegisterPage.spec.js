import { expect } from "@wdio/globals";
import registerPage from "../../../pageobjects/register-page.js";

describe("Register Page", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await registerPage.openCermati();
    });

    it("should open the page", async () => {
        await expect(browser).toHaveTitle("Daftar Akun");
        await expect(browser).toHaveUrl("https://www.cermati.com/app/gabung");
    });
    
    it('back button back to previous page', async () => {
        await registerPage.backButton.waitForExist()
        await registerPage.backButton.click()
    });
});
