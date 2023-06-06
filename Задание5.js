class ElectroApp{
constructor(name, power){
this.name = name;
this.power = power;
this.connected=false;
}

getPower = function(){
console.log(`Power is ${this.power} W`);
}

appOn = function(){
if (this.connected===false){this.connected=true;
console.log("The device is switched on");}else{console.log("Already enabled");}
}

appOff = function(){
if (this.connected===true){this.connected=false;
console.log("The device is switched off");}else{console.log("Already turned off");}
}
};

class PowerTools extends ElectroApp{
constructor(power, name, volumaccum){
super(power, name);
this.volumaccum = volumaccum;
}

rechargeBegin = function(){
console.log("Recharge of accum is begin")
}

rechargeEnd = function(){
console.log("Recharge of accum is end")
}

getVolumAccum = function(){
console.log(`accumulator is ${volumaccum}`)
}
};

const lamp = new ElectroApp("Lamp", 60);

const screwdriver = new PowerTools("Screwdriver",1100, "3000 mA");

lamp.appOn()
lamp.appOff()
lamp.appOff()
console.log(lamp.connected)
console.log(lamp.power)
lamp.getPower()
screwdriver.getPower()