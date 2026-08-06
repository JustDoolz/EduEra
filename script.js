function setLang(lang){
  const isAr = lang === 'ar';
  document.body.classList.toggle('ar', isAr);
  document.documentElement.lang = isAr ? 'ar' : 'en';
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.getElementById('btn-en').classList.toggle('active', !isAr);
  document.getElementById('btn-ar').classList.toggle('active', isAr);

  document.querySelectorAll('[data-en-placeholder]').forEach(el=>{
    el.placeholder = isAr ? el.getAttribute('data-ar-placeholder') : el.getAttribute('data-en-placeholder');
  });
  document.querySelectorAll('option[data-en]').forEach(el=>{
    el.textContent = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
  });
}
