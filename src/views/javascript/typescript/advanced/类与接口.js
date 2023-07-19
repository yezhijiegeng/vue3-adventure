var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.distanceToOrigin = function (p) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    };
    Point.origin = new Point(0, 0);
    return Point;
}());
var p1;
var p2;
