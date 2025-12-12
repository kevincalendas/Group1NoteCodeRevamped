function MainOptionsOpen() {
    const MainOptionsPanel = document.getElementById("MoreOptionWindow");
    const MainButtonToggleOptions = document.getElementById("MoreOptionMenuButton");

    if (MainOptionsPanel.style.display === "none" || MainOptionsPanel.style.display === "") {
        MainOptionsPanel.style.animationName = "OpenFadeEffect";
        MainOptionsPanel.style.animationDuration = "0.4s";
        MainOptionsPanel.style.animationFillMode = "forwards";
        MainOptionsPanel.style.display = "grid";    
        MainOptionsPanel.style.opacity = "1";
        MainOptionsPanel.style.transform = "translate(0px, 0px)";

        MainButtonToggleOptions.style.animationName = "ButtonClicked";
        MainButtonToggleOptions.style.animationFillMode = "forwards";
        MainButtonToggleOptions.style.animationDuration = "0.8s";

        setTimeout(() => {
            MainButtonToggleOptions.classList.remove('ButtonClicked');
            MainButtonToggleOptions.classList.add('ButtonClicked');
        }, 100);
    } else {
        MainOptionsPanel.style.animationName = "CloseFadeEffect";
        MainOptionsPanel.style.animationDuration = "0.6s";
        MainOptionsPanel.style.animationFillMode = "forwards";
        
        MainButtonToggleOptions.style.animationName = "ButtonClicked";
        MainButtonToggleOptions.style.animationFillMode = "forwards";
        MainButtonToggleOptions.style.animationDuration = "0.8s";
        setTimeout(() => {
            MainOptionsPanel.style.display = "none";
            MainButtonToggleOptions.classList.remove('ButtonClicked');
            MainButtonToggleOptions.classList.add('ButtonClicked');
        }, 500);
    }
}