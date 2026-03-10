import { SFLoginPage } from "./LoginPage.ts"
export class SFHomePage extends SFLoginPage{

    async clickOnAccounts(){
        await this.page.locator("//span[text()='Accounts']").first().click()
    }

    async clickOnCases(){
        await this.page.locator("//span[text()='Cases']").first().click()
    }

    async appLauncher(){
        await this.page.locator("//div[@class='slds-icon-waffle']").click()
    }

}