const imgElement = document.querySelector('body img');
imgElement.style.Left = '0px';
let pos = 0;

function main(){
    const timeCatWalk =setInterval(catWalk, 50);

    function catWalk(){  
        if (pos > screen.width){
            pos =0;
        } else if(pos == (screen.width/2)-150){
            clearInterval(timeCatWalk)
            imgElement.src= 'tenor.gif'
            setTimeout(() => {imgElement.src ='cat-walk.gif';
            pos += 10;
            main();
        },5000)
        }else{
            imgElement.style.left = `${pos}px`;
            pos += 10;
        }
     }
   
    

}

main() ;






