
window.onload = function(){

    const links = document.querySelectorAll('.gb_list_sub > li');
    const views = document.querySelectorAll('.incList');


    

    function linkEvent(idx){
        
        // const viewAttr = view.getAttribute("data-include");
        // const viewUrl = viewAttr.split('/');
        // const viewLength = viewUrl.length;
        // const viewFile = viewUrl[viewLength-1];
        // const viewFileLength = viewFile.split('.');
        // const viewName = viewFileLength[0];

        const viewLists = views[idx].getAttribute("data-include");
        const viewUrl = viewLists.split('/');
        const viewLength = viewUrl.length;
        const viewFile = viewUrl[viewLength-1];
        const viewFileLength = viewFile.split('.');
        const viewName = viewFileLength[0];
        console.log(viewName);
        

        

        links[idx].onclick = function(e){
            const aThis = e.target;

            

            console.log(aThis);
            
            
        }
    }


    for(let i=0; i< links.length; i++){
        linkEvent(i);
    }



    const gb_list = document.querySelectorAll('.gb_list > li');
    const gb_sub = document.querySelectorAll('.gb_list_sub > li');
    

    function listEvent(idx){

        gb_sub[idx].onclick = function(){

            const listName = gb_sub[idx].innerText;
            console.log(listName);
            if(gb_sub[idx].getAttribute('class') != 'active'){
                remove();
                gb_sub[idx].classList.add('active');
            }
            //console.log(gb_sub[idx]);
        }
    
    }

    function remove(){
        gb_sub.forEach(el => {el.classList.remove('active')});
    }
    
    for(let i=0; i<gb_sub.length; i++){
        listEvent(i);
    }
    
    includeHTML();

}


function includeHTML(){
    let z, elmnt, file, xhttp;
 
    z = document.getElementsByTagName("*");
    
    for (let i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("data-include");
      
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("data-include");
            includeHTML();
          }//if
        }//onreadystatechange
 
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }//if - file
    }//for
}//includeHTML
 
 
/* 실행 */
// window.addEventListener('DOMContentLoaded',()=>{

// });
    