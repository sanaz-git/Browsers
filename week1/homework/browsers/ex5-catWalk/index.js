let imgElement= document.getElementsByTagName('img')[0];
imgElement.style.Left = '0px';

function catWalk(){
    imgElement.style.left= (parseInt(imgElement.style.left) + 10) + 'px';
}
window.setInterval(catWalk, 50);
