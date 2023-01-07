function getById(id) {
    return document.getElementById(id);
}

function getValue(id) {
    return document.getElementById(id).value;
}

function show(id) {
    getById(id).style.display = "block";
}

function hide(id) {
    getById(id).style.display = "none";
}

function setActive(id) {
    getById(id).classList.add('active');
}

function setInactive(id) {
    getById(id).classList.remove('active');
}

function openTab(url) {
    window.open(`${url}`);
}

function getOptionHtmlTag(name, value) {
    return `<option value="${value}">${name}</option>`;
}

function getDataListOption(value) {
    return `<option value="${value}">`;
}

function isEmpty(object) {
    return object === undefined || object === null || object.length < 1;
}
