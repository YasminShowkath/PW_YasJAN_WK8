import { Page } from "playwright";

export class SFLoginPage{

//empty variable -> for page intances 
//mapping with Playwright 'Page' Interface
page:Page

//constructor
constructor(page:Page){
    this.page=page
}

async loadUrl(){
    await this.page.goto("https://login.salesforce.com/?locale=in")
}

async enterUserName(user:string){
    await this.page.locator("#username").fill(user)
}

async enterPassWord(pass:string){
    await this.page.locator("#password").fill(pass)
}

async clickOnLogin(){
    await this.page.locator("#Login").click()
}







}