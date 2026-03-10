import { SFHomePage } from "./homepage.ts"

export class SFAccountTab extends SFHomePage{

async clickOnNewButton(){
 await this.page.locator("//div[text()='New']").click()
}

async enterAccountName(){
    await this.page.locator("//input[@name='Name']").fill("Dilip")
}

async clickOnSave(){
    await this.page.locator("//button[@name='SaveEdit']").click()
}





}