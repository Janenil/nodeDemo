var corp = {};

corp.list = {};

corp.on = function (key, fn) {
    // this.list.push(fn);
    if(!this.list[key]){
        this.list[key] = [];
    }
    this.list[key].push(fn);
}
corp.emit = function () {
    // this.list.forEach(cb => {
    //     cb.apply(this, arguments);
    // })
    let key = [].shift.call(arguments),
        fns = this.list[key];
    if (!fns || fns.length === 0) {
        return false;
    }
    fns.forEach(fn => {
        fn.apply(this, arguments);
    });
};
// corp.on(function(posi, sala) {
//     console.log('123' + posi);
//     console.log('321' + sala);
// });
// corp.on(function(skill, hobby) {
//     console.log('abc' + skill);
//     console.log('cba' + hobby);
// });
// corp.emit('qqq', 'www');
// corp.emit('aaa', 'sss');
function abc(){
    console.log('11111')
}
corp.on('aaa', function() {
    console.log('123');
})
corp.on('aaa', function() {
    console.log('---');
})
corp.on('aaa', abc)
corp.on('bbb', function(skill, hobby) {
    console.log('abc' + skill);
    console.log('cba' + hobby);
})
corp.emit('aaa');
// corp.emit('aaa', 'behind-end', '112211');
corp.emit('bbb', 'water', 'floor');
