/* Shared EN/VI toggle for VPA pages (same localStorage key as main site). Page supplies window.VPA_I18N = {en:{},vi:{}} */
(function(){
  const D = () => window.VPA_I18N || {en:{},vi:{}};
  window.vt = k => (D()[window.vlang] || {})[k] ?? (D().en[k] ?? k);
  function render(l){ window.vlang = l; document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(e => { const v = D()[l][e.dataset.i18n]; if (v != null) e.innerHTML = v; });
    document.querySelectorAll('[data-i18n-ph]').forEach(e => { const v = D()[l][e.dataset.i18nPh]; if (v != null) e.placeholder = v; });
    const b = document.getElementById('langBtn'); if (b) b.textContent = l === 'en' ? 'VI' : 'EN';
    try { localStorage.setItem('fc-lang', l); } catch (e) {}
    document.dispatchEvent(new CustomEvent('vpa-lang', {detail:l})); }
  const q = new URLSearchParams(location.search).get('lang');
  let l = q === 'vi' || q === 'en' ? q : ((() => { try { return localStorage.getItem('fc-lang'); } catch (e) {} })() || 'en');
  window.vlang = l; window.vpaRender = render;
  document.addEventListener('DOMContentLoaded', () => { render(l);
    const b = document.getElementById('langBtn'); if (b) b.onclick = () => render(window.vlang === 'en' ? 'vi' : 'en'); });
})();
