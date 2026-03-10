import { ParentMethod } from "./singleParent"

class ChildMethod extends ParentMethod{

createLead()
{
    console.log("Create Lead")
}

}

let Single = new ChildMethod()
Single.createLead()
Single.loadUrl()
Single.loginInfo()