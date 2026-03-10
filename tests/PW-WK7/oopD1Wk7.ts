export class LoginPage {
    url: string;
    title: string;

    // Parameterized constructor
    constructor(url: string) {
        this.url = url;
        this.title = "Login Page";
    }

    // Methods
    login() {
        console.log("User logged in.");
    }

    logout() {
        console.log("User logged out.");
    }
}

// Create object inside SAME file
const loginObj = new LoginPage("//platform.testleaf.com/");
console.log(loginObj.url);       // https://mysite.com/login
console.log(loginObj.title);     // Login Page
loginObj.login();                // User logged in.
