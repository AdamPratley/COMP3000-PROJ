function clearSelect(select) {
    Array.from(select.options).forEach(function(option_element) {
        if (option_element.value != "Auto"){
            select.remove(option_element);
        }
    });
}

module.exports = clearSelect;