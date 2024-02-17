var { 
    OverlayScrollbars, 
    ScrollbarsHidingPlugin, 
    SizeObserverPlugin, 
    ClickScrollPlugin
} = OverlayScrollbarsGlobal;
const osInstance = OverlayScrollbars(document.querySelector('#body'), {});

function kokot() {

    let start = 150;
    let length = 250;
    
    let scroll = window.pageYOffset;
    let header = document.querySelector('.arrow');
    
    if (scroll < start) {
        header.style.opacity = "1";
        return null;
    }
    if (scroll > start + length) {
        header.style.opacity = "0";
    }
    
    header.style.opacity = (1 - ((scroll - start) / length)).toString();

}

window.onscroll = function() {
    kokot();
}
