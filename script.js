/* =====================================================================
   CONFIG — EDIT EVERYTHING HERE. Values in [BRACKETS] are placeholders.
   The page fills itself from this object (both EN and VI).
   ===================================================================== */
const CONFIG = {
  SIGNUP_URL: "",                        // OPTIONAL override. "" = SIGN UP buttons scroll to the "How to sign up" section
  DATE:    { en: "SUN 15 NOV 2026", vi: "Chủ Nhật, 15/11/2026" },
  START:   "10:00",
  END:     "19:00",
  VENUE:   "PAPI POINT SOCIAL",
  ADDRESS: "2 Trần Hữu Tước, Đà Nẵng",   // [CONFIRM ADDRESS]
  CITY:    "ĐÀ NẴNG",
  MAPS_URL: "https://maps.app.goo.gl/DodEvhsAraNEZ1tYA",
  DUPR:    { en: "[YES/NO]", vi: "[CÓ/KHÔNG]" },
  ENTRY_FEE: 550000,                     // VND per player
  DIVISIONS: [                           // name + DUPR range
    { en: "BEGINNER",     vi: "CƠ BẢN",    range: "2.0–2.5" },
    { en: "INTERMEDIATE", vi: "TRUNG CẤP", range: "2.5–3.0" },
    { en: "ADVANCED",     vi: "NÂNG CAO",  range: "3.0–3.5" }
  ],
  SCHEDULE: ["10:00–13:00", "13:00–16:00", "16:00–19:00"], // Beginner, Intermediate, Advanced
  LINKS: { ZALO: "https://zaloapp.com/qr/p/1c8hejlfp6le1", WHATSAPP: "https://wa.me/message/NYGL7RCLU6TGI1?src=qr", INSTAGRAM: "" }, // decoded from Tom's QR codes; Instagram "" = hidden
  ORGANISER: "[YOUR BRAND]"
};
/* ===================================================================== */

const VI = {
  tagline:"CHƠI NHƯ NHÀ VÔ ĐỊCH", prizePool:"TỔNG GIẢI THƯỞNG 10.000.000+ VNĐ", signup:"ĐĂNG KÝ NGAY",
  limit:"Giới hạn 144 VĐV · 48 người mỗi hạng đấu", detailsTag:"THÔNG TIN CHÍNH", detailsH:"THÔNG TIN GIẢI ĐẤU",
  fmtH:"THỂ THỨC", fmtP:"Đôi nam nữ · 3 hạng đấu", plH:"VẬN ĐỘNG VIÊN", plP:"48 người mỗi hạng (24 đội) · tổng 144",
  feeH:"LỆ PHÍ", feeP:"mỗi người", dateH:"NGÀY & GIỜ", venueH:"ĐỊA ĐIỂM", maps:"Mở Google Maps ›",
  refH:"TRỌNG TÀI", refP:"Trọng tài điều hành toàn bộ giải và bắt mọi pha bóng trong/ngoài. Mỗi game 11 điểm, chỉ cần hơn 1 điểm là thắng.", payP:"Thanh toán qua QR ngân hàng hoặc tiền mặt tại giải", foodH:"ĐỒ ĂN & THỨC UỐNG", foodP:"CÓ BÁN ĐỒ ĂN & THỨC UỐNG TẠI SÂN", duprH:"TÍNH ĐIỂM DUPR",
  prizeTag:"MỖI HẠNG ĐẤU · MỖI ĐỘI", prizesH:"10.000.000+ VNĐ TIỀN THƯỞNG", podiumPh:"[ẢNH BỤC TRAO GIẢI / CÚP]",
  p1a:"Tiền mặt mỗi đội", p1b:"Mỗi VĐV nhận một vợt Facolos EliteX", p1c:"Cúp", p1d:"Huy chương",
  prizeNote:"Giải thưởng áp dụng cho cả 3 hạng đấu: Cơ bản, Trung cấp và Nâng cao.",
  winLine:"Giành vợt Facolos EliteX, cây vợt dân chuyên tin dùng", schedTag:"NGÀY THI ĐẤU", schedH:"LỊCH THI ĐẤU",
  s1:"CƠ BẢN · 2.0–2.5", s1d:"Check-in, vòng bảng, chung kết và trao huy chương.", s2:"TRUNG CẤP · 2.5–3.0", s2d:"Check-in, vòng bảng, chung kết và trao huy chương.",
  s3:"NÂNG CAO · 3.0–3.5", s3d:"Check-in, vòng bảng, chung kết và trao huy chương.", schedNote:"Thời gian là dự kiến và có thể thay đổi.",
  faqTag:"CẦN BIẾT TRƯỚC KHI THI ĐẤU", faqH:"LUẬT & HỎI ĐÁP",
  q1:"Tôi đăng ký hạng nào?", a1:"Cơ bản: DUPR 2.0–2.5, Trung cấp: 2.5–3.0, Nâng cao: 3.0–3.5. Dùng điểm DUPR của bạn; nếu chưa có, hãy tự đánh giá trung thực. VĐV có điểm ở ranh giới (2.5 hoặc 3.0) được chọn một trong hai hạng. Hạng của đội tính theo VĐV có điểm cao hơn. Ban tổ chức có thể điều chỉnh VĐV hoặc đội sang hạng khác để đảm bảo công bằng.",
  q2:"Tôi chưa có đồng đội, vẫn tham gia được chứ?", a2:"Được. Nhắn tin cho chúng tôi qua Zalo kèm điểm trình độ và giới tính, chúng tôi sẽ ghép đôi bạn với người cùng trình độ.",
  q3:"Nếu một hạng đấu không đủ người thì sao?", a3:"Nếu một hạng không đủ người, chúng tôi có thể gộp với hạng gần nhất. Nếu bạn không muốn thi đấu ở hạng đã gộp, bạn được hoàn lại toàn bộ lệ phí.",
  q4:"Tôi cần mang theo gì?", b1:"Vợt của bạn", b2:"Giày chơi sân không để lại vết", b3:"Khăn và bình nước (có bán đồ ăn, thức uống tại sân, không cần mang đồ ăn)", b4:"Giấy tờ tùy thân để check-in",
  q5:"Áp dụng luật nào?", a5:"Áp dụng luật USA Pickleball tiêu chuẩn. Mỗi game 11 điểm, chỉ cần hơn 1 điểm là thắng. Trọng tài điều hành toàn bộ giải và bắt mọi pha bóng trong/ngoài; quyết định của trọng tài là cuối cùng.",
  spTag:"ĐỒNG HÀNH CÙNG", spRole:"ĐỐI TÁC CHÍNH THỨC · NHÀ TÀI TRỢ CHÍNH", ctaH:'ĐỪNG BỎ LỠ <span class="lime">KỶ NGUYÊN ELITE</span>', org:"Tổ chức bởi",
  suTag:"NHẮN TIN ĐỂ GIỮ SUẤT", suH:"CÁCH ĐĂNG KÝ", st1:"Nhắn tin cho chúng tôi qua Zalo hoặc WhatsApp kèm tên bạn, tên đồng đội, hạng đấu và điểm DUPR của cả hai.",
  st2:"Thanh toán 550.000 VNĐ mỗi người qua QR ngân hàng (chúng tôi gửi khi bạn nhắn tin) hoặc tiền mặt vào ngày thi đấu.", st3:"Chúng tôi xác nhận suất của bạn.",
  msgZ:"NHẮN TIN QUA ZALO", msgW:"NHẮN TIN QUA WHATSAPP", suNote:"Suất đăng ký theo thứ tự ai đến trước · 48 người mỗi hạng",
  q6:"Lệ phí bao nhiêu và thanh toán thế nào?", a6:"Lệ phí là 550.000 VNĐ mỗi người. Thanh toán qua QR ngân hàng (chúng tôi gửi khi bạn nhắn tin qua Zalo hoặc WhatsApp) hoặc tiền mặt vào ngày thi đấu."
};
const EN = {};
document.querySelectorAll("[data-i18n]").forEach(el => { EN[el.dataset.i18n] ??= el.innerHTML; });

const fmtVND = (n, lang) => lang === "vi" ? n.toLocaleString("de-DE") + " VNĐ" : n.toLocaleString("en-US") + " VND";
const pick = (v, lang) => (typeof v === "object" ? v[lang] : v);

function render(lang) {
  document.documentElement.lang = lang;
  const D = lang === "vi" ? VI : EN;
  document.querySelectorAll("[data-i18n]").forEach(el => { const t = D[el.dataset.i18n]; if (t) el.innerHTML = t; });
  document.querySelectorAll("[data-cfg]").forEach(el => {
    const k = el.dataset.cfg; if (k === "FEE") el.textContent = fmtVND(CONFIG.ENTRY_FEE, lang);
    else if (CONFIG[k] != null) el.textContent = pick(CONFIG[k], lang);
  });
  document.querySelectorAll("[data-money]").forEach(el => el.textContent = fmtVND(+el.dataset.money, lang));
  document.getElementById("divList").innerHTML = CONFIG.DIVISIONS.map(d => `<li>${d[lang]} · DUPR ${d.range}</li>`).join("");
  document.querySelectorAll("#timeline time").forEach((t, i) => t.textContent = CONFIG.SCHEDULE[i] || t.textContent);
  document.querySelectorAll("[data-signup]").forEach(a => { a.href = CONFIG.SIGNUP_URL || "#signup"; if (CONFIG.SIGNUP_URL) { a.target = "_blank"; a.rel = "noopener"; } });
  document.querySelectorAll("[data-maps]").forEach(a => a.href = CONFIG.MAPS_URL);
  document.querySelectorAll("[data-link]").forEach(a => { const u = CONFIG.LINKS[a.dataset.link]; a.href = u || "#"; if (!u && a.dataset.link === "INSTAGRAM") a.hidden = true; });
  document.querySelectorAll(".lang [data-l]").forEach(s => s.classList.toggle("on", s.dataset.l === lang));
  try { localStorage.setItem("fc-lang", lang); } catch (e) {}
}
let lang = (() => { try { return localStorage.getItem("fc-lang"); } catch (e) {} })() || "en";
if (new URLSearchParams(location.search).get("lang") === "vi") lang = "vi";
render(lang);
document.getElementById("langBtn").onclick = () => render(lang = lang === "en" ? "vi" : "en");

// Accordions
document.querySelectorAll(".item button").forEach(b => b.addEventListener("click", () => {
  const open = b.getAttribute("aria-expanded") === "true";
  b.setAttribute("aria-expanded", String(!open));
  document.getElementById(b.getAttribute("aria-controls")).hidden = open;
}));

// Reveal on scroll
const els = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
} else els.forEach(el => el.classList.add("in"));

function toast(msg){let t=document.getElementById("fc-toast");if(!t){t=document.createElement("div");t.id="fc-toast";t.style.cssText="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:rgba(5,8,5,.92);color:#C6FF00;border:1px solid rgba(198,255,0,.4);padding:12px 20px;border-radius:999px;font:600 14px Saira,sans-serif;z-index:9999;box-shadow:0 0 24px rgba(198,255,0,.25);transition:opacity .3s";document.body.appendChild(t);}t.textContent=msg;t.style.opacity=1;clearTimeout(t._h);t._h=setTimeout(()=>t.style.opacity=0,2500);}
