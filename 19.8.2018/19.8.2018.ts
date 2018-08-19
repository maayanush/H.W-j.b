
interface IFly{
    fly(speed:number):void;
    land():boolean;
}

class Plain implements IFly{
    fly(speed:number){
        return "the speed is "+speed;
    };
    land(){
        return true;
    }
    pilotName: string="avi";
    airlineName: string="el-al";
    destination: string="greece";
}

class Kite implements IFly{
    fly(speed:number){
        return "the speed is "+speed;
    };
    land(){
        return false;
    }
    color: string="blue";
    price: number=20;
}

class Bird implements IFly{
    fly(speed:number){
        return "the speed is "+speed;
    };
    land(){
        return true;
    }
    kind:string="nesher";
    age: number=5;
    color: string="green";
}
function createIFly():number{
    let random:number=Math.floor(Math.random() * 3) ;
    return random;
}

let myArray:number[]=new Array(10);

for(let i:number=0;i<myArray.length;i++){
    myArray[i]=createIFly();
    switch (createIFly()) {
        case 0:
            var obj1 = new Bird();
            console.log(obj1.land,obj1.fly(20), obj1);
            break;
        case 1:
            var obj2 = new Plain();
            console.log(obj2.land,obj2.fly(50), obj2);
            break;
        case 2:
            var obj3 = new Kite();
            console.log(obj3.land, obj3.fly(5), obj3);
            break;
    }
}

