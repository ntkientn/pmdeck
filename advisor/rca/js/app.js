(()=>{
const D=RCA_DATA,E=RCA_ENGINE,G=D.groups;let L="vi",M=null,V="home",saved=null,isSample=false;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],U=()=>D.ui[L];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const meth=()=>D.methods.find(x=>x.id==M);
const hasData=()=>$$("#main input,#main textarea").some(e=>e.value.trim());
const rs=(x,l)=>Array.isArray(x)?x.map(y=>rs(y,l)):x&&typeof x=="object"?(x.vi!==undefined&&x.en!==undefined?x[l]:Object.fromEntries(Object.entries(x).map(([k,v])=>[k,rs(v,l)]))):x;
const tr=k=>D.T[k]?D.T[k][L=="vi"?0:1]:k;
const hw=k=>`<span class="hw"><button type="button" class="hq" aria-label="Hint">?</button><span class="tip" role="tooltip">${esc(D.hints[L][k]||tr(k))}</span></span>`;
const lb=(t,k)=>`<div class="lb">${t}${hw(k)}</div>`;
$("#deck").href=D.deckUrl;

const html=b=>b.map(x=>x.t=="h"?`<h2>${esc(x.x)}</h2>`:x.t=="p"?`<p>${esc(x.x)}</p>`:x.t=="ul"?`<ul>${x.x.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>`:x.t=="svg"?x.x:`<div class="tw"><table><tr>${x.head.map(h=>`<th>${esc(h)}</th>`).join("")}</tr>${x.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</table></div>`).join("");
const md=b=>b.map(x=>x.t=="h"?`## ${x.x}`:x.t=="p"?x.x:x.t=="ul"?x.x.map(i=>"- "+i).join("\n"):x.t=="svg"?"":`| ${x.head.join(" | ")} |\n|${x.head.map(()=>"---").join("|")}|\n`+x.rows.map(r=>`| ${r.join(" | ")} |`).join("\n")).join("\n\n");

function home(){V="home";M=null;isSample=false;const u=U();$("#main").className="wide";
 $("#main").innerHTML=`<h1>${u.h}</h1><p class="sub">${u.s}</p><div class="tabs">`+G.map((g,i)=>`<button class="tab g-${g.id}${i?"":" on"}" data-i="${i}">${g[L]}</button>`).join("")+`</div><div class="cols" id="cols">`+G.map(g=>`<section class="col g-${g.id}"><h2 class="gh"><i></i>${g[L]}</h2>`+D.methods.filter(m=>m.type==g.id).map(m=>`<button class="card" data-id="${m.id}"><h3>${m[L].n}</h3><p>${m[L].d}</p><small>${u.when}: ${m[L].w}</small></button>`).join("")+"</section>").join("")+"</div>";
 $$(".card").forEach(b=>b.onclick=()=>{M=b.dataset.id;saved=null;isSample=false;form()});
 const cols=$("#cols"),tabs=$$(".tab");
 tabs.forEach(t=>t.onclick=()=>cols.children[t.dataset.i].scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}));
 cols.onscroll=()=>{const i=Math.round(cols.scrollLeft/((cols.scrollWidth-cols.clientWidth)||1)*(G.length-1));tabs.forEach((t,j)=>t.classList.toggle("on",i==j))};}

const PC=[{t:"t"},{t:"n"}];
const row=(c,x,eq)=>`<div class="r${eq?" eq":""}">`+c.map((k,i)=>`<input${k.t=="n"?' type="number" step="any"':""} placeholder="${esc(k.ph?tr(k.ph):i?"#":U().item)}" value="${esc(x[i]||"")}">`).join("")+"</div>";
const gf=(x,v)=>{const l=lb(tr(x.k),x.k+"_h"),y=v[x.id];
 if(x.t=="ms")return l+`<div class="ms">`+[1,2,3,4,5].map(i=>`<label>${tr(x.k+i)}<input type="datetime-local" class="g" data-id="${x.id+i}" value="${esc(v[x.id+i]||"")}"></label>`).join("")+"</div>";
 if(x.t=="in")return l+`<input class="g" data-id="${x.id}" value="${esc(y||"")}">`;
 if(x.t=="two")return l+`<div class="r eq">`+[1,2].map(i=>`<textarea class="g" data-id="${x.id+i}" rows="2" placeholder="${i>1?"Is Not":"Is"}">${esc(v[x.id+i]||"")}</textarea>`).join("")+"</div>";
 if(x.t=="rows")return l+`<div class="gr" data-id="${x.id}">`+(y&&y.length?y:Array.from({length:x.n},()=>[])).map(z=>row(x.c,z,1)).join("")+`</div><button class="ghost addg" data-id="${x.id}">+ ${U().add}</button>`;
 return l+`<textarea class="g" ${x.id=="p"?'id="p" ':""}data-id="${x.id}" rows="${x.n||3}">${esc(y||"")}</textarea>`};

function form(){V="form";$("#main").className="";const u=U(),v=saved||{},m=meth(),n=m[L],g=G.find(x=>x.id==m.type);
 let f=`<div class="g-${m.type}"><button class="ghost" id="back">${u.back}</button><div><span class="chip">${g[L]}</span></div><h1>${n.n}</h1><p class="sub">${n.d}</p>${window.RCA_SAMPLES&&RCA_SAMPLES[M]?`<button class="ghost" id="sample">${u.sample}</button>`:""}${m.f?"":lb(u.p,"p")+`<textarea id="p" rows="2">${esc(v.p||"")}</textarea>`}`;
 if(M=="whys")f+=lb(u.chain,"chain")+[0,1,2,3,4].map(i=>`<div class="wr"><b>${i+1}</b><input class="w" placeholder="Why ${i+1}?" value="${esc((v.w||[])[i]||"")}"></div>`).join("");
 if(M=="fish")f+=lb(u.fishl,"fish")+E.cats.map((c,i)=>`<div class="lb" style="margin-top:12px">${c[L=="vi"?1:0]}${hw("c"+i)}</div><textarea class="c" data-k="${i}" rows="2" placeholder="${esc(u.cph)}">${esc(((v.c||[])[i]||{l:[]}).l.join("\n"))}</textarea>`).join("");
 if(M=="pareto")f+=lb(u.ph1,"pareto")+`<div id="rows">`+(v.r||Array.from({length:5},()=>[])).map(x=>row(PC,x)).join("")+`</div><button class="ghost" id="add">+ ${u.add}</button>`;
 if(m.f)f+=m.f.map(x=>gf(x,v)).join("");
 f+=`<div class="bar"><button class="pri" id="go">${u.go}</button><button class="ghost" id="reset">${u.reset}</button></div><p class="err" id="err" role="alert"></p></div>`;
 $("#main").innerHTML=f;$("#back").onclick=home;
 if($("#add"))$("#add").onclick=()=>$("#rows").insertAdjacentHTML("beforeend",row(PC,[]));
 $$(".addg").forEach(b=>b.onclick=()=>{const x=m.f.find(z=>z.id==b.dataset.id);$(`.gr[data-id="${x.id}"]`).insertAdjacentHTML("beforeend",row(x.c,[],1))});
 $("#go").onclick=analyze;
 $("#reset").onclick=()=>{if(hasData()&&!confirm(u.cfReset))return;saved=null;isSample=false;form()};
 if($("#sample"))$("#sample").onclick=()=>{if(hasData()&&!confirm(u.cfSample))return;saved=rs(RCA_SAMPLES[M],L);isSample=true;form()};}

function collect(){const p=$("#p").value.trim();
 if(meth().f){const o={};$$(".g").forEach(e=>o[e.dataset.id]=e.value.trim());$$(".gr").forEach(g=>o[g.dataset.id]=[...g.querySelectorAll(".r")].map(r=>[...r.querySelectorAll("input")].map(i=>i.value.trim())).filter(r=>r.some(Boolean)));return o}
 if(M=="whys")return{p,w:$$(".w").map(i=>i.value.trim()).filter(Boolean)};
 if(M=="fish")return{p,c:$$(".c").map(t=>({k:t.dataset.k,l:t.value.split("\n").map(s=>s.trim()).filter(Boolean)}))};
 return{p,r:$$(".r").map(r=>[...r.querySelectorAll("input")].map(i=>i.value.trim())).filter(r=>r[0])};}

function analyze(){saved=collect();const r=E[M](saved,L);
 if(r.err){$("#err").textContent=r.err;return}
 result(r);}

function result(r){V="result";$("#main").className="";const u=U(),m=meth(),n=m[L].n,date=new Date().toLocaleDateString(L=="vi"?"vi-VN":"en-GB"),title=`${n}`;
 $("#main").innerHTML=`<div class="g-${m.type}"><div class="bar" style="margin-top:0"><button class="ghost" id="edit">${u.edit}</button><button class="pri" id="pdf">${u.pdf}</button><button class="ghost" id="cmd">${u.md}</button><button class="ghost" id="crt">${u.rt}</button><span id="msg" role="status"></span></div><article id="doc"><h1>${esc(title)}</h1><p class="meta">${date}</p>${isSample?`<p class="note">${u.note}</p>`:""}<p class="prob"><b>${u.p}:</b> ${esc(saved.p)}</p>${html(r.blocks)}</article></div>`;
 const say=s=>{$("#msg").textContent=s;setTimeout(()=>$("#msg").textContent="",2500)};
 $("#edit").onclick=form;$("#pdf").onclick=()=>window.print();
 $("#cmd").onclick=()=>navigator.clipboard.writeText(`# ${title}\n\n**${u.p}:** ${saved.p}\n\n${isSample?"> "+u.note+"\n\n":""}${md(r.blocks)}`).then(()=>say(u.ok),()=>say(u.fail));
 $("#crt").onclick=()=>{navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([$("#doc").innerHTML],{type:"text/html"}),"text/plain":new Blob([$("#doc").innerText],{type:"text/plain"})})]).then(()=>say(u.ok),()=>say(u.fail))};}

document.addEventListener("click",e=>{const h=e.target.closest(".hw");$$(".hw.open").forEach(x=>x!==h&&x.classList.remove("open"));if(h&&e.target.closest(".hq"))h.classList.toggle("open")});
$("#lang").onclick=()=>{
 if(V=="form")saved=collect();
 L=L=="vi"?"en":"vi";$("#lang").textContent=L=="vi"?"EN":"VI";document.documentElement.lang=L;
 if(V=="home")home();else if(V=="form")form();else{const r=E[M](saved,L);r.err?form():result(r)}};
$("#logo").onclick=e=>{e.preventDefault();home()};
home();
})();
