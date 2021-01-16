var subscriber = {}


var ec = {
    sub (name, obj, cb) {
        if (subscriber[name] == null) {
            subscriber[name] = [];
        }
        subscriber[name].push({
            obj: obj,
            cb: cb
        });
    },
    unsub (name, obj){
        var list = subscriber[name]
        if (list) {
            for (let i = 0; i < list.length; i++) {
                const listener = list[i];
                if (listener.obj == obj) {
                    list.splice(i, 1);
                    return;
                }
            }
        }
    },
    pub (name, params) {
        var list = subscriber[name]
        if (list) {
            list.forEach(listener => {
                listener.cb(params);
            });
        }
    }
}


export default ec