/* =====================================================================
   CONFIG — EDIT EVERYTHING HERE. Values in [BRACKETS] are placeholders.
   The page fills itself from this object (both EN and VI).
   ===================================================================== */
const CONFIG = {
  SIGNUP_URL: "",                        // OPTIONAL override. "" = SIGN UP buttons scroll to the "How to sign up" section
  DATE:    { en: "SUN 15 NOV 2026", vi: "Chủ Nhật, 15/11/2026" },
  START:   "08:00",
  END:     "21:30+",
  VENUE:   "PAPI POINT SOCIAL",
  ADDRESS: "2 Trần Hữu Tước, Đà Nẵng",   // [CONFIRM ADDRESS]
  CITY:    "ĐÀ NẴNG",
  MAPS_URL: "https://maps.app.goo.gl/DodEvhsAraNEZ1tYA",
  DUPR:    { en: "NO", vi: "KHÔNG" },
  ENTRY_FEE: 550000,                     // VND per player
  DIVISIONS: [                           // name + DUPR range
    { en: "BEGINNER · OPEN DOUBLES",     vi: "CƠ BẢN · ĐÔI TỰ DO",    range: "2.0–2.5" },
    { en: "INTERMEDIATE · OPEN DOUBLES", vi: "TRUNG CẤP · ĐÔI TỰ DO", range: "2.5–3.0" },
    { en: "ADVANCED · MEN’S DOUBLES",     vi: "NÂNG CAO · ĐÔI NAM",  range: "3.0–3.5" }
  ],
  SCHEDULE: ["08:00–12:30", "13:00–17:30", "17:30–21:30+"], // Morning Beginner, Afternoon Intermediate, Evening Advanced
  LINKS: { ZALO: "https://zalo.me/84798350171", WHATSAPP: "https://wa.me/447832428071", INSTAGRAM: "" }, // direct links from Tom; Instagram "" = hidden
  ORGANISER: "Friendly Pickleball Da Nang"
};
/* ===================================================================== */

const VI = {
  tagline:"CHƠI NHƯ NHÀ VÔ ĐỊCH", prizePool:'<span class="pl">6 VỢT FACOLOS ELITE X 16MM</span><br><span class="amp">&amp;</span><br><span class="pl">GIẢI THƯỞNG 10.000.000+ VNĐ</span>', signup:"ĐĂNG KÝ NGAY",
  limit:"Số suất có hạn · 24 đội mỗi hạng đấu", detailsTag:"THÔNG TIN CHÍNH", detailsH:"THÔNG TIN GIẢI ĐẤU",
  fmtH:"THỂ THỨC", fmtP:"Đôi tự do · 3 hạng đấu", fmtNote:"Không giới hạn giới tính, ghép cặp tự do: đôi nam, đôi nữ hay nam nữ đều được. Riêng hạng Nâng cao 3.0–3.5 chỉ dành cho đôi nam.", plH:"SỐ ĐỘI", plBig:"24 ĐỘI MỖI HẠNG", plP:"Số suất có hạn — ai đăng ký trước được trước", prH:"GIẢI THƯỞNG", prBig:"6 VỢT ELITE X 16MM", prP:"+ quỹ thưởng 10.000.000+ VNĐ, huy chương & cúp",
  feeH:"LỆ PHÍ", feeP:"mỗi người", dateH:"NGÀY & GIỜ", venueH:"ĐỊA ĐIỂM", maps:"Mở Google Maps ›",
  refH:"TRỌNG TÀI", refP:"Trọng tài điều hành toàn bộ giải và bắt mọi pha bóng trong/ngoài. Mỗi game 11 điểm, chỉ cần hơn 1 điểm là thắng.", payP:"thanh toán qua QR ngân hàng hoặc tiền mặt tại giải", foodH:"ĐỒ ĂN & THỨC UỐNG", foodP:"CÓ BÁN ĐỒ ĂN & THỨC UỐNG TẠI SÂN", duprH:"TÍNH ĐIỂM DUPR",
  prizeTag:"MỖI HẠNG ĐẤU · MỖI ĐỘI", prizesH:'<span class="pl">6 VỢT FACOLOS ELITE X 16MM</span><br><span class="amp">&amp;</span><br><span class="pl">GIẢI THƯỞNG 10.000.000+ VNĐ</span>', extras:"Ngoài ra còn có: áo thun, bóng, huy chương và cúp",
  p1a:"Tiền mặt mỗi đội", p1b:"Mỗi VĐV nhận một vợt Elite X 16mm", p1c:"Cúp", p1d:"Huy chương",
  prizeNote:"Giải thưởng áp dụng cho cả 3 hạng đấu: Cơ bản, Trung cấp và Nâng cao.",
  winLine:"Giành vợt Elite X 16mm, cây vợt dân chuyên tin dùng", schedTag:"NGÀY THI ĐẤU", schedH:"LỊCH THI ĐẤU",
  s1:"BUỔI SÁNG · CƠ BẢN 2.0–2.5", s1d:'24 cặp · Đôi tự do<ul class="sched-rows"><li><em>08:00–10:30</em> 6 sân · Vòng loại</li><li><em>10:30–11:30</em> 4 sân · Vòng 1/8 + Tứ kết</li><li><em>11:30–12:00</em> 2 sân · Bán kết</li><li><em>12:00–12:30</em> 1 sân · Chung kết &amp; Trao giải</li></ul>', s2:"BUỔI CHIỀU · TRUNG CẤP 2.5–3.0", s2d:'24 cặp · Đôi tự do<ul class="sched-rows"><li><em>13:00–15:30</em> 6 sân · Vòng loại</li><li><em>15:30–16:30</em> 4 sân · Vòng 1/8 + Tứ kết</li><li><em>16:30–17:00</em> 2 sân · Bán kết</li><li><em>17:00–17:30</em> 1 sân · Chung kết &amp; Trao giải</li></ul>',
  s3:"BUỔI TỐI · NÂNG CAO 3.0–3.5", s3d:'24 cặp · Chỉ đôi nam<ul class="sched-rows"><li><em>17:30–20:00</em> 6 sân · Vòng loại</li><li><em>20:00–21:00</em> 4 sân · Vòng 1/8 + Tứ kết</li><li><em>21:00–21:30</em> 2 sân · Bán kết</li><li><em>21:30</em> 1 sân · Chung kết &amp; Trao giải</li></ul>', schedNote:"Mỗi buổi là một hạng đấu đôi gồm 24 cặp. Thời gian có thể thay đổi nhẹ.",
  faqTag:"CẦN BIẾT TRƯỚC KHI THI ĐẤU", faqH:"LUẬT & HỎI ĐÁP",
  q1:"Tôi đăng ký hạng nào?", a1:"Cơ bản: DUPR 2.0–2.5, Trung cấp: 2.5–3.0, Nâng cao: 3.0–3.5. Hạng Cơ bản và Trung cấp là đôi tự do: không giới hạn giới tính — đôi nam, đôi nữ hay nam nữ đều được. Hạng Nâng cao chỉ dành cho đôi nam. Dùng điểm DUPR của bạn; nếu chưa có, hãy tự đánh giá trung thực. VĐV có điểm ở ranh giới (2.5 hoặc 3.0) được chọn một trong hai hạng. Hạng của đội tính theo VĐV có điểm cao hơn. Ban tổ chức có thể điều chỉnh VĐV hoặc đội sang hạng khác để đảm bảo công bằng.",
  q2:"Tôi chưa có đồng đội, vẫn tham gia được chứ?", a2:"Được. Nhắn tin cho chúng tôi qua Zalo kèm điểm trình độ và giới tính, chúng tôi sẽ ghép đôi bạn với người cùng trình độ.",
  q3:"Nếu một hạng đấu không đủ người thì sao?", a3:"Nếu một hạng không đủ người, chúng tôi có thể gộp với hạng gần nhất. Nếu bạn không muốn thi đấu ở hạng đã gộp, bạn được hoàn lại toàn bộ lệ phí.",
  q4:"Tôi cần mang theo gì?", b1:"Vợt của bạn", b2:"Giày chơi sân không để lại vết", b3:"Khăn và bình nước (có bán đồ ăn, thức uống tại sân, không cần mang đồ ăn)", b4:"Giấy tờ tùy thân để check-in",
  q5:"Áp dụng luật nào?", a5:"Áp dụng luật USA Pickleball tiêu chuẩn. Mỗi game 11 điểm, chỉ cần hơn 1 điểm là thắng. Trọng tài điều hành toàn bộ giải và bắt mọi pha bóng trong/ngoài; quyết định của trọng tài là cuối cùng.",
  spTag:"ĐỒNG HÀNH CÙNG", spRole:"ĐỐI TÁC VỢT", spNote:"Vợt giải thưởng do Facolos tài trợ", born:"CHUNG KẾT PICKLEBALL ĐÀ NẴNG", vpaSite:"Trang web VPA", vpaMore:"Tìm hiểu thêm về VPA →", credit:"Vợt do Facolos tài trợ", ctaH:'ĐỪNG BỎ LỠ <span class="lime">KỶ NGUYÊN ELITE</span>', org:"Tổ chức bởi", pres:"Giới thiệu bởi", vpaTag:"VỀ VPA", vpaP1:"VPA — Vietnam Pickleball Asia — là chuỗi giải đấu pickleball mới đến từ Đà Nẵng, tổ chức các giải đấu cạnh tranh, chuyên nghiệp cho người chơi mọi trình độ.", vpaP2:"Papi Point Finals là giải đấu đầu tiên của chúng tôi, và sẽ còn nhiều giải nữa trên khắp Việt Nam. Nhắn tin cho chúng tôi qua Zalo hoặc WhatsApp để nhận thông tin giải tiếp theo.",
  suTag:"NHẮN TIN ĐỂ GIỮ SUẤT", suH:"CÁCH ĐĂNG KÝ", st1:"Nhắn tin cho chúng tôi qua Zalo hoặc WhatsApp kèm tên bạn, tên đồng đội, hạng đấu và điểm DUPR của cả hai.",
  st2:"Thanh toán 550.000 VNĐ mỗi người qua QR ngân hàng (chúng tôi gửi khi bạn nhắn tin) hoặc tiền mặt vào ngày thi đấu.", st3:"Chúng tôi xác nhận suất của bạn.",
  msgZ:"NHẮN TIN QUA ZALO", msgW:"NHẮN TIN QUA WHATSAPP", suNote:"Số suất có hạn — ai đăng ký trước được trước",
  q6:"Lệ phí bao nhiêu và thanh toán thế nào?", a6:"Lệ phí là 550.000 VNĐ mỗi người. Thanh toán qua QR ngân hàng (chúng tôi gửi khi bạn nhắn tin qua Zalo hoặc WhatsApp) hoặc tiền mặt vào ngày thi đấu.",
  ndNote:"Giải không tính điểm DUPR: kết quả không ảnh hưởng điểm DUPR của bạn.",
  q7:"Giải có tính điểm DUPR không?", a7:"Không. Papi Point Finals là giải không tính điểm DUPR: các trận đấu không được tính điểm và kết quả không gửi lên DUPR, nên điểm DUPR của bạn sẽ không thay đổi. Chúng tôi chỉ dùng điểm DUPR để xếp bạn vào đúng hạng đấu."
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

function toast(msg){let t=document.getElementById("fc-toast");if(!t){t=document.createElement("div");t.id="fc-toast";t.style.cssText="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:rgba(11,15,46,.94);color:#F4701E;border:1px solid rgba(244,112,30,.4);padding:12px 20px;border-radius:999px;font:600 14px Saira,sans-serif;z-index:9999;box-shadow:0 0 24px rgba(244,112,30,.25);transition:opacity .3s";document.body.appendChild(t);}t.textContent=msg;t.style.opacity=1;clearTimeout(t._h);t._h=setTimeout(()=>t.style.opacity=0,2500);}
