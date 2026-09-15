/* ===================== EFFECT LIBRARY DATA ===================== */
const EFFECTS = [
  // Xuất hiện
  {id:'fade-in',   cat:'Xuất hiện', name:'Mờ dần vào',  en:'Fade In',   dur:'0.4–0.6s', tip:'Vào cảnh êm, hợp banner cao cấp hoặc lớp nền phía sau.'},
  {id:'pop-in',    cat:'Xuất hiện', name:'Bật vào',     en:'Pop In',    dur:'0.3–0.5s', tip:'Tạo cảm giác nảy nhẹ khi logo hoặc CTA xuất hiện lần đầu.'},
  {id:'zoom-in',   cat:'Xuất hiện', name:'Phóng vào',   en:'Zoom In',   dur:'0.4–0.6s', tip:'Sản phẩm hoặc số liệu lớn dần để thu hút mắt ngay giây đầu.'},
  {id:'zoom-out',  cat:'Xuất hiện', name:'Thu về',      en:'Zoom Out',  dur:'0.5–0.7s', tip:'Mở cảnh như đang tiến lại gần, hợp cảnh mở đầu cho sản phẩm.'},
  {id:'slide-in',  cat:'Xuất hiện', name:'Trượt vào',   en:'Slide In',  dur:'0.4–0.6s', tip:'Dòng chữ hoặc badge khuyến mãi trượt vào từ cạnh banner.'},
  {id:'bounce-in', cat:'Xuất hiện', name:'Nảy vào',     en:'Bounce In', dur:'0.6–0.9s', tip:'Vào cảnh vui, năng động — hợp CTA hoặc mascot thương hiệu.'},
  {id:'drop-in',   cat:'Xuất hiện', name:'Rơi vào',     en:'Drop In',   dur:'0.5–0.7s', tip:'Rơi từ trên xuống kèm nảy nhẹ khi chạm đất — hợp badge giảm giá.'},
  {id:'blur-in',   cat:'Xuất hiện', name:'Nét dần',     en:'Blur In',   dur:'0.4–0.6s', tip:'Từ mờ sang rõ, tạo cảm giác lấy nét — hợp mở đầu banner phim/sự kiện.'},
  {id:'roll-in',   cat:'Xuất hiện', name:'Cuộn vào',    en:'Roll In',   dur:'0.5–0.7s', tip:'Vừa xoay vừa trượt vào — hợp icon tròn hoặc huy hiệu.'},

  // Thoát cảnh
  {id:'fade-out',   cat:'Thoát cảnh', name:'Mờ dần ra', en:'Fade Out',   dur:'0.3–0.5s', tip:'Dọn nhẹ nhàng một phần tử để nhường chỗ cho nội dung tiếp theo.'},
  {id:'slide-out',  cat:'Thoát cảnh', name:'Trượt ra',  en:'Slide Out',  dur:'0.3–0.5s', tip:'Đẩy badge hoặc thông điệp cũ ra khỏi khung trước khi đổi nội dung.'},
  {id:'shrink-out', cat:'Thoát cảnh', name:'Thu nhỏ ra',en:'Shrink Out', dur:'0.3–0.5s', tip:'Thu nhỏ dần rồi biến mất — hợp kết thúc một khung phụ trong banner đa cảnh.'},

  // Thu hút / nhấn nhá
  {id:'pulse',      cat:'Thu hút',  name:'Nhấp nháy phồng', en:'Pulse',      dur:'lặp liên tục', tip:'Giữ mắt ở nút "Mua ngay" mà không gây khó chịu.'},
  {id:'wiggle',     cat:'Thu hút',  name:'Lắc nhẹ',         en:'Wiggle',     dur:'lặp liên tục', tip:'Icon hoặc mascot lắc lư để tạo cảm giác sống động.'},
  {id:'shake',      cat:'Thu hút',  name:'Rung lắc',        en:'Shake',      dur:'0.4–0.6s',     tip:'Cảnh báo, đếm ngược hoặc ưu đãi có giới hạn thời gian.'},
  {id:'wave',       cat:'Thu hút',  name:'Gợn sóng',        en:'Wave',       dur:'lặp liên tục', tip:'Dãy icon hoặc chữ nhấp nhô nối tiếp — hợp banner âm nhạc, giải trí.'},
  {id:'flash',      cat:'Thu hút',  name:'Chớp sáng',       en:'Flash',      dur:'0.2–0.3s',     tip:'Nhấn mạnh số % giảm giá hoặc từ khóa "MỚI".'},
  {id:'scale-loop', cat:'Thu hút',  name:'Phồng to nhỏ',    en:'Scale Loop', dur:'lặp liên tục', tip:'Biên độ lớn hơn Pulse — hợp banner cần độ "gắt" cao.'},
  {id:'rotate',     cat:'Thu hút',  name:'Xoay tròn',       en:'Rotate',     dur:'lặp liên tục', tip:'Huy hiệu khuyến mãi hoặc icon xoay để giữ chuyển động nền.'},
  {id:'flip',       cat:'Thu hút',  name:'Lật thẻ',         en:'Flip',       dur:'0.5–0.7s',     tip:'Chuyển từ giá cũ sang giá mới, hoặc đổi thông điệp giữa banner.'},
  {id:'heartbeat',  cat:'Thu hút',  name:'Nhịp tim',        en:'Heartbeat',  dur:'lặp liên tục', tip:'Hai nhịp phồng liên tiếp rồi nghỉ — gấp gáp hơn Pulse, hợp flash sale.'},
  {id:'swing',      cat:'Thu hút',  name:'Đung đưa',        en:'Swing',      dur:'lặp liên tục', tip:'Đung đưa như con lắc quanh điểm treo — hợp biển hiệu, mascot treo.'},
  {id:'float',      cat:'Thu hút',  name:'Bồng bềnh',       en:'Float',      dur:'lặp liên tục', tip:'Trôi nhẹ lên xuống — hợp sản phẩm bay, hình ảnh nhẹ nhàng.'},
  {id:'ring-pulse', cat:'Thu hút',  name:'Vòng lan tỏa',    en:'Ring Pulse', dur:'lặp liên tục', tip:'Vòng sáng lan ra từ nút — ngôn ngữ quen thuộc của nút bấm trên di động.'},

  // Ánh sáng
  {id:'light-sweep', cat:'Ánh sáng', name:'Quét sáng', en:'Light Sweep', dur:'0.6–0.8s',     tip:'Vệt sáng lướt qua logo/nút để tạo cảm giác cao cấp, bóng bẩy.'},
  {id:'flare',       cat:'Ánh sáng', name:'Bùng sáng', en:'Flare',       dur:'0.4–0.6s',     tip:'Đốm sáng bùng lên tại một điểm — hợp cảnh "chốt" ưu đãi.'},
  {id:'shimmer',     cat:'Ánh sáng', name:'Sáng viền', en:'Shimmer',     dur:'lặp liên tục', tip:'Viền phát sáng nhẹ quanh CTA để nút luôn nổi bật.'},
  {id:'glint',       cat:'Ánh sáng', name:'Lóe sáng',  en:'Glint',       dur:'lặp liên tục', tip:'Ánh sáng lóe nhanh, nhỏ và dồn dập hơn Flare — hợp kim loại, đá quý.'},
  {id:'spotlight',   cat:'Ánh sáng', name:'Đèn rọi',   en:'Spotlight',   dur:'lặp liên tục', tip:'Vệt sáng tròn di chuyển qua lại như đèn sân khấu rọi vào sản phẩm.'},

  // Chữ & số
  {id:'typewriter', cat:'Chữ & số', name:'Gõ chữ',      en:'Typewriter', dur:'lặp liên tục', tip:'Chữ hiện dần từng ký tự — hợp câu slogan hoặc dòng thông báo.'},
  {id:'letter-pop', cat:'Chữ & số', name:'Chữ bật lần lượt', en:'Letter Pop', dur:'lặp liên tục', tip:'Từng chữ cái bật vào nối tiếp nhau — hợp tiêu đề ngắn, dồn dập.'},
  {id:'count-up',   cat:'Chữ & số', name:'Số chạy tăng', en:'Count Up',  dur:'lặp liên tục', tip:'Số % giảm giá hoặc số lượng chạy tăng dần — hợp banner khuyến mãi.'},

  // Chuyển cảnh
  {id:'wipe',      cat:'Chuyển cảnh', name:'Quét lộ',   en:'Wipe',      dur:'0.4–0.6s', tip:'Nội dung lộ dần theo một hướng quét — hợp chuyển giữa 2 thông điệp.'},
  {id:'crossfade', cat:'Chuyển cảnh', name:'Hòa tan',   en:'Crossfade', dur:'0.5–0.8s', tip:'Mờ dần thông điệp cũ trong khi thông điệp mới hiện lên chồng lên.'},
];
const CATS = ['Xuất hiện','Thoát cảnh','Thu hút','Ánh sáng','Chữ & số','Chuyển cảnh'];
const EFFECT_MAP = Object.fromEntries(EFFECTS.map(e=>[e.id,e]));

function stageMarkup(id){
  if(id==='wave') return `<div class="wave-bars"><i></i><i></i><i></i><i></i><i></i></div>`;
  if(id==='flare') return `<div class="flare-wrap"><div class="flare-glow anim-flare"></div><div class="demo-box" style="position:relative;">AD</div></div>`;
  if(id==='light-sweep') return `<div class="sweep-wrap"><div class="sweep-bar anim-sweep"></div></div>`;
  if(id==='shimmer') return `<div class="demo-box anim-shimmer">AD</div>`;
  if(id==='spotlight') return `<div class="spot-wrap"><div class="spot-bar anim-spot-bar"></div></div>`;
  if(id==='typewriter') return `<span class="type-wrap mono">SALE 50%</span>`;
  if(id==='letter-pop') return `<div class="letters-wrap"><i>B</i><i>A</i><i>N</i><i>G</i><i>!</i></div>`;
  if(id==='count-up') return `<span class="count-num">0%</span>`;
  if(id==='crossfade') return `<div class="crossfade-wrap"><div class="demo-box cf-a">AD</div><div class="demo-box cf-b">NEW</div></div>`;
  return `<div class="stage-ghost"></div><div class="demo-box anim-${id}">AD</div>`;
}

// hiệu ứng nào có dur==='lặp liên tục' thì là loại lặp vô hạn (Play/Dừng),
// còn lại là loại chạy 1 lần rồi giữ nguyên khung hình cuối (Play/Replay)
function isLoopingEffect(e){ return e.dur === 'lặp liên tục'; }

let activeCat = 'Tất cả';
function renderLibrary(){
  const chipRow = document.getElementById('chipRow');
  chipRow.innerHTML = ['Tất cả',...CATS].map(c=>`<button class="chip ${c===activeCat?'active':''}" data-cat="${c}">${c}</button>`).join('');
  chipRow.querySelectorAll('.chip').forEach(btn=>{
    btn.addEventListener('click',()=>{ activeCat = btn.dataset.cat; renderLibrary(); });
  });
  const cats = activeCat==='Tất cả' ? CATS : [activeCat];
  const container = document.getElementById('libraryContent');
  container.innerHTML = cats.map(cat=>{
    const items = EFFECTS.filter(e=>e.cat===cat);
    return `
      <p class="cat-label">${cat.toUpperCase()} · ${items.length} hiệu ứng</p>
      <div class="effect-grid">
        ${items.map(e=>`
          <div class="effect-card" id="card-${e.id}" data-id="${e.id}" data-loop="${isLoopingEffect(e)?1:0}">
            <div class="stage">
              <span class="stage-dur mono">${e.dur}</span>
              <div class="stage-content">${stageMarkup(e.id)}</div>
              <button type="button" class="play-btn">▶ Play</button>
            </div>
            <div class="card-body">
              <p class="card-name-en mono">${e.en}</p>
              <p class="card-name">${e.name}</p>
              <p class="card-tip">${e.tip}</p>
            </div>
          </div>`).join('')}
      </div>`;
  }).join('');
  wireUpEffectCards(container);
}
renderLibrary();

/* ===================== PLAY / SELECT LOGIC ===================== */
// Bấm vào thẻ để "chọn" (highlight); bấm nút Play để chạy hiệu ứng.
// - Hiệu ứng chạy 1 lần (Xuất hiện/Thoát cảnh/Chuyển cảnh...): chạy xong giữ
//   nguyên khung hình cuối, không tự lặp lại rồi biến mất. Bấm lại để Replay.
// - Hiệu ứng lặp liên tục (Pulse, Shimmer...): nút chuyển thành "Dừng", bấm để
//   dừng lại tại chỗ (không tự tắt biến mất), bấm Play lại để chạy lại từ đầu.
const countUpTimers = new Map();

function wireUpEffectCards(container){
  container.querySelectorAll('.effect-card').forEach(card=>{
    const id = card.dataset.id;
    const isLoop = card.dataset.loop === '1';
    const btn = card.querySelector('.play-btn');
    const stageContent = card.querySelector('.stage-content');

    card.addEventListener('click', (ev)=>{
      if(ev.target.closest('.play-btn')) return;
      card.classList.toggle('selected');
    });

    btn.addEventListener('click', (ev)=>{
      ev.stopPropagation();
      if(isLoop){
        toggleLoopingEffect(card, stageContent, id, btn);
      } else {
        playOnceEffect(card, stageContent, id, btn);
      }
    });
  });
}

function restartStage(stageContent, id){
  stageContent.innerHTML = '';
  void stageContent.offsetWidth; // force reflow so the new nodes restart at frame 0
  stageContent.innerHTML = stageMarkup(id);
}

function playOnceEffect(card, stageContent, id, btn){
  card.classList.add('is-playing');
  restartStage(stageContent, id);
  btn.textContent = '↻ Replay';
  btn.classList.add('is-active');
}

function toggleLoopingEffect(card, stageContent, id, btn){
  const nowPlaying = !card.classList.contains('is-playing');
  card.classList.toggle('is-playing', nowPlaying);
  if(nowPlaying){
    restartStage(stageContent, id);
    btn.textContent = '■ Dừng';
    btn.classList.add('is-active');
    if(id === 'count-up') startCountUp(card, stageContent);
  } else {
    // dừng lại tại chỗ, giữ nguyên khung hình hiện tại — không reset, không biến mất
    btn.textContent = '▶ Play';
    btn.classList.remove('is-active');
    if(id === 'count-up') stopCountUp(card);
  }
}

function startCountUp(card, stageContent){
  stopCountUp(card);
  const start = Date.now();
  const timer = setInterval(()=>{
    const el = stageContent.querySelector('.count-num');
    if(!el){ stopCountUp(card); return; }
    const n = Math.floor(((Date.now()-start)/140)%100);
    el.textContent = n+'%';
  },140);
  countUpTimers.set(card, timer);
}
function stopCountUp(card){
  const t = countUpTimers.get(card);
  if(t){ clearInterval(t); countUpTimers.delete(card); }
}

/* ===================== TABS ===================== */
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    document.getElementById('view-'+btn.dataset.view).classList.add('active');
  });
});

/* ===================== VIDEO THAM KHẢO ===================== */
// VIDEOS được định nghĩa trong videos-data.js (nạp trước file này trong index.html)
function renderVideos(){
  const grid = document.getElementById('videoGrid');
  if(typeof VIDEOS === 'undefined' || !VIDEOS.length){
    grid.innerHTML = `<div class="video-empty">Chưa có video tham khảo nào. Mở file <code>videos-data.js</code> ở thư mục gốc để xem hướng dẫn: copy file .mp4 vào thư mục <code>videos/</code>, rồi thêm 1 dòng vào mảng VIDEOS trong file đó.</div>`;
    return;
  }
  grid.innerHTML = VIDEOS.map((v,i)=>`
    <div class="video-card">
      <div class="video-frame" id="video-frame-${i}">
        <video controls preload="metadata" id="video-${i}"><source src="${v.file}"></video>
      </div>
      <div class="video-card-body">
        <p class="video-card-title">${v.title}</p>
        ${v.note ? `<p class="video-card-note">${v.note}</p>` : ''}
      </div>
    </div>`).join('');
  VIDEOS.forEach((v,i)=>{
    const vid = document.getElementById('video-'+i);
    vid.addEventListener('error',()=>{
      document.getElementById('video-frame-'+i).innerHTML =
        `<div class="video-missing">Không tìm thấy file <code>${v.file}</code> — kiểm tra lại: file đã copy vào đúng thư mục videos/ chưa, và tên file có khớp chính xác với dòng khai báo trong videos-data.js không (kể cả hoa/thường).</div>`;
    });
  });
}
renderVideos();
