//your JS code here. If required.
let btn= document.getElementById("colorSelect");
let select = document.getElementById("colorSelect");
btn.addEventListener("click" => {
	 var selectedIndex = select.selectedIndex;
    
    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
});