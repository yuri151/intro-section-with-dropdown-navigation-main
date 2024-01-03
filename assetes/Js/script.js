
function menu(){
    const menu = document.getElementById("menu-res")
    if(menu.style.display == "none"){
        menu.style.display = "flex"


    }else{
        menu.style.display = "none" 
        
    }
}

function menuClose(){

    var larguraTela = innerWidth
    var larguraRes = 740

    if(larguraTela >larguraRes){
        var menu_res = document.getElementById("menu-res")
        menu_res.style.display = "none"


     }
   


}


function openSubMenu1(){
    var subMenu1 = document.getElementById("lista-sub-1")
    var img_res = document.getElementById("img-res-1")
   
    
    if(subMenu1.style.display == "none"){
        subMenu1.style.display = "block"
        img_res.style.transform = "rotate(180deg)"

    }else{
        subMenu1.style.display = "none"
        img_res.style.transform = "rotate(0deg)"
    }  
}

function openSubMenu2(){
    var img_res = document.getElementById("img-res-2")
    var subMenu2 = document.getElementById("lista-sub-2")
    
    if(subMenu2.style.display == "none"){
        subMenu2.style.display = "block"
        img_res.style.transform = "rotate(180deg)"

    }else{
        subMenu2.style.display = "none"
        img_res.style.transform = "rotate(0deg)"

    }  
}


