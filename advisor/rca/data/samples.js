/* Dữ liệu mẫu: một tình huống xuyên suốt cho cả 11 method.
   B(vi, en) = văn bản hai ngôn ngữ. Số và chuỗi thường dùng chung cho cả hai. */
window.RCA_SAMPLES=(()=>{
const B=(vi,en)=>({vi,en});
const P=B("Tỷ lệ bug lọt UAT của app mobile bán lẻ tăng từ 5% lên 18% trong Sprint 14-15, khiến khách hàng từ chối nghiệm thu release 3.2.",
 "The UAT escaped-bug rate of the retail mobile app rose from 5% to 18% in Sprints 14-15, and the customer rejected release 3.2.");
return{
isnot:{p:P,
 what1:B("Bug ở module Thanh toán QR và Giỏ hàng","Bugs in the QR Payment and Cart modules"),what2:B("Module Tài khoản và Tìm kiếm không bị","Account and Search modules are not affected"),
 where1:B("UAT và Production","UAT and Production"),where2:B("Dev và QA nội bộ không thấy lỗi","Not seen in Dev and internal QA"),
 when1:B("Từ Sprint 14, sau khi merge nhánh Thanh toán QR","From Sprint 14, after merging the QR Payment branch"),when2:B("Trước Sprint 14 tỷ lệ ổn định khoảng 5%","Before Sprint 14 the rate was stable at about 5%"),
 ext1:B("18% test case UAT fail, tăng qua từng sprint","18% of UAT test cases fail, rising each sprint"),ext2:B("Bản iOS cũ 3.1 không bị ảnh hưởng","The older iOS 3.1 build is unaffected"),
 dist:B("Các module lỗi đều do 3 dev mới phụ trách\nTest tự động chưa bao phủ Thanh toán QR\nMôi trường QA khác UAT\nRegression test bị rút gọn từ Sprint 14","The failing modules were all handled by the 3 new developers\nAutomated tests do not cover QR Payment\nThe QA environment differs from UAT\nRegression testing was cut down from Sprint 14")},
chg:{p:P,ca:[
 [B("Quy mô team","Team size"),B("6 người","6 people"),B("9 người (3 người mới)","9 people (3 new)"),4],
 [B("Regression test","Regression testing"),B("Chạy đủ 320 case","Full 320 cases"),B("Rút gọn còn 150 case","Cut to 150 cases"),5],
 [B("Code review","Code review"),B("2 reviewer mỗi PR","2 reviewers per PR"),B("1 reviewer mỗi PR","1 reviewer per PR"),4],
 [B("Phạm vi mỗi sprint","Scope per sprint"),B("5 user story","5 user stories"),B("9 user story","9 user stories"),4],
 [B("Môi trường QA","QA environment"),"Sandbox A","Sandbox A",1],
 [B("Công cụ CI","CI tool"),"Jenkins","Jenkins",2]]},
whys:{p:P,w:[
 B("Bug lọt sang UAT nhiều hơn","More bugs escape into UAT"),
 B("Vì lỗi không bị phát hiện ở bước QA","Because defects are not caught during QA"),
 B("Vì regression test chỉ chạy một phần (150/320 case)","Because regression testing only runs partially (150 of 320 cases)"),
 B("Vì mỗi sprint dồn nhiều story hơn nên QA phải rút gọn test","Because each sprint carries more stories, so QA had to cut tests"),
 B("Vì sprint planning không tính capacity cho regression khi team mở rộng","Because sprint planning does not reserve regression capacity when the team grows")]},
fish:{p:P,c:[
 {k:"0",l:[B("!3 dev mới chưa quen codebase và quy chuẩn kiểm thử","!3 new developers unfamiliar with the codebase and test standards"),B("QA quá tải khi release dồn","QA overloaded by clustered releases")]},
 {k:"1",l:[B("!Regression test bị rút gọn từ Sprint 14","!Regression testing cut down from Sprint 14"),B("Sprint planning không tính capacity cho test","Sprint planning ignores test capacity"),B("Code review chỉ còn 1 reviewer","Code review down to 1 reviewer")]},
 {k:"2",l:[B("Test tự động chưa bao phủ Thanh toán QR","Test automation does not cover QR Payment"),B("Môi trường QA khác UAT","QA environment differs from UAT")]},
 {k:"3",l:[B("Acceptance criteria của story QR còn mơ hồ","Acceptance criteria of QR stories are vague"),B("Yêu cầu thay đổi giữa sprint","Requirements change mid-sprint")]},
 {k:"4",l:[B("Cổng thanh toán đối tác đổi API không báo trước","Payment gateway partner changed its API without notice")]},
 {k:"5",l:[B("!Ưu tiên tốc độ release hơn chất lượng","!Release speed prioritized over quality"),B("Sprint review không có chỉ số chất lượng","No quality metrics in sprint review")]}]},
pareto:{p:P,r:[
 [B("Thiếu regression test","Missing regression tests"),42],[B("Yêu cầu mơ hồ","Vague requirements"),23],[B("Lỗi tích hợp cổng thanh toán","Payment gateway integration"),15],
 [B("QA khác môi trường UAT","QA differs from UAT"),9],[B("Lỗi UI trên thiết bị cũ","UI defects on older devices"),6],[B("Khác","Other"),5]]},
scatter:{p:P,sx:B("Số user story mỗi sprint","User stories per sprint"),sy:B("Bug lọt UAT","Bugs escaped to UAT"),
 pts:[[5,3],[5,4],[6,4],[6,6],[7,7],[7,8],[8,10],[9,14],[9,15],[10,18]]},
run:{p:P,rc:"4,5,3,5,4,6,12,13,14,12,15,16"},
cv:{p:P,cv:[
 [B("Regression test bị rút gọn bỏ sót lỗi","Cut-down regression testing misses defects"),5,1,B("Chạy lại đủ 320 case trên release 3.2 và đếm bug phát hiện thêm","Re-run all 320 cases on release 3.2 and count the extra bugs found")],
 [B("Quy mô team tăng, thiếu hướng dẫn cho thành viên mới","Team growth without onboarding guidance"),4,2,B("So sánh tỷ lệ bug của dev mới và dev cũ","Compare bug rates of new vs existing developers")],
 [B("Yêu cầu mơ hồ","Vague requirements"),3,2,B("Review acceptance criteria của 10 story gần nhất","Review acceptance criteria of the last 10 stories")],
 [B("Môi trường QA khác UAT","QA environment differs from UAT"),1,3,B("Đối chiếu cấu hình QA và UAT","Compare QA and UAT configuration")]]},
d8:{p:P,
 d1:B("Champion: QA Manager. Thành viên: PM, Dev Lead, QA Lead, BA, đại diện khách hàng","Champion: QA Manager. Members: PM, Dev Lead, QA Lead, BA, customer representative"),
 d3:B("Chạy lại toàn bộ 320 regression case trước khi release 3.2 lên Production; tạm hoãn hotfix chưa test","Re-run all 320 regression cases before release 3.2 goes to Production; hold untested hotfixes"),
 d4:B("Root cause: sprint planning không dành capacity cho regression khi team mở rộng, nên regression bị rút gọn từ 320 xuống 150 case.\nEscape point: không có kiểm soát nào chặn release khi regression chưa đủ số case.","Root cause: sprint planning reserved no regression capacity when the team grew, so regression was cut from 320 to 150 cases.\nEscape point: no control blocks a release when regression is incomplete."),
 d5:B("Đưa regression đủ 320 case vào Definition of Done; tự động hóa 60% case; thêm quality gate trong CI chặn merge khi regression không đạt","Add the full 320-case regression to the Definition of Done; automate 60% of cases; add a CI quality gate that blocks merges when regression fails"),
 d6:B("Áp dụng từ Sprint 16. Sau 2 sprint, tỷ lệ bug lọt UAT giảm từ 18% xuống 6%, 100% release có đủ regression","Applied from Sprint 16. After 2 sprints the UAT escaped-bug rate fell from 18% to 6%, and 100% of releases had full regression"),
 d7:B("Cập nhật mẫu sprint planning có mục capacity cho QA; checklist release; đào tạo 3 thành viên mới; áp dụng cho 2 dự án khác","Update the sprint planning template with QA capacity; release checklist; train the 3 new members; extend to 2 other projects"),
 d8:B("Khách hàng xác nhận đóng báo cáo; ghi vào Lessons Learned Register; ghi nhận đội QA","Customer signed off the report; recorded in the Lessons Learned Register; QA team recognized")},
capa:{p:P,cp:[
 [B("Chạy lại đủ 320 regression case cho release 3.2","Re-run all 320 regression cases for release 3.2"),"C","QA Lead","20/11/2026",B("0 bug nghiêm trọng còn mở","0 open critical bugs")],
 [B("Đưa regression đủ 320 case vào Definition of Done","Add full 320-case regression to the Definition of Done"),"P","Dev Lead","30/11/2026",B("100% story đạt DoD","100% of stories meet DoD")],
 [B("Thêm quality gate regression vào CI","Add a regression quality gate to CI"),"P","DevOps","15/12/2026",B("Chặn 100% merge không đạt","100% of failing merges blocked")],
 [B("Tự động hóa 60% regression case","Automate 60% of regression cases"),"P","QA Lead","31/01/2027",B("Tỷ lệ tự động hóa 60%","60% automation rate")],
 [B("Cập nhật mẫu sprint planning có capacity cho QA","Update the sprint planning template with QA capacity"),"P","PM","30/11/2026",B("100% sprint planning dùng mẫu mới","100% of sprint plannings use the new template")]]},
pm:{
 p:B("Từ Sprint 14 đến 15, tỷ lệ bug lọt UAT của app bán lẻ tăng từ 5% lên 18%; khách hàng từ chối nghiệm thu release 3.2; sự cố kéo dài 6 tuần.","From Sprint 14 to 15 the UAT escaped-bug rate of the retail app rose from 5% to 18%; the customer rejected release 3.2; the incident lasted 6 weeks."),
 impact:B("Release 3.2 trễ 2 tuần; 3 buổi họp khẩn với khách hàng; khoảng 120 giờ công sửa lỗi và test lại","Release 3.2 delayed by 2 weeks; 3 emergency customer meetings; about 120 person-hours of fixing and retesting"),
 timeline:B("Tuần 1 - Sprint 14 merge nhánh Thanh toán QR\nTuần 3 - UAT phát hiện 18% test case fail\nTuần 3 - Khách hàng từ chối nghiệm thu, escalate lên PM\nTuần 4 - Họp khẩn, thống nhất chạy lại toàn bộ regression\nTuần 5 - Chạy đủ 320 case, sửa 27 bug\nTuần 6 - Khách hàng nghiệm thu release 3.2","Week 1 - Sprint 14 merges the QR Payment branch\nWeek 3 - UAT finds 18% of test cases failing\nWeek 3 - Customer rejects acceptance, escalated to PM\nWeek 4 - Emergency meeting, agree to re-run all regression\nWeek 5 - Full 320 cases run, 27 bugs fixed\nWeek 6 - Customer accepts release 3.2"),
 well:B("Escalate sớm lên PM trong ngày; team phối hợp nhanh với khách hàng","Early same-day escalation to the PM; fast team and customer coordination"),
 wrong:B("Regression bị rút gọn nhưng không ai đánh giá rủi ro; sprint planning không tính capacity cho test; không có quality gate trước UAT","Regression was cut with no risk assessment; sprint planning ignored test capacity; no quality gate before UAT"),
 lucky:B("Lỗi được UAT phát hiện trước khi lên Production","The defects were caught in UAT before reaching Production"),
 causes:B("Sprint planning không dành capacity cho regression khi team mở rộng\nKhông có quality gate chặn release khi regression chưa đủ","Sprint planning reserved no regression capacity as the team grew\nNo quality gate blocks a release when regression is incomplete"),
 actions:B("Đưa regression vào Definition of Done - Dev Lead - 30/11\nThêm quality gate vào CI - DevOps - 15/12\nMẫu sprint planning có capacity QA - PM - 30/11","Add regression to the Definition of Done - Dev Lead - 30/11\nAdd a quality gate to CI - DevOps - 15/12\nSprint planning template with QA capacity - PM - 30/11")}
};})();
(()=>{const B=(vi,en)=>({vi,en});
Object.assign(RCA_SAMPLES.pm,{
 ms1:"2026-09-14T09:00",ms2:"2026-09-28T10:00",ms3:"2026-09-28T14:30",ms4:"2026-10-05T09:00",ms5:"2026-10-16T17:00",
 acts:[
  [B("Đưa regression đủ 320 case vào Definition of Done","Add full 320-case regression to the Definition of Done"),"P",1,"Dev Lead","30/11"],
  [B("Thêm quality gate regression vào CI","Add a regression quality gate to CI"),"D",2,"DevOps","15/12"],
  [B("Cập nhật mẫu sprint planning có capacity cho QA","Update the sprint planning template with QA capacity"),"P",1,"PM","30/11"],
  [B("Dashboard theo dõi tỷ lệ bug lọt UAT mỗi sprint","Dashboard tracking the UAT escaped-bug rate per sprint"),"D",2,"QA Lead","15/12"],
  [B("Quy trình rollback và hoãn release khi regression chưa đạt","Rollback and release-hold procedure when regression is incomplete"),"M",2,"Release Manager","20/12"]]});
})();