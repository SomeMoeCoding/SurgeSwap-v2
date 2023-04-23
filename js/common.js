const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const formatterNoDec = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

const formatterOneDec = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
});

const formatterFourDec = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
});

Number.prototype.FromGwei = function () {
    return this / Math.pow(10, 9);
};

Number.prototype.ToGwei = function () {
    return this * Math.pow(10, 9);
};

function diff_minutes(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return diff;
}

Number.prototype.FromDec = function () {
    return this / Math.pow(10, 5);
};

Number.prototype.ToDec = function () {
    return this * Math.pow(10, 5);
};

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function uniq(a) {
    var prims = { "boolean": {}, "number": {}, "string": {} }, objs = [];

    return a.filter(function (item) {
        var type = typeof item;
        if (type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkBrowser() {
    let browser = "";
    let c = navigator.userAgent.search("Chrome");
    let f = navigator.userAgent.search("Firefox");
    let m8 = navigator.userAgent.search("MSIE 8.0");
    let m9 = navigator.userAgent.search("MSIE 9.0");
    if (c > -1) {
        browser = "Chrome";
    } else if (f > -1) {
        browser = "Firefox";
    } else if (m9 > -1) {
        browser = "MSIE 9.0";
    } else if (m8 > -1) {
        browser = "MSIE 8.0";
    }
    return browser;
}

function ToggleMenu() {
    toggle = true;
    $(".nav-mob").show(400);
}

function HideMenu() {
    $(".nav-mob").hide(400);
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

async function FadeOut(id) {
    $(`#${id}`).css("opacity", 0.9);
    await sleep(50);
    $(`#${id}`).css("opacity", 0.8);
    await sleep(50);
    $(`#${id}`).css("opacity", 0.7);
    await sleep(50);
    $(`#${id}`).css("opacity", 0.6);
    await sleep(50);
    $(`#${id}`).css("opacity", 0.5);
    await sleep(50);
    $(`#${id}`).css("opacity", 0.4);
    await sleep(50);
    $(`#${id}`).css("opacity", 0.2);
    await sleep(50);
    $(`#${id}`).hide();
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}