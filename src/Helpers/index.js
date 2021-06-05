export const appendScript = () => {
    const Scripts = [
        // { id: "menu", script: '/js/mfn.menu.js' },
        { id: "scripts", script: '/js/scripts.js' },
        { id: "last", script: '/js/last.js' },
    ]
    Scripts.map((script) => {
        if (document.getElementById(script.id)) {
            document.getElementById(script.id).remove();
        }
        const scriptToAppend = document.createElement("script");
        scriptToAppend.src = script.script;
        scriptToAppend.id = script.id;
        scriptToAppend.async = true;
        document.body.appendChild(scriptToAppend);
        return
    })
}


export const formatMoney = (amount, moneda = "", decimalCount = false, decimal = ",", thousands = ".") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 0 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "") + " " + moneda;
    } catch (e) {
        console.log(e)
    }
};


export const Validation = (type, e) => {
    switch (type) {
        case "email":
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var result = re.test(e.target.value.toLowerCase());
            if (result) {
                e.target.parentElement.classList.add("valid")
            } else {
                e.target.parentElement.classList.remove("valid")
            }
            return result;
        case "amount":
            var result = false;
            if (e.target.value > 9.99) {
                const re = /^[0-9]+([.,]+[0-9]{1,3})?$/;
                result = re.test(e.target.value);
                if (result) {
                    e.target.parentElement.classList.add("valid")
                } else {
                    e.target.parentElement.classList.remove("valid")
                }
            } else {
                e.target.parentElement.classList.remove("valid")
                result = false
            }
            return result;
        case "wallet":
            var result;
            if (e.target.value.includes('0x')) {
                if (e.target.value.length === 42) {
                    e.target.parentElement.classList.add("valid");
                    result = true;
                } else {
                    e.target.parentElement.classList.remove("valid")
                    result = false
                }
            } else {
                e.target.parentElement.classList.remove("valid")
                result = false
            }
            return result
        default:
            return false;
    }
}