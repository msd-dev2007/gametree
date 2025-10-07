
document.addEventListener('DOMContentLoaded', function(){
  // hamburger for mobile: simple toggle
  var hamb = document.querySelector('.hamburger');
  if(hamb){
    hamb.addEventListener('click', function(){ document.body.classList.toggle('nav-open'); });
  }
  // search placeholder: no backend
  var search = document.getElementById('search-input');
  if(search){
    document.getElementById('search-form').addEventListener('submit', function(e){
      e.preventDefault();
      alert('Search is a placeholder. Later you can implement search or link to a filtered page for: ' + search.value);
    });
  }
  // floating CTA allowed toggle
  var floating = document.getElementById('floatingDownload');
  if(floating){
    floating.addEventListener('click', function(){ floating.classList.toggle('allowed'); });
  }
});
function markSubscribed(){
  let expiry = Date.now() + (24 * 60 * 60 * 1000);
  localStorage.setItem('subClickedExpiry', expiry);
  sessionStorage.setItem('subClicked', 'true');
  document.getElementById('step1').style.display='none';
  document.getElementById('step2').style.display='block';
}
function unlockDownload(){
  document.getElementById('step2').style.display='none';
  document.getElementById('downloadSection').style.display='block';
}
window.onload = function(){
  let expiry = localStorage.getItem('subClickedExpiry');
  let session = sessionStorage.getItem('subClicked');
  if(expiry && Date.now() < expiry && session === 'true') {
    if(document.getElementById('step1')){ document.getElementById('step1').style.display='none'; document.getElementById('step2').style.display='block'; }
  } else {
    localStorage.removeItem('subClickedExpiry'); sessionStorage.removeItem('subClicked');
  }
}
