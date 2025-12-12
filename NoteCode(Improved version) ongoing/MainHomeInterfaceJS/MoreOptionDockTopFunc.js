function MainOptionsOpen() {
    const MainOptionsPanel = document.getElementById("MoreOptionWindow");

    if (MainOptionsPanel.style.display === "none" || MainOptionsPanel.style.display === "") {
        MainOptionsPanel.style.animationName = "OpenFadeEffect";
        MainOptionsPanel.style.animationDuration = "0.4s";
        MainOptionsPanel.style.animationFillMode = "forwards";
        MainOptionsPanel.style.display = "grid";    
        MainOptionsPanel.style.opacity = "1";
        MainOptionsPanel.style.transform = "translate(0px, 0px)";
    } else {
        MainOptionsPanel.style.animationName = "CloseFadeEffect";
        MainOptionsPanel.style.animationDuration = "0.6s";
        MainOptionsPanel.style.animationFillMode = "forwards";
        
        setTimeout(() => {
            MainOptionsPanel.style.display = "none";
        }, 500);
    }
}