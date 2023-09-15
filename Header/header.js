let sideMenuVisibile = false;

function openHeaderMobileMenu(){

    if(sideMenuVisibile == false){
        document.getElementById("headerMobileSideMenu").style.visibility ='visible';

        setTimeout(function() {
            document.getElementById("sideMenuButtonStart").style.transform = 'translateY(0)';
            document.getElementById("sideMenuButtonRezept").style.transform = 'translateY(0)';
            document.getElementById("sideMenuButtonKontakt").style.transform = 'translateY(0)';
            document.getElementById("sideMenuButtonImpressum").style.transform = 'translateY(0)';
          }, 100);
        
        sideMenuVisibile = true;
    }
    else{
        document.getElementById("sideMenuButtonStart").style.transform = 'translateY(-150%)';
        document.getElementById("sideMenuButtonRezept").style.transform = 'translateY(-350%)';
        document.getElementById("sideMenuButtonKontakt").style.transform = 'translateY(-550%)';
        document.getElementById("sideMenuButtonImpressum").style.transform = 'translateY(-750%)';
        setTimeout(function() {
          }, 200);
          
        
        sideMenuVisibile = false;
    }


}