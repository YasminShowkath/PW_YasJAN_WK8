import test from '@playwright/test'
import { SFAccountTab } from './AccountsTab'
import { SFAppLauncher } from './AppLauncher'

test("Create Account in SF",async({page})=>{

    //create object for last page 
    let obj=new SFAccountTab(page)
    await obj.loadUrl()
    await obj.enterUserName("dilipkumar.rajendran@testleaf.com")
    await obj.enterPassWord("TestLeaf@2025")
    await obj.clickOnLogin()
    await obj.clickOnAccounts()
    await obj.clickOnNewButton()
    await obj.enterAccountName()
    await obj.clickOnSave()

})


test("Click on ViewAll in SF",async({page})=>{

    //create object for last page 
    let obj=new SFAppLauncher(page)
    await obj.loadUrl()
    await obj.enterUserName("dilipkumar.rajendran@testleaf.com")
    await obj.enterPassWord("TestLeaf@2025")
    await obj.clickOnLogin()
    await obj.appLauncher()
    await obj.viewAll()

})