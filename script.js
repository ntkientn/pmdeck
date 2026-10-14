// Dữ liệu PM Deck theo cấu trúc mới
const pmModules = [
    // GROUP 1: Advisors & Analyzers
    {
        title: "PM Tool Advisor",
        description: "Hệ thống AI phân tích và đưa ra giải pháp lựa chọn bộ công cụ tối ưu theo đặc thù dự án.",
        url: "https://ntkientn.github.io/pmdeck/advisor/pmtooladvisor.html",
        icon: "fa-wand-magic-sparkles",
        group: "advisors_analyzers",
        status: "active"
    },
    {
        title: "SWOT Matrix Analytics",
        description: "Ma trận tương tác phân tích Điểm mạnh, Điểm yếu, Cơ hội & Thách thức cho dự án số hóa.",
        url: "https://ntkientn.github.io/pmdeck/advisor/SWOT.html",
        icon: "fa-table-cells-large",
        group: "advisors_analyzers",
        status: "active"
    },
    {
        title: "RACI Matrix Builder",
        description: "Bảng tương tác phân quyền Responsible, Accountable, Consulted, Informed cho thành viên dự án.",
        url: "#",
        icon: "fa-users-viewfinder",
        group: "advisors_analyzers",
        status: "coming"
    },
    {
        title: "Risk & Heatmap Analyzer",
        description: "Ma trận đánh giá mức độ rủi ro dựa trên xác suất (Probability) và tác động (Impact).",
        url: "#",
        icon: "fa-fire",
        group: "advisors_analyzers",
        status: "coming"
    },

    // GROUP 2: Metrics & Calculators
    {
        title: "Earned Value Control (EV/PV/AC)",
        description: "Ứng dụng tương tác tính toán nhanh các chỉ số sức khỏe dự án: CV, SV, CPI, SPI và dự báo EAC.",
        url: "#",
        icon: "fa-calculator",
        group: "metrics_calculators",
        status: "coming"
    },
    {
        title: "Agile Velocity & Burndown",
        description: "Mô phỏng và đo lường tốc độ phân phối của Team, tối ưu hóa kế hoạch Sprint kế tiếp.",
        url: "#",
        icon: "fa-chart-line",
        group: "metrics_calculators",
        status: "coming"
    },
    {
        title: "Estimation Matrix Method",
        description: "Công cụ hỗ trợ định lượng estimation: 3-Point Estimate, PERT, và Planning Poker.",
        url: "#",
        icon: "fa-compass-drafting",
        group: "metrics_calculators",
        status: "coming"
    },
    {
        title: "ROI & Team Capacity Calculator",
        description: "Công cụ tính toán thời gian hoàn vốn và số giờ làm việc thực tế của team trong dự án.",
        url: "#",
        icon: "fa-money-bill-trend-up",
        group: "metrics_calculators",
        status: "coming"
    },

    // GROUP 3: Knowledge & Assets
    {
        title: "PM Tools Reference",
        description: "Thư viện tổng hợp, đánh giá và phân loại ưu-nhược điểm các phần mềm quản trị phổ biến.",
        url: "https://ntkientn.github.io/pmdeck/knowledge/pmtoolsref.html",
        icon: "fa-layer-group",
        group: "knowledge_assets",
        status: "active"
    },
    {
        title: "Process Guide Lookup",
        description: "Tra cứu nhanh quy trình chuẩn PMP/Agile, bộ hướng dẫn kiểm soát rủi ro và quản lý stakeholder.",
        url: "#",
        icon: "fa-book-bookmark",
        group: "knowledge_assets",
        status: "coming"
    },
    {
        title: "Artifacts & Templates Base",
        description: "Kho lưu trữ biểu mẫu, checklist bàn giao và tài liệu quản trị tinh gọn tải về ngay.",
        url: "#",
        icon: "fa-folder-open",
        group: "knowledge_assets",
        status: "coming"
    },
    {
        title: "PM Glossary & Cheat Sheets",
        description: "Từ điển tra cứu thuật ngữ và các bảng tóm tắt kiến thức (Cheat sheet) cho PM thực chiến.",
        url: "#",
        icon: "fa-spell-check",
        group: "knowledge_assets",
        status: "coming"
    }
];

// CONFIG ĐỊNH DANH 3 CỘT TRELLO
const groupConfigs = {
    advisors_analyzers: { title: "Advisors & Analyzers", icon: "fa-network-wired" },
    metrics_calculators: { title: "Metrics & Calculators", icon: "fa-laptop-code" },
    knowledge_assets: { title: "Knowledge & Assets", icon: "fa-database" }
};

// HIỆU ỨNG MOUSE GLOW
const mouseGlow = document.getElementById('mouseGlow');
document.addEventListener('mousemove', (e) => {
    mouseGlow.style.left = e.clientX + 'px';
    mouseGlow.style.top = e.clientY + 'px';
});

function launchModule(url, status) {
    if (status === 'coming') return;
    window.location.href = url;
}

// HÀM BUILD BOARD 3 CỘT DÀN NGANG
// HÀM BUILD BOARD 3 CỘT VÀ TẠO TAB MOBILE
function buildTrelloBoard() {
    const board = document.getElementById('trelloBoard');
    const mobileTabs = document.getElementById('mobileTabs');
    board.innerHTML = '';
    if(mobileTabs) mobileTabs.innerHTML = '';

    const total = pmModules.length;
    const activeCount = pmModules.filter(m => m.status === 'active').length;
    document.getElementById('activeCounter').innerText = `${activeCount}/${total}`;

    let columnIndex = 0;
    const columnsArray = []; // Mảng chứa các cột để làm observer

    Object.keys(groupConfigs).forEach((groupKey, index) => {
        const columnModules = pmModules.filter(m => m.group === groupKey);
        
        // 1. TẠO CỘT HTML
        const columnEl = document.createElement('div');
        columnEl.className = 'trello-column';
        // Đặt ID cho cột để scroll đến
        columnEl.id = `col-${index}`; 
        
        let columnHTML = `
            <div class="column-header">
                <i class="fa-solid ${groupConfigs[groupKey].icon}"></i> ${groupConfigs[groupKey].title}
            </div>
            <div class="cards-vertical-list">
        `;

        columnModules.forEach(mod => {
            const isActive = mod.status === 'active';
            const statusText = isActive ? "Active" : "Coming Soon";
            const statusColor = isActive ? "var(--color-active)" : "var(--color-coming)";

            columnHTML += `
                <div class="tool-card ${isActive ? '' : 'coming-soon'}" onclick="launchModule('${mod.url}', '${mod.status}')">
                    <div class="card-top-bar">
                        <div class="icon-wrapper"><i class="fa-solid ${mod.icon}"></i></div>
                        <div class="status-dot" style="color: ${statusColor}; border: 1px solid ${statusColor}33;">
                            <span class="dot" style="background-color: ${statusColor}; box-shadow: 0 0 6px ${statusColor};"></span>
                            ${statusText}
                        </div>
                    </div>
                    <div class="card-meta">
                        <h3>${mod.title}</h3>
                        <p class="card-desc">${mod.description}</p>
                    </div>
                    <div class="card-action-arrow">
                        ${isActive ? '<i class="fa-solid fa-arrow-right-long"></i>' : '<i class="fa-solid fa-lock" style="font-size:11px; opacity:0.5;"></i>'}
                    </div>
                </div>
            `;
        });
        columnHTML += `</div>`; 
        columnEl.innerHTML = columnHTML;
        board.appendChild(columnEl);
        columnsArray.push(columnEl);

        // 2. TẠO NÚT TAB CHO MOBILE
        if(mobileTabs) {
            // Lấy từ khóa ngắn gọn cho tab: "Advisors", "Metrics", "Assets"
            const shortName = groupConfigs[groupKey].title.split('&')[0].trim();
            const tabBtn = document.createElement('button');
            tabBtn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
            tabBtn.innerText = shortName;
            
            // Xử lý sự kiện khi User click vào Tab
            tabBtn.addEventListener('click', () => {
                // 1. TRƯỢT NGANG (Chuyển cột)
                const scrollPos = columnEl.offsetLeft - board.offsetLeft;
                board.scrollTo({ 
                    left: scrollPos, 
                    behavior: 'smooth' 
                });

                // 2. CUỘN DỌC (Scroll to top của Board)
                // Lấy vị trí mép trên của board so với toàn bộ trang web
                const boardTop = board.getBoundingClientRect().top + window.scrollY;
                
                // Cuộn màn hình lên đầu Board (trừ đi 20px để cách mép trên cho thoáng)
                window.scrollTo({
                    top: boardTop - 20, 
                    behavior: 'smooth'
                });
            });
            mobileTabs.appendChild(tabBtn);
        }
    });

    // 3. INTERSECTION OBSERVER: Tự động đổi màu Tab khi User vuốt ngang
    if (window.IntersectionObserver && mobileTabs) {
        const observerOptions = {
            root: board, // Khung theo dõi là thanh cuộn ngang của board
            threshold: 0.6 // Cột chiếm 60% màn hình thì được coi là đang Active
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Cột nào đang hiện trên màn hình, lấy index của cột đó
                    const activeIndex = entry.target.id.split('-')[1];
                    // Xóa class active của tất cả các tab
                    const allTabs = mobileTabs.querySelectorAll('.tab-btn');
                    allTabs.forEach(tab => tab.classList.remove('active'));
                    // Gắn lại class active cho tab tương ứng
                    if(allTabs[activeIndex]) {
                        allTabs[activeIndex].classList.add('active');
                    }
                }
            });
        }, observerOptions);

        // Kích hoạt theo dõi cho từng cột
        columnsArray.forEach(col => observer.observe(col));
    }
}

window.addEventListener('DOMContentLoaded', buildTrelloBoard);
