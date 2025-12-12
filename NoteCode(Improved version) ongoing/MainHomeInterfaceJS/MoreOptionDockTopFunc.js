function MainOptionsOpen() {
    const MainOptionsPanel = document.getElementById("MoreOptionWindow");

    if (MainOptionsPanel.style.display === "none" || MainOptionsPanel.style.display === "") {
        MainOptionsPanel.style.animationName = "OpenTransformEffect, OpenScaleEffect";
        MainOptionsPanel.style.animationDuration = "0.4s, 0.5s";
        MainOptionsPanel.style.animationFillMode = "forwards";
        MainOptionsPanel.style.display = "grid";    
        MainOptionsPanel.style.opacity = "1";
        MainOptionsPanel.style.transform = "translate(0px, 0px)";
    } else {
        MainOptionsPanel.style.animationName = "CloseTransformEffect, CloseScaleEffect";
        MainOptionsPanel.style.animationDuration = "0.4s, 0.5s";
        MainOptionsPanel.style.animationFillMode = "forwards";
        
        setTimeout(() => {
            MainOptionsPanel.style.display = "none";
        }, 500);
    }
}