const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn&&navLinks){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));}

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const form=document.querySelector('[data-contact-form]');
if(form){
 form.addEventListener('submit',e=>{
   e.preventDefault();
   const notice=document.querySelector('.notice');
   if(notice){notice.style.display='block';notice.textContent='Thank you. Your message has been captured for this demo. Connect this form to your Spring Boot API to send it to your team.';}
   form.reset();
 });
}

const path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a[data-page]').forEach(a=>{
 const page=a.getAttribute('data-page');
 if(page===path || (path===''&&page==='index.html')) a.classList.add('active');
});
