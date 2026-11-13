window.RCA_ENGINE=(()=>{
const H=x=>({t:"h",x}),P=x=>({t:"p",x}),UL=x=>({t:"ul",x}),TB=(head,rows)=>({t:"table",head,rows});
const T=L=>(a,b)=>L=="vi"?a:b;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const HUM=/người|nhân viên|quên|bất cẩn|sơ suất|lười|human error|forgot|careless|negligen|mistake|lazy/i;
const cats=[["People","Nhân sự"],["Process","Quy trình"],["Technology","Công nghệ"],["Requirements","Yêu cầu"],["Environment","Môi trường"],["Management","Quản lý"]];
const E={cats};

E.whys=(d,L)=>{const t=T(L);
 if(!d.p||d.w.length<2)return{err:t("Nhập vấn đề và tối thiểu 2 mức Why.","Enter the problem and at least 2 Whys.")};
 const n=d.w.length,rc=d.w[n-1],hum=HUM.test(rc);
 return{blocks:[
 H("Executive Summary"),P(t(`Vấn đề "${d.p}" được truy ngược qua ${n} mức Why. Root cause giả định: "${rc}".`,`Problem "${d.p}" was traced through ${n} Whys. Hypothesized root cause: "${rc}".`)),
 H(t("Chuỗi nhân quả","Causal chain")),UL(d.w.map((w,i)=>`Why ${i+1}: ${w}`)),
 H(t("Đánh giá chất lượng","Quality check")),UL([
  n<3?t("Chuỗi nông (dưới 3 mức): nguy cơ dừng ở symptom.","Shallow chain (under 3 levels): risk of stopping at a symptom."):t("Độ sâu đạt yêu cầu.","Depth is adequate."),
  hum?t("Root cause đang quy cho con người. Hỏi tiếp: process/system nào cho phép lỗi này xảy ra?","Root cause blames people. Ask next: which process/system allowed this to happen?"):t("Root cause thuộc process/system, có thể hành động.","Root cause sits in process/system and is actionable."),
  t("Test ngược: loại bỏ root cause thì vấn đề có biến mất không? Mỗi mắt xích cần evidence, không chỉ ý kiến.","Reverse test: if the root cause is removed, does the problem disappear? Each link needs evidence, not opinion.")]),
 H("Recommended Actions"),UL([
  t(`Corrective: xử lý ngay hậu quả của "${d.w[0]}".`,`Corrective: fix the immediate effect "${d.w[0]}" now.`),
  t(`Preventive: thay đổi process/control tại "${rc}" để không tái diễn.`,`Preventive: change the process/control at "${rc}" to prevent recurrence.`),
  t("Verify: đặt metric, owner, deadline và đo lại sau khi áp dụng.","Verify: set a metric, owner and deadline; re-measure after the change.")]),
 H("Limitations"),UL([t("Chỉ theo một nhánh nhân quả; vấn đề nhiều nguyên nhân cần Fishbone.","Follows a single causal path; multi-cause problems need Fishbone."),t("Kết quả phụ thuộc người phân tích (bias xác nhận).","Result depends on the analyst (confirmation bias).")]),
 H("Decision Notes"),UL([t("Chỉ đầu tư sửa root cause khi chi phí thấp hơn tổn thất lặp lại.","Invest in the root-cause fix only if its cost is below the recurring loss."),t("Nếu chưa có evidence cho mắt xích yếu nhất, thu thập data trước khi quyết định.","If the weakest link lacks evidence, collect data before deciding.")])]}};

E.fish=(d,L)=>{const t=T(L),i=L=="vi"?1:0,tot=d.c.reduce((s,x)=>s+x.l.length,0);
 if(!d.p||tot<3)return{err:t("Nhập vấn đề và tối thiểu 3 nguyên nhân.","Enter the problem and at least 3 causes.")};
 const nm=x=>cats[+x.k][i],top=[...d.c].sort((a,b)=>b.l.length-a.l.length)[0],emp=d.c.filter(x=>!x.l.length).map(nm);
 const hi=d.c.flatMap(x=>x.l.filter(s=>s[0]=="!").map(s=>`${s.replace(/^!\s*/,"")} (${nm(x)})`));
 return{blocks:[
 H("Executive Summary"),P(t(`${tot} nguyên nhân tiềm năng cho "${d.p}", tập trung nhiều nhất ở nhóm ${nm(top)} (${top.l.length}).`,`${tot} potential causes for "${d.p}", most concentrated in ${nm(top)} (${top.l.length}).`)),
 H(t("Phân bố theo nhóm","Distribution by category")),TB([t("Nhóm","Category"),t("Số nguyên nhân","Causes"),"%"],d.c.map(x=>[nm(x),x.l.length,Math.round(x.l.length/tot*100)+"%"])),
 H(t("Các nhánh","Branches")),UL(d.c.filter(x=>x.l.length).map(x=>`${nm(x)}: ${x.l.map(s=>s.replace(/^!\s*/,"")).join("; ")}`)),
 H(t("Nguyên nhân ưu tiên kiểm chứng","Priority hypotheses")),hi.length?UL(hi):P(t('Chưa đánh dấu "!". Hãy chọn 2-3 nguyên nhân khả năng cao nhất để kiểm chứng.','None marked "!". Pick the 2-3 most likely causes to validate.')),
 H(t("Góc nhìn","Insights")),UL([
  emp.length?t(`Nhóm trống: ${emp.join(", ")}. Hỏi lại: chưa có data hay chưa nghĩ tới?`,`Empty categories: ${emp.join(", ")}. Ask: no data, or not yet considered?`):t("Cả 6 nhóm đều được xem xét.","All 6 categories were considered."),
  tot<8?t("Dưới 8 nguyên nhân: brainstorm có thể chưa đủ rộng.","Under 8 causes: brainstorm may not be broad enough."):t("Độ phủ nguyên nhân tương đối tốt.","Cause coverage looks reasonable.")]),
 H("Recommended Actions"),UL([t("Kiểm chứng top hypotheses bằng data hoặc 5 Whys trước khi hành động.","Validate top hypotheses with data or 5 Whys before acting."),t("Nếu có số liệu tần suất, chạy Pareto để xếp hạng.","If frequency data exists, run Pareto to rank causes.")]),
 H("Limitations"),UL([t("Fishbone liệt kê giả thuyết, chưa chứng minh nhân quả.","Fishbone lists hypotheses; it does not prove causation."),t("Không định lượng mức ảnh hưởng; dễ lệch theo thành phần brainstorm.","No quantification of impact; sensitive to who joined the brainstorm.")]),
 H("Decision Notes"),UL([t("Không sửa đồng loạt mọi nguyên nhân; chọn theo evidence và chi phí.","Do not fix every cause at once; select by evidence and cost.")])]}};

E.pareto=(d,L)=>{const t=T(L);
 let r=d.r.map(x=>[x[0],+x[1]||0]).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]);
 if(!d.p||r.length<3)return{err:t("Nhập vấn đề và tối thiểu 3 nguyên nhân có giá trị > 0.","Enter the problem and at least 3 causes with value > 0.")};
 const tot=r.reduce((s,x)=>s+x[1],0);let c=0;
 r=r.map(x=>(c+=x[1],[x[0],x[1],+(x[1]/tot*100).toFixed(1),+(c/tot*100).toFixed(1)]));
 const n=r.length,k=r.findIndex(x=>x[3]>=80)+1,vf=r.slice(0,k);
 const W=560,V=240,m=30,bw=(W-2*m)/n,hh=V-2*m,mx=r[0][1],y8=V-m-.8*hh;
 const svg=`<svg class="chart" viewBox="0 0 ${W} ${V}">`+r.map((x,i)=>`<rect x="${m+i*bw+4}" y="${V-m-x[1]/mx*hh}" width="${bw-8}" height="${x[1]/mx*hh}" rx="4" fill="${i<k?"#E2512D":"#E6E1D3"}"/><text x="${m+i*bw+bw/2}" y="${V-10}" font-size="10" text-anchor="middle">${esc(x[0].slice(0,10))}</text>`).join("")+`<line x1="${m}" x2="${W-m}" y1="${y8}" y2="${y8}" stroke="#999" stroke-dasharray="4"/><polyline fill="none" stroke="#1B2B4B" stroke-width="2" points="${r.map((x,i)=>`${m+i*bw+bw/2},${V-m-x[3]/100*hh}`).join(" ")}"/></svg>`;
 return{blocks:[
 H("Executive Summary"),P(t(`${k}/${n} nguyên nhân (${Math.round(k/n*100)}%) chiếm ${vf[k-1][3]}% tổng tác động của "${d.p}" (vital few).`,`${k} of ${n} causes (${Math.round(k/n*100)}%) account for ${vf[k-1][3]}% of the impact of "${d.p}" (vital few).`)),
 {t:"svg",x:svg},
 TB(["#",t("Nguyên nhân","Cause"),t("Giá trị","Value"),"%","Cumulative %"],r.map((x,i)=>[i+1,...x])),
 H(t("Góc nhìn","Insights")),UL([
  `Vital few: ${vf.map(x=>x[0]).join(", ")}.`,
  r[0][2]>50?t(`"${r[0][0]}" chiếm hơn một nửa: ưu tiên số 1.`,`"${r[0][0]}" is over half the total: priority #1.`):k/n>.6?t("Phân bố khá phẳng, Pareto ít phân biệt. Cân nhắc phân nhóm lại.","Distribution is flat; Pareto discriminates little. Consider re-categorizing."):t("Phân bố lệch rõ, tập trung nguồn lực vào vital few là hợp lý.","Clear skew; focusing resources on the vital few is justified."),
  n<5?t("Dưới 5 nhóm: Pareto có giá trị phân tích thấp.","Under 5 categories: Pareto has weak analytical value."):t("Số nhóm đủ để phân tích.","Enough categories to analyze.")]),
 H("Recommended Actions"),UL([t(`Chạy 5 Whys/Fishbone cho "${r[0][0]}"${k>1?` và "${r[1][0]}"`:""}.`,`Run 5 Whys/Fishbone on "${r[0][0]}"${k>1?` and "${r[1][0]}"`:""}.`),t("Đo baseline, sau khi cải tiến vẽ lại Pareto để xác nhận hiệu quả.","Record a baseline; redraw Pareto after the fix to confirm the effect.")]),
 H("Limitations"),UL([t("Tần suất không bằng mức độ nghiêm trọng; cân nhắc trọng số theo chi phí.","Frequency is not severity; consider weighting by cost."),t("Cần dữ liệu cùng kỳ, các nhóm loại trừ nhau. 80/20 là heuristic, không phải quy luật.","Data must cover one period and categories must be mutually exclusive. 80/20 is a heuristic, not a law.")]),
 H("Decision Notes"),UL([t("Nhóm trivial many vẫn có thể là rủi ro lớn: theo dõi, không bỏ qua.","Items in the trivial many can still be high-risk: monitor them, do not ignore.")])]}};


const num=v=>parseFloat(String(v).replace(",","."));
const lines=s=>String(s||"").split("\n").map(x=>x.trim()).filter(Boolean);
const mean=a=>a.reduce((s,x)=>s+x,0)/a.length;
const clamp=(v,a,b)=>Math.min(b,Math.max(a,num(v)||0));
const rep=(d,S)=>S.flatMap(([k,l])=>d[k]?[H(l),UL(lines(d[k]))]:[]);

E.isnot=(d,L)=>{const t=T(L),K=[["what","What"],["where","Where"],["when","When"],["ext","Extent"]],full=K.filter(([k])=>d[k+"1"]&&d[k+"2"]),dist=lines(d.dist);
 if(!d.p||full.length<2)return{err:t("Nhập vấn đề và tối thiểu 2 chiều có đủ Is và Is Not.","Enter the problem and at least 2 dimensions with both Is and Is Not.")};
 const miss=K.filter(([k])=>!(d[k+"1"]&&d[k+"2"])).map(x=>x[1]);
 return{blocks:[
 H("Executive Summary"),P(t(`Ranh giới vấn đề được xác định ở ${full.length}/4 chiều. ${dist.length?`Có ${dist.length} candidate cause từ điểm khác biệt.`:"Chưa có điểm khác biệt để suy ra nguyên nhân."}`,`Problem boundary defined on ${full.length}/4 dimensions. ${dist.length?`${dist.length} candidate causes from distinctions.`:"No distinctions yet to derive causes from."}`)),
 TB(["","Is","Is Not"],K.map(([k,n])=>[n,d[k+"1"]||"-",d[k+"2"]||"-"])),
 H("Candidate causes"),dist.length?UL(dist.map(x=>t(`${x}: có giải thích được cả Is lẫn Is Not không?`,`${x}: does it explain both the Is and the Is Not?`))):P(t("Hãy liệt kê điểm khác biệt giữa Is và Is Not, cùng thay đổi gần thời điểm bắt đầu.","List what differs between Is and Is Not, plus changes near the start.")),
 H(t("Góc nhìn","Insights")),UL([miss.length?t(`Chiều chưa đủ: ${miss.join(", ")}. Ranh giới mờ làm yếu phân tích.`,`Incomplete: ${miss.join(", ")}. A fuzzy boundary weakens the analysis.`):t("Cả 4 chiều đều có Is và Is Not.","All 4 dimensions have Is and Is Not."),t("Nguyên nhân đúng phải giải thích được mọi Is và Is Not; loại giả thuyết không giải thích được.","A valid cause must explain every Is and Is Not; discard those that do not.")]),
 H("Recommended Actions"),UL([t("Kiểm chứng candidate còn lại bằng Cause Verification Matrix.","Verify surviving candidates with the Cause Verification Matrix."),t("Thu thập data cho chiều còn thiếu trước khi kết luận.","Collect data for missing dimensions before concluding.")]),
 H("Limitations"),UL([t("Chất lượng phụ thuộc dữ liệu Is Not, thường bị bỏ sót.","Quality depends on Is Not data, which is often overlooked."),t("Chỉ sinh giả thuyết, chưa chứng minh nhân quả.","Generates hypotheses; does not prove causation.")]),
 H("Decision Notes"),UL([t("Không thay đổi gì trước khi có giả thuyết qua được bước kiểm chứng.","Change nothing until a hypothesis survives verification.")])]}};

E.chg=(d,L)=>{const t=T(L),n=s=>String(s||"").trim().toLowerCase(),r=(d.ca||[]).filter(x=>x[0]).map(x=>[x[0],x[1]||"-",x[2]||"-",clamp(x[3]||3,1,5),n(x[1])!=n(x[2])]);
 if(!d.p||r.length<2)return{err:t("Nhập vấn đề và tối thiểu 2 yếu tố.","Enter the problem and at least 2 factors.")};
 const ch=r.filter(x=>x[4]).sort((a,b)=>b[3]-a[3]),un=r.filter(x=>!x[4]);
 return{blocks:[
 H("Executive Summary"),P(t(`${ch.length}/${r.length} yếu tố có thay đổi.${ch.length?` Đáng ngờ nhất: "${ch[0][0]}" (Impact ${ch[0][3]}).`:""}`,`${ch.length} of ${r.length} factors changed.${ch.length?` Most suspect: "${ch[0][0]}" (Impact ${ch[0][3]}).`:""}`)),
 ch.length?TB(["#",t("Yếu tố","Factor"),"Before","After","Impact"],ch.map((x,i)=>[i+1,x[0],x[1],x[2],x[3]])):P(t("Không có yếu tố nào thay đổi.","No factor changed.")),
 H(t("Góc nhìn","Insights")),UL([
  ch.length?t("Đối chiếu thời điểm từng thay đổi với thời điểm vấn đề bắt đầu; thay đổi sau vấn đề thì loại.","Match each change's timing to the problem onset; discard changes made after it."):t("Không thấy thay đổi: nhiều khả năng danh sách yếu tố chưa đủ hoặc thay đổi chưa được ghi nhận.","No change found: the factor list is probably incomplete or changes went unrecorded."),
  ch.length>=3?t("Nhiều thay đổi cùng lúc: dùng rollback hoặc bisect từng thay đổi để cô lập.","Several simultaneous changes: roll back or bisect one at a time to isolate."):t("Số thay đổi ít, có thể kiểm chứng trực tiếp.","Few changes; can be verified directly."),
  un.length?t(`Tạm loại (không đổi): ${un.map(x=>x[0]).join(", ")}.`,`Tentatively ruled out (unchanged): ${un.map(x=>x[0]).join(", ")}.`):t("Chưa có yếu tố nào bị loại.","No factor ruled out yet.")]),
 H("Recommended Actions"),UL([t("Đưa các thay đổi Impact cao vào Cause Verification Matrix.","Move high-impact changes into the Cause Verification Matrix."),t("Thử rollback thay đổi đáng ngờ nhất ở môi trường an toàn.","Try rolling back the top suspect in a safe environment.")]),
 H("Limitations"),UL([t("Thay đổi đồng thời không đồng nghĩa nhân quả.","Coinciding with the problem does not mean causing it."),t("Chỉ thấy thay đổi đã được ghi nhận.","Only recorded changes are visible.")]),
 H("Decision Notes"),UL([t("Chỉ rollback khi chi phí rollback thấp hơn tổn thất đang diễn ra.","Roll back only if its cost is below the ongoing loss.")])]}};

E.scatter=(d,L)=>{const t=T(L),r=(d.pts||[]).map(x=>[num(x[0]),num(x[1])]).filter(x=>x.every(isFinite)),n=r.length;
 if(!d.p||n<5)return{err:t("Nhập vấn đề và tối thiểu 5 cặp (X, Y) hợp lệ.","Enter the problem and at least 5 valid (X, Y) pairs.")};
 const mx=mean(r.map(p=>p[0])),my=mean(r.map(p=>p[1]));let sxy=0,sxx=0,syy=0;r.forEach(([x,y])=>{sxy+=(x-mx)*(y-my);sxx+=(x-mx)**2;syy+=(y-my)**2});
 if(!sxx||!syy)return{err:t("X hoặc Y không biến thiên.","X or Y has no variation.")};
 const c=sxy/Math.sqrt(sxx*syy),b=sxy/sxx,a=my-b*mx,ab=Math.abs(c),f=v=>+v.toFixed(3),
 str=ab<.3?t("yếu","weak"):ab<.7?t("trung bình","moderate"):t("mạnh","strong"),dir=c>0?t("thuận","positive"):t("nghịch","negative"),
 sd=Math.sqrt(r.reduce((s,[x,y])=>s+(y-a-b*x)**2,0)/Math.max(1,n-2)),out=r.filter(([x,y])=>Math.abs(y-a-b*x)>2*sd);
 const W=560,V=260,m=34,xs=r.map(p=>p[0]),ys=r.map(p=>p[1]),x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys),X=v=>m+(v-x0)/(x1-x0||1)*(W-2*m),Y=v=>V-m-(v-y0)/(y1-y0||1)*(V-2*m);
 const svg=`<svg class="chart" viewBox="0 0 ${W} ${V}">`+r.map(p=>`<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="4.5" fill="#E2512D" fill-opacity=".75"/>`).join("")+`<line x1="${X(x0)}" y1="${Y(a+b*x0)}" x2="${X(x1)}" y2="${Y(a+b*x1)}" stroke="#1B2B4B" stroke-width="2"/><text x="${W/2}" y="${V-6}" font-size="11" text-anchor="middle">${esc(d.sx||"X")}</text><text x="12" y="${V/2}" font-size="11" transform="rotate(-90 12 ${V/2})" text-anchor="middle">${esc(d.sy||"Y")}</text></svg>`;
 return{blocks:[
 H("Executive Summary"),P(t(`Tương quan ${dir} ${str} giữa "${d.sx||"X"}" và "${d.sy||"Y"}" (r = ${f(c)}, n = ${n}).`,`${str[0].toUpperCase()+str.slice(1)} ${dir} correlation between "${d.sx||"X"}" and "${d.sy||"Y"}" (r = ${f(c)}, n = ${n}).`)),
 {t:"svg",x:svg},TB([t("Chỉ số","Metric"),t("Giá trị","Value")],[["r",f(c)],["R²",f(c*c)],[t("Hệ số góc","Slope"),f(b)],[t("Hằng số","Intercept"),f(a)]]),
 H(t("Góc nhìn","Insights")),UL([t(`R² = ${f(c*c)}: X giải thích khoảng ${Math.round(c*c*100)}% biến thiên của Y.`,`R² = ${f(c*c)}: X explains about ${Math.round(c*c*100)}% of the variation in Y.`),
  n<10?t("Dưới 10 cặp: kết quả chưa đáng tin.","Under 10 pairs: result is not reliable."):t("Cỡ mẫu chấp nhận được.","Sample size acceptable."),
  out.length?t(`${out.length} điểm lệch xa đường hồi quy (>2 SD): kiểm tra dữ liệu hoặc ngữ cảnh.`,`${out.length} point(s) far from the fit (>2 SD): check data or context.`):t("Không có outlier rõ rệt.","No clear outliers.")]),
 H("Recommended Actions"),UL([ab>=.3?t("Tương quan đủ đáng chú ý: thiết kế một thử nghiệm để kiểm tra nhân quả.","Correlation is notable: design an experiment to test causation."):t("Tương quan yếu: loại X khỏi danh sách nguyên nhân chính, thử biến khác.","Weak correlation: drop X as a main cause, try another variable.")]),
 H("Limitations"),UL([t("Tương quan không phải nhân quả; có thể có biến thứ ba.","Correlation is not causation; a third variable may exist."),t("Chỉ đo quan hệ tuyến tính.","Measures linear relationships only.")]),
 H("Decision Notes"),UL([t("Đừng quyết định đầu tư lớn chỉ dựa trên r.","Do not make a large investment decision on r alone.")])]}};

E.run=(d,L)=>{const t=T(L),v=String(d.rc||"").split(/[\s,;]+/).map(num).filter(isFinite),n=v.length;
 if(!d.p||n<10)return{err:t("Nhập vấn đề và tối thiểu 10 giá trị.","Enter the problem and at least 10 values.")};
 const s=[...v].sort((a,b)=>a-b),med=n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2,mn=mean(v),sd=Math.sqrt(v.reduce((a,b)=>a+(b-mn)**2,0)/(n-1));
 let side=0,cur=0,st=0;const sh=[];v.forEach((x,i)=>{const g=Math.sign(x-med);if(!g)return;if(g==side)cur++;else{side=g;cur=1;st=i}if(cur==6)sh.push(st+1)});
 let up=1,dn=1;const tr=[];for(let i=1;i<n;i++){v[i]>v[i-1]?(up++,dn=1):v[i]<v[i-1]?(dn++,up=1):(up=1,dn=1);if(up==5||dn==5)tr.push(i-3)}
 const out=v.map((x,i)=>Math.abs(x-mn)>3*sd?i+1:0).filter(Boolean),sig=sh.length+tr.length+out.length;
 const W=560,V=240,m=30,lo=Math.min(...v),hi=Math.max(...v),X=i=>m+i/(n-1)*(W-2*m),Y=y=>V-m-(y-lo)/(hi-lo||1)*(V-2*m);
 const svg=`<svg class="chart" viewBox="0 0 ${W} ${V}"><line x1="${m}" x2="${W-m}" y1="${Y(med)}" y2="${Y(med)}" stroke="#999" stroke-dasharray="4"/><polyline fill="none" stroke="#1B2B4B" stroke-width="2" points="${v.map((y,i)=>`${X(i)},${Y(y)}`).join(" ")}"/>`+v.map((y,i)=>`<circle cx="${X(i)}" cy="${Y(y)}" r="${out.includes(i+1)?6:3}" fill="${out.includes(i+1)?"#E2512D":"#1B2B4B"}"/>`).join("")+"</svg>";
 const rows=[...sh.map(i=>["Shift",t(`từ điểm ${i}`,`from point ${i}`)]),...tr.map(i=>["Trend",t(`từ điểm ${i}`,`from point ${i}`)]),...out.map(i=>["Outlier",t(`điểm ${i}`,`point ${i}`)])];
 return{blocks:[
 H("Executive Summary"),P(sig?t(`${n} điểm, median ${+med.toFixed(2)}; phát hiện ${sig} tín hiệu special cause.`,`${n} points, median ${+med.toFixed(2)}; ${sig} special-cause signal(s) detected.`):t(`${n} điểm, median ${+med.toFixed(2)}; không có tín hiệu special cause (biến động thường).`,`${n} points, median ${+med.toFixed(2)}; no special-cause signals (common-cause variation).`)),
 {t:"svg",x:svg},rows.length?TB([t("Tín hiệu","Signal"),t("Vị trí","Where")],rows):P(t("Không có shift (6+ điểm cùng phía median), trend (5+ điểm tăng/giảm liên tiếp) hay outlier (>3 SD).","No shift (6+ points on one side of the median), trend (5+ consecutive rises/falls) or outlier (>3 SD).")),
 H(t("Góc nhìn","Insights")),UL([sig?t("Có special cause: tìm sự kiện xảy ra đúng thời điểm tín hiệu (release, đổi người, đổi scope).","Special cause present: find the event at the signal time (release, staffing, scope change)."):t("Process ổn định: đừng điều tra từng điểm, muốn cải thiện phải thay đổi hệ thống.","Stable process: do not chase single points; improvement needs a system change."),n<15?t("Dưới 15 điểm: độ tin cậy hạn chế.","Under 15 points: limited reliability."):t("Đủ điểm để đọc xu hướng.","Enough points to read the pattern.")]),
 H("Recommended Actions"),UL([sig?t("Chạy Change Analysis quanh thời điểm tín hiệu.","Run Change Analysis around the signal time."):t("Dùng Pareto để tìm nhóm nguyên nhân đóng góp nhiều nhất.","Use Pareto to find the biggest contributing causes.")]),
 H("Limitations"),UL([t("Quy tắc shift/trend mang tính heuristic; cần control chart nếu muốn giới hạn thống kê chính thức.","Shift/trend rules are heuristic; use a control chart for formal statistical limits."),t("Dữ liệu cần cùng cách đo và cùng khoảng thời gian.","Data must use the same measurement and interval.")]),
 H("Decision Notes"),UL([t("Phản ứng với biến động thường (tampering) làm tăng biến động.","Reacting to common-cause noise (tampering) increases variation.")])]}};

E.cv=(d,L)=>{const t=T(L),r=(d.cv||[]).filter(x=>x[0]).map(x=>{const f=clamp(x[1],0,5),a=clamp(x[2],0,5);return[x[0],f,a,f-a,a>f?"Refuted":f>=4&&a<=1?"Confirmed":f-a>=2?"Likely":"Unverified",x[3]||"-"]}).sort((a,b)=>b[3]-a[3]);
 if(!d.p||r.length<2)return{err:t("Nhập vấn đề và tối thiểu 2 giả thuyết.","Enter the problem and at least 2 hypotheses.")};
 const cf=r.filter(x=>x[4]=="Confirmed"),nt=r.filter(x=>x[4]=="Unverified"||x[4]=="Likely");
 return{blocks:[
 H("Executive Summary"),P(cf.length?t(`${cf.length}/${r.length} giả thuyết đã được xác nhận; dẫn đầu: "${cf[0][0]}".`,`${cf.length} of ${r.length} hypotheses confirmed; leading: "${cf[0][0]}".`):t(`Chưa giả thuyết nào đủ evidence xác nhận. Dẫn đầu: "${r[0][0]}" (${r[0][4]}).`,`No hypothesis has enough evidence yet. Leading: "${r[0][0]}" (${r[0][4]}).`)),
 TB(["#",t("Giả thuyết","Hypothesis"),"For","Against","Net","Status",t("Test tiếp theo","Next test")],r.map((x,i)=>[i+1,...x])),
 H(t("Góc nhìn","Insights")),UL([
  r.every(x=>x[2]==0)?t("Mọi Against = 0: nguy cơ confirmation bias. Chủ động tìm bằng chứng phản bác.","Every Against = 0: confirmation-bias risk. Actively look for disconfirming evidence."):t("Đã có evidence phản bác, phân tích cân bằng hơn.","Disconfirming evidence recorded; analysis is more balanced."),
  nt.some(x=>x[5]=="-")?t("Có giả thuyết chưa có test tiếp theo.","Some hypotheses have no next test."):t("Mọi giả thuyết chưa xác nhận đều có test.","All unconfirmed hypotheses have a next test."),
  t("Quy ước: Confirmed khi For ≥ 4 và Against ≤ 1; Likely khi Net ≥ 2; Refuted khi Against > For.","Rule: Confirmed if For ≥ 4 and Against ≤ 1; Likely if Net ≥ 2; Refuted if Against > For.")]),
 H("Recommended Actions"),UL([cf.length?t("Chuyển giả thuyết Confirmed sang CAPA Plan hoặc 8D Report.","Move Confirmed hypotheses into a CAPA Plan or 8D Report."):t("Chạy test cho giả thuyết Likely/Unverified, ưu tiên test rẻ và nhanh.","Run tests for Likely/Unverified hypotheses, cheapest and fastest first."),t("Loại giả thuyết Refuted khỏi danh sách.","Drop Refuted hypotheses.")]),
 H("Limitations"),UL([t("Điểm số mang tính chủ quan: ghi nguồn evidence cho từng điểm.","Scores are subjective: record the evidence source for each score."),t("Chỉ xét các giả thuyết đã liệt kê.","Only considers listed hypotheses.")]),
 H("Decision Notes"),UL([t("Chỉ sửa khi có ít nhất một giả thuyết Confirmed.","Fix only when at least one hypothesis is Confirmed.")])]}};

E.d8=(d,L)=>{const t=T(L),S=[["d1","D1 Team"],["p","D2 "+t("Mô tả vấn đề","Problem description")],["d3","D3 Interim containment"],["d4","D4 Root cause & escape point"],["d5","D5 Corrective action"],["d6","D6 "+t("Triển khai và xác nhận","Implementation & validation")],["d7","D7 "+t("Ngăn tái diễn","Prevent recurrence")],["d8","D8 "+t("Đóng và ghi nhận","Closure & recognition")]],done=S.filter(([k])=>d[k]).length;
 if(!d.p||done<3)return{err:t("Nhập mô tả vấn đề (D2) và tối thiểu 3 bước.","Enter the problem (D2) and at least 3 steps.")};
 const w=[...S.filter(([k])=>!d[k]).map(x=>t(`Thiếu ${x[1]}.`,`Missing ${x[1]}.`)),
  d.d3&&d.d3==d.d5?t("D3 và D5 giống nhau: containment không phải corrective action.","D3 equals D5: containment is not a corrective action."):"",
  d.d4&&!/escape|thoát|không phát hiện|bỏ sót|miss|detect|phát hiện/i.test(d.d4)?t("D4 chưa nêu escape point (vì sao không phát hiện sớm).","D4 does not state the escape point (why it was not detected earlier)."):"",
  d.d6&&!/\d/.test(d.d6)?t("D6 chưa có số liệu chứng minh hiệu quả.","D6 has no numbers proving effectiveness."):""].filter(Boolean);
 return{blocks:[H("Executive Summary"),P(t(`Báo cáo 8D hoàn thành ${done}/8 bước cho: "${d.p}".`,`8D report ${done}/8 steps complete for: "${d.p}".`)),...rep(d,S),
 H(t("Kiểm tra chất lượng","Quality check")),UL(w.length?w:[t("Các bước đầy đủ và nhất quán.","Steps are complete and consistent.")]),
 H("Recommended Actions"),UL([t("Khách hàng chỉ nhận báo cáo khi D4 có evidence và D6 có số liệu.","Send to the customer only when D4 has evidence and D6 has numbers."),t("Lên lịch kiểm tra hiệu quả sau 30/60/90 ngày.","Schedule effectiveness checks at 30/60/90 days.")]),
 H("Limitations"),UL([t("Công cụ kiểm tra tính đầy đủ, không đánh giá tính đúng của root cause.","This checks completeness, not whether the root cause is correct.")])]}};

E.capa=(d,L)=>{const t=T(L),r=(d.cp||[]).filter(x=>x[0]).map(x=>[x[0],/^p/i.test(x[1]||"")?"P":/^c/i.test(x[1]||"")?"C":"?",x[2]||"",x[3]||"",x[4]||""]);
 if(!d.p||!r.length)return{err:t("Nhập vấn đề và tối thiểu 1 action.","Enter the problem and at least 1 action.")};
 const c=r.filter(x=>x[1]=="C").length,p=r.filter(x=>x[1]=="P").length,gap=r.flatMap(x=>[["Owner",2],["Due",3],["Metric",4]].filter(([,i])=>!x[i]).map(([n])=>`${x[0]}: ${t("thiếu","missing")} ${n}`));
 return{blocks:[
 H("Executive Summary"),P(t(`${r.length} action: ${c} Corrective, ${p} Preventive. ${gap.length?`${gap.length} thông tin còn thiếu.`:"Mọi action đủ Owner, Due, Metric."}`,`${r.length} actions: ${c} Corrective, ${p} Preventive. ${gap.length?`${gap.length} field(s) missing.`:"Every action has Owner, Due and Metric."}`)),
 TB(["#","Action","Type","Owner","Due","Metric"],r.map((x,i)=>[i+1,x[0],x[1],x[2]||"-",x[3]||"-",x[4]||"-"])),
 H(t("Góc nhìn","Insights")),UL([!p?t("Không có Preventive: mới chữa triệu chứng, vấn đề có thể tái diễn.","No Preventive action: only the symptom is treated; recurrence is likely."):t("Có Preventive action.","Preventive actions present."),!c?t("Không có Corrective: hậu quả hiện tại chưa được xử lý.","No Corrective action: current impact is not addressed."):t("Có Corrective action.","Corrective actions present."),r.length>7?t("Trên 7 action: dễ loãng, nên ưu tiên theo impact.","Over 7 actions: risk of dilution; prioritize by impact."):t("Số action vừa phải.","Manageable number of actions.")].concat(gap)),
 H("Recommended Actions"),UL([t("Ghi action vào Issue/Action Log và theo dõi trong họp status.","Log actions in the Issue/Action Log and track in status meetings."),t("Đặt checkpoint kiểm tra hiệu quả theo Metric sau khi hoàn thành.","Set an effectiveness checkpoint against each Metric after completion.")]),
 H("Limitations"),UL([t("Công cụ không kiểm tra action có thực sự xử lý root cause.","The tool does not verify that an action truly addresses the root cause.")]),
 H("Decision Notes"),UL([t("Mỗi action chỉ một owner chịu trách nhiệm.","One accountable owner per action.")])]}};

E.pm=(d,L)=>{const t=T(L),S=[["p",t("Tóm tắt","Summary")],["impact",t("Tác động","Impact")],["timeline","Timeline"],["well",t("Điều làm tốt","What went well")],["wrong",t("Điều chưa tốt","What went wrong")],["lucky",t("Điều may mắn","Where we got lucky")],["causes","Root causes"],["actions","Action items"]],done=S.filter(([k])=>d[k]).length;
 if(!d.p||done<4)return{err:t("Nhập tóm tắt và tối thiểu 4 mục.","Enter the summary and at least 4 sections.")};
 const w=[lines(d.timeline).length<3?t("Timeline dưới 3 sự kiện: khó dựng lại diễn biến.","Timeline has under 3 events: hard to reconstruct."):"",
  HUM.test((d.wrong||"")+(d.causes||""))?t("Có dấu hiệu quy trách nhiệm cá nhân: viết lại theo hệ thống/process.","Signs of blaming individuals: rewrite in terms of systems/process."):"",
  !d.lucky?t("Chưa có mục 'may mắn': có thể còn rủi ro tiềm ẩn.","No 'got lucky' items: hidden risks may remain."):"",
  !d.actions?t("Chưa có action items: post-mortem không tạo thay đổi.","No action items: the post-mortem changes nothing."):""].filter(Boolean);
 return{blocks:[H("Executive Summary"),P(d.p),...rep(d,S.slice(1)),
 H(t("Kiểm tra chất lượng","Quality check")),UL(w.length?w:[t("Biên bản đầy đủ và blameless.","Review is complete and blameless.")]),
 H("Recommended Actions"),UL([t("Gán owner và hạn cho từng action, đưa vào CAPA Plan.","Assign owner and due date to each action and move them into a CAPA Plan."),t("Chia sẻ biên bản và cập nhật Lessons Learned Register.","Share the review and update the Lessons Learned Register.")]),
 H("Limitations"),UL([t("Giá trị phụ thuộc vào văn hóa blameless của tổ chức.","Value depends on the organization's blameless culture.")])]}};
return E;})();
