

async function mystery1(): Promise<boolean> {
    const result = await fetch('https://packtpub.com/something/');
    return result.ok;
}

async function mystery2(): Promise<void> {
    try {
        const result = await fetch('https://packtpub.com/something/');
        return console.log(result);
    }
    catch (rej) {
        return console.log("error", rej);
    }
}

async function mystery3(): Promise<void> {
    try {
        try {
            const res = await fetch('https://packtpub.com/something/');
            return console.log(res);
        }
        catch (err) {
            return console.log("err");
        }
    }
    catch (err2) {
        return console.log("err2", err2);
    }
}

async function mystery4(): Promise<any> {
     try {
        const res1 = await fetch('https://packtpub.com/something/');
        const res2 = console.log(res1);
        const res3 = console.log(res2);
        return console.log(res3);
    }
    catch (error) {
        return console.log('ERROR:', error.message);
    }
}
