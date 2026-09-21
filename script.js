const menu=document.getElementById('menu'),links=document.getElementById('links');menu.onclick=()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open'))};document.querySelectorAll('.nav-links a').forEach(a=>a.onclick=()=>links.classList.remove('open'));const sections=[...document.querySelectorAll('main section[id]')];window.addEventListener('scroll',()=>{let id='home';sections.forEach(s=>{if(scrollY>=s.offsetTop-140)id=s.id});document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));document.getElementById('back').classList.toggle('show',scrollY>500)});document.getElementById('back').onclick=()=>scrollTo({top:0,behavior:'smooth'});document.getElementById('form').onsubmit=e=>{e.preventDefault();let n=document.getElementById('name').value.trim(),em=document.getElementById('email').value.trim(),m=document.getElementById('message').value.trim();location.href='mailto:savairafazal25@gmail.com?subject='+encodeURIComponent('Portfolio inquiry from '+n)+'&body='+encodeURIComponent('Name: '+n+'\nEmail: '+em+'\n\n'+m);document.getElementById('status').textContent='Your email app is opening with the message prepared.'};

(function(){
 const targets=document.querySelectorAll('section,.skill,.project,.about-card,.form,.fact');
 targets.forEach((el,i)=>{if(!el.classList.contains('reveal')){el.classList.add('reveal');el.style.transitionDelay=(Math.min(i%8,7)*70)+'ms';}});
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();


(function(){
 const els=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>io.observe(e));}else els.forEach(e=>e.classList.add('visible'));
 document.querySelectorAll('.skill,.project,.fact').forEach((el,i)=>el.style.transitionDelay=(i%4)*60+'ms');
})();
