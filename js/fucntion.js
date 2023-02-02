const $tabList = document.querySelectorAll('.mainTab ul.tab li a');
const $tabContents = document.querySelectorAll('.mainCont .contents');

$tabList.forEach(function(tab,idx){
  tab.addEventListener('click',function(evt){
    evt.preventDefault();

    $tabList.forEach(function(obj,j){
      obj.parentElement.classList.remove('on');
    });

    $tabContents.forEach(function(obj,j){
      obj.style.display = 'none';
    });

    $tabList[idx].parentElement.classList.add('on');
    $tabContents[idx].style.display = 'block'; 
  });
});