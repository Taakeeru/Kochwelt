let sideMenuVisibile = false;

function openHeaderMobileMenu(){

    if(sideMenuVisibile == false){
        document.getElementById("headerMobileSideMenu").style.visibility ='visible';

        changeTransformDurationShowMenu();

        setTimeout(function() {
            document.getElementById("sideMenuButtonStart").style.transform = 'translateY(0)';
            document.getElementById("sideMenuButtonRezept").style.transform = 'translateY(0)';
            document.getElementById("sideMenuButtonKontakt").style.transform = 'translateY(0)';
            document.getElementById("sideMenuButtonImpressum").style.transform = 'translateY(0)';
        }, 100);
        
        sideMenuVisibile = true;
    }
    else{

      changeTransformDurationHideMenu();

      document.getElementById("sideMenuButtonStart").style.transform = 'translateY(-150%)';
      document.getElementById("sideMenuButtonRezept").style.transform = 'translateY(-350%)';
      document.getElementById("sideMenuButtonKontakt").style.transform = 'translateY(-550%)';
      document.getElementById("sideMenuButtonImpressum").style.transform = 'translateY(-750%)';

      setTimeout(function() {
        document.getElementById("headerMobileSideMenu").style.visibility ='collapse';
      }, 800);

        sideMenuVisibile = false;
    }

}


function changeTransformDurationShowMenu(){
  
    document.getElementById("sideMenuButtonStart").style.transition = `900ms ease-in-out`;
    document.getElementById("sideMenuButtonRezept").style.transition = `800ms ease-in-out`;
    document.getElementById("sideMenuButtonKontakt").style.transition = `700ms ease-in-out`;
    document.getElementById("sideMenuButtonImpressum").style.transition = `600ms ease-in-out`;
  
}

function changeTransformDurationHideMenu(){
  
  document.getElementById("sideMenuButtonStart").style.transition = `300ms ease-in-out`;
  document.getElementById("sideMenuButtonRezept").style.transition = `500ms ease-in-out`;
  document.getElementById("sideMenuButtonKontakt").style.transition = `700ms ease-in-out`;
  document.getElementById("sideMenuButtonImpressum").style.transition = `900ms ease-in-out`;

}