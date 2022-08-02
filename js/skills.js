document.addEventListener('DOMContentLoaded', ()=>{
  mainMenuEffect()
  accordionEffect()
})

function mainMenuEffect(){
  const headerWrap=document.querySelector('#header_wrap')
  const portfolio=document.querySelector('#portfolio')
  const subMenuList=document.querySelector('#submenu_list')
  const subMenuLi=document.querySelectorAll('#submenu_list>li')
  const menuIcon=document.querySelector('#menu_icon')
  let subMenuOn=false;
  let openHeight=headerWrap.offsetHeight

  portfolio.addEventListener('click', showSubMenu)

  for(item of subMenuLi){
    item.addEventListener('click', closeSubMenu)
  }


  function showSubMenu(){
    if(openHeight==70 && subMenuOn==false){
      headerWrap.style.height='220px'
      subMenuList.style.display='block'
      menuIcon.style.transform='rotate(-90deg)'
      subMenuOn=true;
    }else{
      headerWrap.style.height='70px'
      subMenuList.style.display='none'
      menuIcon.style.transform='rotate(0deg)'
      subMenuOn=false;
    }
  }

  function closeSubMenu(){
    if(subMenuOn==true){
      headerWrap.style.height='70px'
      subMenuList.style.display='none'
      menuIcon.style.transform='rotate(0deg)'
      subMenuOn=false;
    }
  }

}

function accordionEffect(){
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}