const fs = require('fs');
const file = 'c:/Users/gerar/Desktop/Practicador tests/index.html';
let html = fs.readFileSync(file, 'utf8');

const newCSS = `<style>
:root {
  --bg: #09090b;
  --surface: #101012;
  --surface2: #1e1e22;
  --text: #f4f4f5;
  --text-dim: #a1a1aa;
  --border: rgba(255, 255, 255, 0.08);
  --border2: rgba(255, 255, 255, 0.15);
  
  --acc: #fafafa;
  --acc-fg: #09090b;
  --acc-hover: #e4e4e7;
  
  --ok: #34d399;
  --ok-bg: rgba(52, 211, 153, 0.15);
  --err: #f87171;
  --err-bg: rgba(248, 113, 113, 0.15);
  --warn: #fbbf24;
  --warn-bg: rgba(251, 191, 36, 0.15);

  --r: 12px;
  --rs: 8px;
  --tr: .2s ease;
  --sw: 268px;
}

[data-theme="light"] {
  --bg: #fafafa;
  --surface: #ffffff;
  --surface2: #f4f4f5;
  --text: #09090b;
  --text-dim: #71717a;
  --border: rgba(0, 0, 0, 0.1);
  --border2: rgba(0, 0, 0, 0.2);
  
  --acc: #18181b;
  --acc-fg: #fafafa;
  --acc-hover: #27272a;
  
  --ok: #16a34a;
  --ok-bg: rgba(22, 163, 74, 0.1);
  --err: #dc2626;
  --err-bg: rgba(220, 38, 38, 0.08);
  --warn: #d97706;
  --warn-bg: rgba(217, 119, 6, 0.1);
}

*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
body{background:var(--bg);color:var(--text);font-family:'Inter',system-ui,sans-serif;min-height:100vh;font-size:15px;line-height:1.5;transition:background-color var(--tr), color var(--tr)}
.screen{display:none}
.screen.active{display:flex;flex-direction:column;min-height:100vh;animation:fu .22s ease}
#screen-home.active,#screen-result.active{display:block}
@keyframes fu{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

.ph{display:flex;align-items:center;justify-content:space-between;padding:20px 32px;border-bottom:1px solid var(--border);gap:12px}
.hw{max-width:1100px;margin:0 auto;padding:32px 24px 80px}
.hh{display:flex;align-items:center;justify-content:space-between;margin-bottom:36px;gap:16px;flex-wrap:wrap}
.lg{display:flex;align-items:center;gap:14px}
.li{width:46px;height:46px;background:var(--surface);border:1px solid var(--border);border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,.1)}
.lt{font-size:1.1rem;font-weight:600;letter-spacing:-.02em}
.ls{font-size:.7rem;color:var(--text-dim);font-weight:500;letter-spacing:.05em;margin-top:1px;text-transform:uppercase}
.ha{display:flex;gap:10px}
.hg{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:16px}

.cc{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:22px 24px;cursor:pointer;transition:var(--tr);position:relative;overflow:hidden;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.cc:hover{border-color:var(--border2);transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.05)}
.cc:active{transform:translateY(0)}
.cn{font-size:1rem;font-weight:600;margin-bottom:14px;letter-spacing:-.01em}
.cb{display:inline-flex;align-items:center;gap:6px;font-size:.68rem;font-weight:600;letter-spacing:.05em;padding:4px 10px;border-radius:20px}
.cb .dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}

.sg{background:var(--surface2);color:var(--text-dim);border:1px solid var(--border)}.sg .dot{background:var(--text-dim)}
.sy{background:var(--warn-bg);color:var(--warn);border:1px solid rgba(251, 191, 36, 0.2)}.sy .dot{background:var(--warn)}
.sv{background:var(--ok-bg);color:var(--ok);border:1px solid rgba(52, 211, 153, 0.2)}.sv .dot{background:var(--ok)}
.es{grid-column:1/-1;text-align:center;padding:70px 20px;color:var(--text-dim)}
.es .ei{display:block;margin-bottom:14px}

.btn{border:none;cursor:pointer;font-family:'Inter',system-ui,sans-serif;font-weight:500;border-radius:var(--rs);transition:var(--tr);display:inline-flex;align-items:center;justify-content:center;gap:6px;font-size:.8rem;white-space:nowrap}
.btn:active{transform:scale(.98)}
.btn-p{background:var(--acc);color:var(--acc-fg);padding:10px 18px;font-weight:600;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.btn-p:hover{background:var(--acc-hover)}
.btn-p:disabled{opacity:.5;cursor:not-allowed;transform:none}
.btn-g{background:transparent;border:1px solid var(--border);color:var(--text);padding:9px 17px}
.btn-g:hover{background:var(--surface2)}
.btn-d{background:var(--err-bg);border:1px solid var(--err-border);color:var(--err);padding:9px 17px}
.btn-d:hover{background:rgba(248,113,113,.25)}
.btn-sm{padding:7px 12px;font-size:.75rem}

.bic{background:transparent;border:1px solid var(--border);color:var(--text-dim);border-radius:6px;padding:6px 10px;cursor:pointer;font-size:.8rem;transition:var(--tr);display:inline-flex;align-items:center}
.bic:hover{background:var(--surface2);color:var(--text)}
.bic.del{color:var(--err);border-color:var(--err-border)}
.bic.del:hover{background:var(--err-bg)}

/* theme icons */
.theme-toggle{padding:7px 10px}
.theme-toggle .icon-moon{display:none}
[data-theme="light"] .theme-toggle .icon-sun{display:none}
[data-theme="light"] .theme-toggle .icon-moon{display:block}

#screen-quiz.active{display:flex}
.ql{flex:1;display:flex;max-width:1100px;width:100%;margin:0 auto;padding:32px;gap:28px;align-items:flex-start}
.qm{flex:1;min-width:0}
.qs{width:var(--sw);flex-shrink:0;display:flex;flex-direction:column;gap:14px}
.qc{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:32px;box-shadow:0 4px 20px rgba(0,0,0,.08)}
.pbw{height:4px;background:var(--surface2);border-radius:2px;margin-bottom:22px;overflow:hidden}
.pbf{height:100%;background:var(--text);border-radius:2px;transition:width .4s ease}
.qt{font-size:1.1rem;font-weight:500;line-height:1.6;color:var(--text);margin-bottom:22px;letter-spacing:-.01em}

.qo{background:var(--surface);border:1px solid var(--border);border-radius:var(--rs);padding:12px 16px;margin-bottom:8px;cursor:pointer;font-size:.95rem;line-height:1.4;transition:border .15s ease, background .15s ease;display:flex;align-items:center;gap:12px;color:var(--text-dim)}
.qo .ol{min-width:24px;height:24px;width:24px;border-radius:6px;background:var(--surface2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:600;color:var(--text-dim);transition:var(--tr);flex-shrink:0}
.qo:hover:not(.disabled){background:var(--surface2);border-color:var(--border2);color:var(--text)}
.qo.selected{background:var(--surface2);border-color:var(--text);color:var(--text)}
.qo.selected .ol{background:var(--text);border-color:var(--text);color:var(--bg)}
.qo.correct{background:var(--ok-bg);border-color:var(--ok);color:var(--ok)}
.qo.correct .ol{background:var(--ok);border-color:var(--ok);color:var(--bg)}
.qo.incorrect{background:var(--err-bg);border-color:var(--err);color:var(--err)}
.qo.incorrect .ol{background:var(--err);border-color:var(--err);color:#fff}
.qo.disabled{pointer-events:none}

.cdw{height:3px;background:var(--surface2);border-radius:2px;margin-top:12px;overflow:hidden;display:none}
.cdf{height:100%;border-radius:2px;width:100%}
.cdf.ok-bar{background:var(--ok)}
.cdf.fail-bar{background:var(--err)}

.qa{margin-top:22px;display:flex;gap:10px}
.qa .btn{flex:1;padding:12px;font-size:.85rem}

.streak{font-size:.82rem;font-weight:600;color:var(--warn);letter-spacing:.02em;min-height:20px;transition:var(--tr)}

.sg3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}
.sc{background:var(--surface);border:1px solid var(--border);border-radius:var(--rs);padding:12px 8px;text-align:center}
.sn{font-size:1.3rem;font-weight:700;display:block;line-height:1;margin-bottom:4px;letter-spacing:-.02em}
.sl{font-size:.65rem;color:var(--text-dim);font-weight:500;letter-spacing:.05em;text-transform:uppercase}
.npc{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:22px}
.npt{font-size:.7rem;font-weight:600;color:var(--text-dim);letter-spacing:.05em;margin-bottom:12px;text-transform:uppercase}
.ng{display:grid;grid-template-columns:repeat(auto-fill,minmax(32px,1fr));gap:6px;max-height:220px;overflow-y:auto;padding:2px}

.gi{aspect-ratio:1;display:flex;align-items:center;justify-content:center;background:var(--surface2);border:1px solid var(--border);border-radius:6px;font-size:.7rem;color:var(--text-dim);font-weight:600;cursor:pointer;transition:var(--tr);position:relative}
.gi:hover{background:var(--border2);color:var(--text)}
.gi.active{border:1px solid var(--text);color:var(--text);background:var(--surface)}
.gi.done{background:var(--text);color:var(--bg);border:none}
.gi.fdone{background:var(--err-bg);color:var(--err);border:1px solid var(--err-border)}
.gi.wf::after{content:'!';position:absolute;top:-4px;right:-4px;background:var(--warn);color:#000;font-size:9px;font-weight:800;width:14px;height:14px;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:10}

.rw{max-width:480px;margin:0 auto;padding:60px 24px}
.rcrd{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:40px 32px;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.08)}
.re{font-size:3rem;display:block;margin-bottom:16px}
.rcrd h1{font-size:1.5rem;font-weight:700;letter-spacing:-.02em;margin-bottom:28px}
.rsg{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:28px}
.rsc{background:var(--surface2);border:1px solid var(--border);border-radius:var(--rs);padding:14px 8px}
.rsn{font-size:1.4rem;font-weight:700;display:block;letter-spacing:-.02em;margin-bottom:2px}
.rsl{font-size:.65rem;color:var(--text-dim);font-weight:500;letter-spacing:.05em;text-transform:uppercase}

#screen-editor.active{display:flex}
.el{flex:1;display:flex;max-width:1100px;width:100%;margin:0 auto;padding:32px;gap:28px;align-items:flex-start}
.esb{width:var(--sw);flex-shrink:0}
.em{flex:1;min-width:0}
.pc{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:22px;margin-bottom:16px}
.ptit{font-size:.7rem;font-weight:600;color:var(--text-dim);letter-spacing:.05em;margin-bottom:14px;text-transform:uppercase}
.inp{background:var(--surface2);border:1px solid var(--border);color:var(--text);padding:10px 14px;border-radius:6px;font-family:'Inter',system-ui,sans-serif;font-size:.85rem;width:100%;margin-bottom:10px;transition:var(--tr)}
.inp:focus{outline:none;border-color:var(--border2);background:var(--surface)}
.inp::placeholder{color:var(--text-dim)}
textarea.inp{resize:vertical;min-height:80px}
.cr{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:var(--surface);border:1px solid transparent;border-radius:6px;margin-bottom:6px;cursor:pointer;transition:var(--tr);font-size:.85rem}
.cr:hover{background:var(--surface2)}
.cr.sel{background:var(--surface2);border:1px solid var(--border2);color:var(--text);font-weight:500}
.qr{background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:11px 14px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:.85rem;transition:var(--tr)}
.qr:hover{border-color:var(--border2)}
.qrt{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.fmc{background:var(--surface2);border:1px solid var(--border);border-radius:var(--r);padding:20px;margin-bottom:16px;display:none}
.fmc.open{display:block;animation:fu .15s ease}
.tabs{display:flex;gap:4px;background:var(--surface2);padding:4px;border-radius:8px;margin-bottom:20px}
.tbn{flex:1;padding:8px 12px;border:none;cursor:pointer;border-radius:6px;font-family:'Inter',system-ui,sans-serif;font-size:.75rem;font-weight:500;color:var(--text-dim);background:transparent;transition:var(--tr)}
.tbn.active{background:var(--surface);color:var(--text);box-shadow:0 1px 2px rgba(0,0,0,.05)}
.or{display:flex;gap:8px;margin-bottom:8px;align-items:center}
.or .inp{flex:1;margin:0}
.och{width:16px;height:16px;min-width:16px;accent-color:var(--ok);cursor:pointer}
.uz{border:1px dashed var(--border2);border-radius:6px;padding:24px;text-align:center;color:var(--text-dim);font-size:.8rem;transition:var(--tr);cursor:pointer;margin-bottom:12px;background:var(--surface2)}
.uz:hover{border-color:var(--text-dim);color:var(--text);background:var(--surface)}

::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:var(--border2);border-radius:3px}

@media(max-width:720px){
  .ql,.el{flex-direction:column;padding:16px 16px 60px;gap:16px}
  .qs,.esb{width:100%}
  .hw{padding:16px 16px 80px}
  .hg{grid-template-columns:1fr}
  .hh{flex-direction:column;align-items:flex-start;gap:14px}
  .ha{width:100%}
  .ha .btn{flex:1}
  .qc{padding:24px 20px}
  .qt{font-size:1rem}
  .ph{padding:16px 20px}
  .sg3{grid-template-columns:1fr 1fr}
  .rw{padding:30px 16px}
}
</style>
<script>!function(){try{var t=localStorage.getItem("DB_QUIZ_THEME")||"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){}}()</script>`;

html = html.replace(/<style>[\s\S]*?<\/style>/, newCSS);
fs.writeFileSync(file, html);
