class car {
	constructor(name){
		this.brand=name;
	}

	present(){
	return 'I have a ' + this.brand;
	}
}

class Model extends car {
	constructor(name,mod){
		super(name);
		this.model=mod;
	}
	show(){
		return this.present() + ', it is a ' + this.model;
	}
}

mycar = new car('Ford');
mycar.present();
document.write(mycar.present());
document.write("<br>");
mynewcar = new Model("Ford", "Mustang");
document.write(mynewcar.show());
