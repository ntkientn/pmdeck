window.RCA_DATA={
methods:[
{id:"whys",type:"explore",
 vi:{n:"5 Whys",d:"Truy ngược chuỗi nhân quả tuyến tính tới root cause.",w:"vấn đề đơn giản, một chuỗi nhân quả rõ ràng"},
 en:{n:"5 Whys",d:"Trace a linear cause chain down to the root cause.",w:"simple problem with one clear causal chain"}},
{id:"fish",type:"explore",
 vi:{n:"Fishbone (Ishikawa)",d:"Brainstorm nguyên nhân theo 6 nhóm để tránh bỏ sót.",w:"vấn đề phức tạp, nhiều nguyên nhân tiềm năng"},
 en:{n:"Fishbone (Ishikawa)",d:"Structure brainstormed causes into 6 categories to avoid blind spots.",w:"complex problem with many potential causes"}},
{id:"pareto",type:"verify",
 vi:{n:"Pareto (80/20)",d:"Xếp hạng nguyên nhân theo tần suất/chi phí, tìm vital few.",w:"đã có dữ liệu đếm hoặc chi phí theo nhóm nguyên nhân"},
 en:{n:"Pareto (80/20)",d:"Rank causes by frequency/cost to find the vital few.",w:"you have count or cost data per cause"}}
],
ui:{
vi:{h:"Root-Cause Analysis Toolkit",s:"Tìm nguyên nhân gốc của một vấn đề trong dự án bằng các method chuẩn. Chọn method phù hợp với tình huống, nhập dữ liệu, bấm Analyze để nhận bài phân tích, rồi xuất PDF hoặc copy sang tài liệu.<br>Ba nhóm đi theo thứ tự công việc: tìm nguyên nhân → kiểm chứng bằng dữ liệu → lập hành động khắc phục.",type:{qual:"Định tính",quant:"Định lượng",risk:"Rủi ro"},when:"Dùng khi",
 p:"Mô tả vấn đề",ph:"Cái gì, ở đâu, khi nào, tác động đo được",chain:"Chuỗi Why (từ symptom đến root cause)",cph:'Mỗi nguyên nhân một dòng. Thêm "!" đầu dòng nếu khả năng cao',
 ph1:"Nguyên nhân và tần suất/chi phí (tối thiểu 3 dòng)",ph2:"Failure mode, Severity, Occurrence, Detection (thang 1-10)",add:"Thêm dòng",item:"Tên",go:"Analyze",back:"← Chọn method khác",edit:"← Sửa dữ liệu",pdf:"In / PDF",md:"Copy Markdown",rt:"Copy Rich Text",ok:"Đã copy",fail:"Không copy được, hãy dùng In / PDF"},
en:{h:"Root-Cause Analysis Toolkit",s:"Find the root cause of a project problem using standard methods. Pick the method that fits your situation, enter your data, click Analyze to get the analysis, then export it as PDF or copy it into a document.<br>The three groups follow the order of the work: find causes → verify with data → plan corrective actions.",type:{qual:"Qualitative",quant:"Quantitative",risk:"Risk"},when:"Use when",
 p:"Problem statement",ph:"What, where, when, measurable impact",chain:"Why chain (symptom to root cause)",cph:'One cause per line. Prefix "!" if highly likely',
 ph1:"Causes and frequency/cost (min. 3 rows)",ph2:"Failure mode, Severity, Occurrence, Detection (scale 1-10)",add:"Add row",item:"Name",go:"Analyze",back:"← Choose another method",edit:"← Edit data",pdf:"Print / PDF",md:"Copy Markdown",rt:"Copy Rich Text",ok:"Copied",fail:"Copy failed, use Print / PDF"}
}};

RCA_DATA.deckUrl="../../index.html"; /* đổi thành đường dẫn trang PM Deck */
RCA_DATA.groups=[{id:"explore",vi:"Define & Explore",en:"Define & Explore"},{id:"verify",vi:"Analyze & Verify",en:"Analyze & Verify"},{id:"act",vi:"Act & Prevent",en:"Act & Prevent"}];
Object.assign(RCA_DATA.ui.vi,{ps:"Phạm vi đánh giá",ph1:"Nguyên nhân và giá trị",ph2:"Failure mode và điểm S / O / D",fishl:"Nguyên nhân theo nhóm",cph:"Mỗi dòng một nguyên nhân"});
Object.assign(RCA_DATA.ui.en,{ps:"Assessment scope",ph1:"Causes and values",ph2:"Failure mode and S / O / D scores",fishl:"Causes by category",cph:"One cause per line"});
RCA_DATA.hints={
vi:{p:"Viết 1-2 câu: cái gì xảy ra, ở đâu, từ khi nào, tác động đo được. Ví dụ: tỷ lệ bug lọt UAT tăng từ 5% lên 18% trong 2 sprint gần nhất. Không nêu sẵn nguyên nhân hay giải pháp.",
 chain:"Why 1 là hiện tượng quan sát được. Mỗi Why trả lời câu hỏi 'vì sao' của dòng trước. Dừng khi chạm nguyên nhân thuộc process/system mà bạn kiểm soát được. Tối thiểu 2 mức, thường cần 3-5.",
 fish:"Mỗi dòng một nguyên nhân. Thêm '!' đầu dòng cho nguyên nhân bạn cho là khả năng cao nhất. Để trống nhóm nếu chưa có.",
 c0:"Kỹ năng, nhân lực, workload, giao tiếp, đào tạo.",c1:"Quy trình, DoR/DoD, review, handoff, phê duyệt.",c2:"Tool, kiến trúc, môi trường, tích hợp, nợ kỹ thuật.",c3:"Scope, requirement mơ hồ hoặc thay đổi liên tục, acceptance criteria.",c4:"Yếu tố bên ngoài: khách hàng, vendor, pháp lý, thị trường.",c5:"Ưu tiên, resource planning, estimation, governance, ra quyết định.",
 pareto:"Mỗi dòng: tên nguyên nhân và giá trị (số lần xảy ra, hoặc chi phí/giờ công). Dùng cùng đơn vị, cùng kỳ dữ liệu, các nhóm loại trừ nhau. Tối thiểu 3 dòng.",
 },
en:{p:"Write 1-2 sentences: what happened, where, since when, measurable impact. Example: UAT escaped-bug rate rose from 5% to 18% over the last 2 sprints. Do not state causes or solutions yet.",
 chain:"Why 1 is the observed symptom. Each Why answers 'why' for the line above. Stop at a cause in a process/system you can control. Minimum 2 levels, usually 3-5.",
 fish:"One cause per line. Prefix '!' for the causes you consider most likely. Leave a category empty if nothing applies.",
 c0:"Skills, capacity, workload, communication, training.",c1:"Process, DoR/DoD, reviews, handoffs, approvals.",c2:"Tools, architecture, environments, integrations, technical debt.",c3:"Scope, unclear or changing requirements, acceptance criteria.",c4:"External factors: customer, vendor, regulation, market.",c5:"Prioritization, resource planning, estimation, governance, decision-making.",
 pareto:"Each row: cause name and value (occurrences, or cost/effort hours). Use the same unit and period; causes must be mutually exclusive. Minimum 3 rows.",
 }};

(()=>{const R=RCA_DATA,T=R.T={},t=(k,v,e)=>{T[k]=[v,e]};
const add=(id,type,n,d,w,f)=>R.methods.push({id,type,vi:{n:n[0],d:d[0],w:w[0]},en:{n:n[1],d:d[1],w:w[1]},f});
const A=(id,k,n)=>({id,t:"area",k,n}),I=(id,k)=>({id,t:"in",k}),W=(id,k)=>({id,t:"two",k}),MS=(id,k)=>({id,t:"ms",k}),RW=(id,k,n,c)=>({id,t:"rows",k,n,c}),C=(t,ph)=>({t,ph});
t("p","Mô tả vấn đề","Problem statement");t("p_h","Cái gì xảy ra, ở đâu, từ khi nào, tác động đo được. Chưa nêu nguyên nhân hay giải pháp.","What happened, where, since when, measurable impact. No causes or solutions yet.");
const P=A("p","p",2);

add("isnot","explore",["Is / Is Not","Is / Is Not"],["Khoanh vùng vấn đề bằng So sánh Is và Is Not (Kepner-Tregoe).","Bound the problem by comparing Is vs Is Not (Kepner-Tregoe)."],["lỗi/incident cần thu hẹp phạm vi trước khi tìm nguyên nhân","a defect/incident whose scope must be narrowed before searching causes"],
[P,W("what","ii_what"),W("where","ii_where"),W("when","ii_when"),W("ext","ii_ext"),A("dist","ii_dist",3)]);
t("ii_what","What","What");t("ii_what_h","Is: đối tượng/lỗi đang bị. Is Not: đối tượng tương tự nhưng không bị. VD: Is = màn Thanh toán; Is Not = màn Giỏ hàng.","Is: the object/defect affected. Is Not: a similar object not affected. E.g. Is = Checkout; Is Not = Cart.");
t("ii_where","Where","Where");t("ii_where_h","Môi trường, thành phần, khách hàng nơi lỗi có / không xuất hiện. VD: Production có, Staging không.","Environment, component or customer where it does / does not occur. E.g. Prod yes, Staging no.");
t("ii_when","When","When");t("ii_when_h","Lần đầu xuất hiện, chu kỳ, điều kiện thời gian. Is Not: lúc vẫn bình thường.","First occurrence, pattern, timing. Is Not: when it was still normal.");
t("ii_ext","Extent","Extent");t("ii_ext_h","Quy mô: số lượng, tỷ lệ, xu hướng. Is Not: phạm vi có thể bị nhưng không bị.","Size: count, rate, trend. Is Not: scope that could be hit but is not.");
t("ii_dist","Điểm khác biệt và thay đổi","Distinctions and changes");t("ii_dist_h","Mỗi dòng một điều đặc biệt ở Is so với Is Not, hoặc một thay đổi gần thời điểm bắt đầu. Đây là các candidate cause.","One per line: what is unique about Is vs Is Not, or a change near the start. These are candidate causes.");

add("chg","explore",["Change Analysis","Change Analysis"],["So sánh trước và sau để tìm thay đổi gây lỗi.","Compare before vs after to find the change that caused it."],["vấn đề xuất hiện sau release, thay đổi config, đổi người hoặc scope","the problem appeared after a release, config, people or scope change"],
[P,RW("ca","ca_rows",5,[C("t","c_f"),C("t","c_b"),C("t","c_a"),C("n","c_i")])]);
t("c_f","Yếu tố","Factor");t("c_b","Before (chạy tốt)","Before (working)");t("c_a","After (bị lỗi)","After (failing)");t("c_i","Impact 1-5","Impact 1-5");
t("ca_rows","Yếu tố và thay đổi","Factors and changes");t("ca_rows_h","Mỗi dòng một yếu tố (code, config, người, tool, data, môi trường, scope). Before = lúc còn tốt, After = lúc lỗi, Impact 1-5 = khả năng liên quan. Nếu không đổi, để Before và After giống nhau.","One factor per row (code, config, people, tool, data, environment, scope). Before = while working, After = when failing, Impact 1-5 = likely relevance. If unchanged, keep Before and After identical.");

add("scatter","verify",["Scatter / Correlation","Scatter / Correlation"],["Kiểm tra X có liên quan Y không bằng hệ số tương quan r.","Test whether X relates to Y using the correlation coefficient r."],["cần kiểm chứng một giả thuyết bằng số liệu hai biến","you must test a hypothesis with two-variable data"],
[P,I("sx","sx"),I("sy","sy"),RW("pts","pts",8,[C("n","X"),C("n","Y")])]);
t("sx","Biến X (nguyên nhân giả định)","X variable (suspected cause)");t("sx_h","VD: số thay đổi scope mỗi sprint.","E.g. scope changes per sprint.");
t("sy","Biến Y (kết quả)","Y variable (outcome)");t("sy_h","VD: số bug lọt UAT mỗi sprint.","E.g. bugs escaped to UAT per sprint.");
t("pts","Cặp dữ liệu (X, Y)","Data pairs (X, Y)");t("pts_h","Mỗi dòng một quan sát, cùng kỳ đo. Tối thiểu 5 cặp, nên từ 10.","One observation per row, same period. Minimum 5 pairs, ideally 10+.");

add("run","verify",["Run Chart","Run Chart"],["Phát hiện shift, trend và điểm bất thường theo thời gian.","Detect shifts, trends and outliers over time."],["cần biết vấn đề là biến động thường hay do special cause","you need to know if variation is normal or a special cause"],
[P,A("rc","rc_v",4)]);
t("rc_v","Chuỗi giá trị theo thời gian","Values in time order");t("rc_v_h","Nhập theo thứ tự thời gian, cách nhau bằng dấu phẩy hoặc xuống dòng. Tối thiểu 10 điểm. VD: velocity, số bug mỗi tuần.","Enter in time order, separated by commas or new lines. Minimum 10 points. E.g. velocity, bugs per week.");

add("cv","verify",["Cause Verification Matrix","Cause Verification Matrix"],["Chấm evidence ủng hộ và phản bác cho từng giả thuyết.","Score supporting and contradicting evidence per hypothesis."],["đã có nhiều giả thuyết, cần chọn cái nào đáng tin trước khi sửa","you have several hypotheses and must pick which holds before fixing"],
[P,RW("cv","cv_rows",4,[C("t","cv_h"),C("n","For 0-5"),C("n","Against 0-5"),C("t","cv_t")])]);
t("cv_h","Giả thuyết","Hypothesis");t("cv_t","Test tiếp theo","Next test");
t("cv_rows","Giả thuyết và evidence","Hypotheses and evidence");t("cv_rows_h","For = mức evidence ủng hộ (0-5), Against = mức evidence phản bác (0-5), Test = hành động kiểm chứng tiếp theo. Chấm theo bằng chứng, không theo ý kiến.","For = strength of supporting evidence (0-5), Against = strength of contradicting evidence (0-5), Test = next verification step. Score evidence, not opinion.");

add("d8","act",["8D Report","8D Report"],["Báo cáo giải quyết vấn đề theo 8 bước D1-D8.","Problem-solving report in 8 disciplines, D1-D8."],["khách hàng/đối tác yêu cầu báo cáo khắc phục chính thức","a customer/partner requires a formal corrective report"],
[A("d1","d1",2),A("p","d2",2),A("d3","d3",2),A("d4","d4",3),A("d5","d5",3),A("d6","d6",3),A("d7","d7",2),A("d8","d8",2)]);
t("d1","D1 Team","D1 Team");t("d1_h","Thành viên cross-functional, vai trò, champion/sponsor.","Cross-functional members, roles, champion/sponsor.");
t("d2","D2 Mô tả vấn đề","D2 Problem description");t("d2_h","Cái gì, ở đâu, khi nào, mức độ; có số liệu.","What, where, when, extent; with data.");
t("d3","D3 Interim containment","D3 Interim containment");t("d3_h","Biện pháp tạm thời bảo vệ khách hàng ngay lúc này (không phải giải pháp gốc).","Temporary action shielding the customer now (not the permanent fix).");
t("d4","D4 Root cause và escape point","D4 Root cause and escape point");t("d4_h","Root cause kèm evidence, và escape point: vì sao QA/review/test không phát hiện.","Root cause with evidence, and escape point: why QA/review/testing did not catch it.");
t("d5","D5 Permanent corrective action","D5 Permanent corrective action");t("d5_h","Hành động loại bỏ root cause và lý do chọn.","Action removing the root cause, and why chosen.");
t("d6","D6 Triển khai và xác nhận","D6 Implementation and validation");t("d6_h","Đã làm gì, khi nào, kết quả đo được chứng minh hiệu quả (có số liệu).","What was done, when, measured results proving effectiveness (with numbers).");
t("d7","D7 Ngăn tái diễn","D7 Prevent recurrence");t("d7_h","Cập nhật process, checklist, standard, training; áp dụng cho sản phẩm/dự án tương tự.","Update process, checklists, standards, training; extend to similar products/projects.");
t("d8","D8 Đóng và ghi nhận","D8 Closure and recognition");t("d8_h","Khách hàng xác nhận đóng, lessons learned, ghi nhận đội.","Customer sign-off, lessons learned, team recognition.");

add("capa","act",["CAPA Plan","CAPA Plan"],["Lập kế hoạch Corrective và Preventive Action có owner, hạn, metric.","Build a Corrective and Preventive Action plan with owner, due date, metric."],["đã có root cause và cần chuyển thành hành động kiểm soát được","root cause is known and must become tracked actions"],
[P,RW("cp","cp_rows",5,[C("t","cp_a"),C("t","C / P"),C("t","Owner"),C("t","Due"),C("t","Metric")])]);
t("cp_a","Action","Action");t("cp_rows","Danh sách action","Action list");t("cp_rows_h","Type: C = Corrective (xử lý cái đã xảy ra), P = Preventive (ngăn xảy ra). Mỗi action cần Owner, Due và Metric đo hiệu quả.","Type: C = Corrective (fix what happened), P = Preventive (stop it happening). Every action needs an Owner, Due date and success Metric.");

add("pm","act",["Post-mortem","Post-mortem"],["Biên bản blameless sau sự cố, kèm action items.","Blameless post-incident review with action items."],["sau incident hoặc sự cố lớn của dự án/hệ thống","after an incident or a major project/system failure"],
[A("p","pm_p",2),A("impact","pm_i",2),MS("ms","pm_ms"),A("timeline","pm_t",4),A("well","pm_w",2),A("wrong","pm_x",3),A("lucky","pm_l",2),A("causes","pm_c",3),RW("acts","pm_acts",4,[C("t","pm_act"),C("t","P / D / M"),C("n","RC #"),C("t","Owner"),C("t","Due")])]);
t("pm_p","Tóm tắt sự cố","Incident summary");t("pm_p_h","Một đoạn: chuyện gì, khi nào, kéo dài bao lâu.","One paragraph: what, when, how long.");
t("pm_i","Tác động","Impact");t("pm_i_h","Người dùng, doanh thu, SLA, uy tín; càng định lượng càng tốt.","Users, revenue, SLA, reputation; quantify where possible.");
t("pm_t","Timeline","Timeline");t("pm_t_h","Mỗi dòng: giờ - sự kiện (phát hiện, escalate, xử lý, khôi phục).","One per line: time - event (detect, escalate, fix, recover).");
t("pm_w","Điều làm tốt","What went well");t("pm_w_h","Điều giúp giảm thiệt hại, cần giữ lại.","What limited the damage and should be kept.");
t("pm_x","Điều chưa tốt","What went wrong");t("pm_x_h","Mô tả hệ thống và process, không nêu tên người (blameless).","Describe systems and process, not people (blameless).");
t("pm_l","Điều may mắn","Where we got lucky");t("pm_l_h","Điều tránh được chỉ nhờ may: đây là rủi ro tiềm ẩn.","Things avoided only by luck: these are hidden risks.");
t("pm_c","Root cause","Root causes");t("pm_c_h","Mỗi dòng một nguyên nhân gốc (chạy 5 Whys/Fishbone trước nếu chưa rõ).","One root cause per line (run 5 Whys/Fishbone first if unclear).");
t("pm_a","Action items","Action items");t("pm_a_h","Mỗi dòng: việc - owner - hạn.","One per line: action - owner - due.");

const O=["fish","whys","isnot","chg","pareto","scatter","run","cv","d8","capa","pm"];
R.methods.sort((a,b)=>O.indexOf(a.id)-O.indexOf(b.id));
})();
Object.assign(RCA_DATA.ui.vi,{sample:"Thử với dữ liệu mẫu",reset:"Xóa dữ liệu",note:"Dữ liệu mẫu, chỉ mang tính minh họa. Không dùng làm báo cáo chính thức.",cfSample:"Dữ liệu hiện tại sẽ được thay bằng dữ liệu mẫu. Tiếp tục?",cfReset:"Xóa toàn bộ dữ liệu đã nhập?"});
Object.assign(RCA_DATA.ui.en,{sample:"Try with sample data",reset:"Clear data",note:"Sample data, for illustration only. Not for use as an official report.",cfSample:"Current data will be replaced with sample data. Continue?",cfReset:"Clear all entered data?"});
(()=>{const q=(k,v,e)=>{RCA_DATA.T[k]=[v,e]};
q("pm_ms","Mốc thời gian sự cố","Incident milestones");
q("pm_ms_h","Chọn ngày giờ cho từng mốc để tự tính TTD, TTA, TTM, TTR. Tối thiểu 2 mốc; mốc nào chưa biết thì bỏ trống.","Pick a date and time per milestone to compute TTD, TTA, TTM and TTR. At least 2 milestones; leave unknown ones empty.");
q("pm_ms1","Bắt đầu ảnh hưởng","Impact started");q("pm_ms2","Phát hiện","Detected");q("pm_ms3","Tiếp nhận / escalate","Acknowledged / escalated");q("pm_ms4","Giảm nhẹ (mitigated)","Mitigated");q("pm_ms5","Khắc phục (resolved)","Resolved");
q("pm_acts","Action items","Action items");
q("pm_acts_h","Mỗi dòng một action. Type: P = Prevent (ngăn xảy ra), D = Detect (phát hiện sớm hơn), M = Mitigate (giảm thiệt hại). RC # = số thứ tự root cause (theo thứ tự dòng ở mục Root cause) mà action xử lý.","One action per row. Type: P = Prevent (stop it happening), D = Detect (catch it sooner), M = Mitigate (reduce damage). RC # = number of the root cause (by line order in the Root causes box) the action addresses.");
q("pm_act","Action","Action");
q("pm_c_h","Mỗi dòng một nguyên nhân gốc; được đánh số theo thứ tự dòng (1, 2, 3...) để gắn action bên dưới. Chạy 5 Whys hoặc Fishbone trước nếu chưa rõ.","One root cause per line, numbered by line order (1, 2, 3...) so the actions below can reference them. Run 5 Whys or Fishbone first if unclear.");
})();