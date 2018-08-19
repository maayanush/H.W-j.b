var Plain = /** @class */ (function () {
    function Plain() {
        this.pilotName = "avi";
        this.airlineName = "el-al";
        this.destination = "greece";
    }
    Plain.prototype.fly = function (speed) {
        return "the speed is " + speed;
    };
    ;
    Plain.prototype.land = function () {
        return true;
    };
    return Plain;
}());
var Kite = /** @class */ (function () {
    function Kite() {
        this.color = "blue";
        this.price = 20;
    }
    Kite.prototype.fly = function (speed) {
        return "the speed is " + speed;
    };
    ;
    Kite.prototype.land = function () {
        return false;
    };
    return Kite;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.kind = "nesher";
        this.age = 5;
        this.color = "green";
    }
    Bird.prototype.fly = function (speed) {
        return "the speed is " + speed;
    };
    ;
    Bird.prototype.land = function () {
        return true;
    };
    return Bird;
}());
function createIFly() {
    var random = Math.floor(Math.random() * 3);
    return random;
}
var myArray = new Array(10);
for (var i = 0; i < myArray.length; i++) {
    myArray[i] = createIFly();
    switch (createIFly()) {
        case 0:
            var obj1 = new Bird();
            console.log(obj1.land, obj1.fly(20), obj1);
            break;
        case 1:
            var obj2 = new Plain();
            console.log(obj2.land, obj2.fly(50), obj2);
            break;
        case 2:
            var obj3 = new Kite();
            console.log(obj3.land, obj3.fly(5), obj3);
            break;
    }
}
