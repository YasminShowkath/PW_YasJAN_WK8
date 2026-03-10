import { Browser } from "./parentclass";

class Edge extends Browser {

    launchBrowser(): void {
        console.log("Launching Edge Browser...");
        this.browserType("Edge");
        this.browserVersion("120.0");
    }
}

// Create object for Edge
const edgeObj = new Edge();
edgeObj.launchBrowser();
