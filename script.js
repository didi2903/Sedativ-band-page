document.getElementById("menuButton").addEventListener("click",dropMenu);

function dropMenu() {
    document.getElementById("dropDownMenu").classList.remove("small-menu-drop-down-hidden");
    document.getElementById("dropDownMenu").classList.add("small-menu-drop-down-display");
    document.getElementById("closeMenu").addEventListener("click",closeMenu);
}

function closeMenu() {
    document.getElementById("dropDownMenu").classList.remove("small-menu-drop-down-display");
    document.getElementById("dropDownMenu").classList.add("small-menu-drop-down-hidden");
}