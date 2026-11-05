(()=>{'use strict';
document.querySelector('[data-copy]')?.addEventListener('click',async e=>{
 const button=e.currentTarget;const feedback=document.querySelector('.copy-feedback');
 try{
  if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(button.dataset.copy)}
  else{const field=document.createElement('textarea');field.value=button.dataset.copy;field.style.position='fixed';field.style.opacity='0';document.body.append(field);field.select();const ok=document.execCommand('copy');field.remove();if(!ok)throw Error('copy')}
  feedback.textContent='Номер скопирован';
 }catch{feedback.textContent='Номер: '+button.dataset.copy+'. Выделите и скопируйте его вручную.'}
});
document.querySelector('.details-toggle')?.addEventListener('click',e=>{
 const button=e.currentTarget;const panel=document.getElementById(button.getAttribute('aria-controls'));panel.hidden=!panel.hidden;button.setAttribute('aria-expanded',String(!panel.hidden));
});
})();
