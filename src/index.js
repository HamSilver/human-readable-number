module.exports = function toReadable(number) {
    //declaration
    let e = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let d = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let p = ['hundred', 'thousand']; //, 'million', 'billion'];
    //preparation
    let t = (number).toString().split('').map(x => +x).reverse();
    let r = [];
    //process
    for (let i = 0; i < t.length; i++) {
        switch (i) {
            case 2:
                //hundred
                if (t[2]) {
                    r.push(p[0]);
                    r.push(e[t[2]]);
                }
                break;
            case 4:
            case 1:
                //decimal
                if (t[i]) {
                    if (t[i] > 1) {
                        r.push(d[t[i] - 2]);
                    } else {
                        if (t[i - 1]) r.pop();
                        r.push(e[t[i - 1] + 10]);
                    }
                }
                break;
            case 3:
                //thousand
                if (t[3] || t[4]) r.push(p[1]);
            case 0:
                if (number) {
                    if (t[i]) r.push(e[t[i]]);
                } else {
                    return e[0];
                }
                break;
        }
    }
    return r.reverse().join(' ');
}

