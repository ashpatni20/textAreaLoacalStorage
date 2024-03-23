function saveText(){
    var text = document.getElementById('textarea').value;
    
    localStorage.setItem("textareaValue", text);
    alert("saved to your loacal storage");
    // localStorage.getItem("textareaValue");
}
window.onload = function(){
    var sortedText = localStorage.getItem("textareaValue");
    textarea.innerText = sortedText;
}
function changeColor(){
    
    var color = document.getElementById('colorPicker').value;
    document.getElementById("textarea").style.backgroundColor = color;
}
addEventListener('input', changeColor)
