function sliderValSet(val){
    if (val == 100){
        brword.innerHTML = "Maximum " + "("+val+"%)";
    } else if (val <= 99 && val >=75){
        brword.innerHTML = "High " + "("+val+"%)";
    } else if (val <= 74 && val >=50){
        brword.innerHTML = "Medium " + "("+val+"%)";
    } else if (val <= 49 && val >=25){
        brword.innerHTML = "Low " + "("+val+"%)";
    } else if (val <= 24 && val >=0){
        brword.innerHTML = "Very Low " + "("+val+"%)";
    }
}