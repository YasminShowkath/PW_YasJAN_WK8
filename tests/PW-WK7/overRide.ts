
class Parent {
  browserVersion() {
    return 120;
  }
}

class Child extends Parent {
  override browserVersion(): any {
    return "Any version above 150 ";
  }
}

const bro = new Child();
console.log(bro.browserVersion());
