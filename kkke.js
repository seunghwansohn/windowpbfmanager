let items = ['1', 'dfdf', 'asdfae'];
let i = 0;
await new Promise(async (resolve, reject) => {
    try {
        if (items.length == 0) return resolve();
        let funSync = async () => {
            await yourASyncFunctions(items[i].doAnything);
            i++;
            if (i == items.length) resolve();
            else funSync();
        }
        funSync();
    } catch (e) {
        reject(e);
    }
});