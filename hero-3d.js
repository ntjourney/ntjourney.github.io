const host=document.getElementById('logo3d');
if(host){
  const logo=document.createElement('img');
  logo.src='IMG_1746.png';
  logo.alt='Next Round Logo';
  logo.decoding='async';
  logo.style.cssText='display:block;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 18px 18px rgba(0,0,0,.16));';
  host.replaceChildren(logo);
}