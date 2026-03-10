import { SFHomePage } from "./homepage.ts"

export class SFAppLauncher extends SFHomePage{

    async viewAll(){
        await this.page.getByLabel("View All Applications").click()
    }



}