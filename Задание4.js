function ElectroApp(power, name){
    this.voltage = "220 v",
        this.name = name,
        this.power = power,
        this.connected=false
};

ElectroApp.prototype.getPower = function(){
    console.log(`Power is ${power} W`);
};

ElectroApp.prototype.appOn = function(){
    if (this.connected===false){this.connected=true;
        console.log("The device is switched on");}else{console.log("Already enabled");}
};

ElectroApp.prototype.appOff = function(){
    if (this.connected===true){this.connected=false;
        console.log("The device is switched off");}else{console.log("Already turned off");}
};

function PowerTools(power, name, volumaccum){
    this.power = power,
        this.name = name,
        this.volumaccum = volumaccum
};

PowerTools.prototype = new ElectroApp()

PowerTools.prototype.rechargeBegin = function(){
    console.log("Recharge of accum is begin")
};

PowerTools.prototype.rechargeEnd = function(){
    console.log("Recharge of accum is end")
};

PowerTools.prototype.getVolumAccum = function(){
    console.log(`accumulator is ${power}`)
};

const lamp = new ElectroApp("Lamp", "60");
console.log(lamp);

const screwdriver = new PowerTools("Screwdriver", "1100", "3000 mA");
console.log(screwdriver)
lamp.appOn()