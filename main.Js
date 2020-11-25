name_of_the_student_array = [];
    
function getParagraph1(){
    var inputs = [];

    for (var  i = 1;  i<=6; i++)
    {
    inputs.push(document.getElementById("para1_input_box" + i).value);
    }

    inputs.join(". ");
    document.getElementById("showPragraph1").innerHTML = inputs.join(". ")  

    function getParagraph2(){
    var inputs = [];

    for (var  i = 1;  i<=6; i++)
    {
    inputs.push(document.getElementById("para2_input_box" + i).value);
    paragraph1.push("para1_input_box" + i);
    paragraph2.push("para2_input_box" + i);
    }

    inputs.join(". ");
    document.getElementById("showPragraph2").innerHTML = inputs.join(". ")  