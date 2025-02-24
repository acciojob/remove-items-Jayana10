//your JS code here. If required.
let btn= document.getElementById("colorSelect");
btn.removeListener("click" => {
	 var selectedIndex = select.selectedIndex;
    
    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
});