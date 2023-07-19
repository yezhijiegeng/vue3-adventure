class Point {

  static origin = new Point(0,0)
  static distanceToOrigin(p:Point){
    return Math.sqrt(p.x*p.x+ p.y*p.y);
  }

  x: number;
  y: number;
  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
}

interface PointInterfaceType {
  x:number;
  y:number;
}

let p1:Point;
let p2:PointInterfaceType;

