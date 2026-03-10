
import { Browser } from "./parentclass";

class Chrome extends Browser {

    launchBrowser() {
        console.log("Launching Chrome Browser...");
        this.browserType("Chrome");
        this.browserVersion("150.0");
    }
}

const chromeObj = new Chrome();
chromeObj.launchBrowser();
