function addOption(item){
    let option = document.createElement('option');
    option.text = "Session: "+item.id; 
    option.value = item.id;
    select.add(option, 0);
}

module.exports = addOption;