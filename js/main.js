window.onload=function(){
    var Work = document.querySelector("#OurWork");
    var ContWork = document.querySelector("#Work");
    
        Work.onclick =function(){
            if(contWork.className == "hide"){
                contWork.className = "show";
            }else{
                contWork.className = "hide";
            }
        }

//    var Work = document.querySelector("#OurWork");
//    var ourWork = document.querySelector("#ourWork");   
//    var Services = document.querySelector("#Services");
//    var service = document.querySelector("#service");
//
//        Services.onclick =function(){
//            if(services.className == "hide"){
//                ourWork.className = "hide"
//                services.className = "show";
//
//            }else{
//                services.className = "hide";
//            }
//        }
}