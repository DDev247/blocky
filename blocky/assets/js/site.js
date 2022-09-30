
function siteGo() {
    let link = document.createElement('a');
    link.href = "app?stage=begin";
    link.click();
    link.remove();
}
