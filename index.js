//实现一个map函数
Array.prototype.newMap = function(fn) {
        var newArr = [];
        for (let index = 0; index < this.length; index++) {
            newArr.push(fn(this[i], i, this));
        }
        return newArr;
    }
    //实现一个bind函数
Function.prototype.bind = function() {
    var self = this,
        context = [].shift.call(arguments),
        args = [].slice.call(arguments);
    return function() {
        self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    }
}