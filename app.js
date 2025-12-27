// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Bài 1: Tổng quan về lập trình mạng",
        excerpt: "Bài viết này sẽ giúp độc giả có cái nhìn tổng quát về thế giới mạng máy tính và các mô hình giao tiếp cơ bản, bao gồm OSI, TCP/IP, và các giao thức vận chuyển.",
        content: "Bài viết này sẽ giúp độc giả có cái nhìn tổng quát về thế giới mạng máy tính và các mô hình giao tiếp cơ bản...",
        date: "2025-12-22",
        tags: ["Java Networking", "Network Programming", "TCP/IP"]
    },
    {
        id: 2,
        title: "Bài 2: Quản lý các luồng nhập xuất (I/O Streams)",
        excerpt: "Dữ liệu trong mạng di chuyển dưới dạng luồng. Bài blog này sẽ đi sâu vào cách Java xử lý các dòng chảy dữ liệu này, bao gồm byte streams, character streams, và buffering.",
        content: "Dữ liệu trong mạng di chuyển dưới dạng luồng. Bài blog này sẽ đi sâu vào cách Java xử lý các dòng chảy dữ liệu này...",
        date: "2025-12-22",
        tags: ["Java I/O", "Streams", "File Handling"]
    },
    {
        id: 3,
        title: "Bài 3: Lập trình đa tuyến (Multithreading)",
        excerpt: "Đây là kỹ thuật quan trọng để ứng dụng mạng có thể xử lý nhiều yêu cầu cùng lúc. Học cách tạo thread, quản lý thread, và đồng bộ hóa trong Java.",
        content: "Đây là kỹ thuật quan trọng để ứng dụng mạng có thể xử lý nhiều yêu cầu cùng lúc...",
        date: "2025-12-22",
        tags: ["Java Threading", "Concurrency", "Multithreading"]
    },
    {
        id: 4,
        title: "Bài 4: Quản lý địa chỉ kết nối mạng",
        excerpt: "Học cách xác định và tương tác với các tài nguyên trên Internet thông qua Java, sử dụng InetAddress, URL, và URLConnection.",
        content: "Học cách xác định và tương tác với các tài nguyên trên Internet thông qua Java...",
        date: "2025-12-22",
        tags: ["Java Networking", "InetAddress", "URL"]
    },
    {
        id: 5,
        title: "Bài 5: Lập trình Socket cho giao thức TCP",
        excerpt: "Hướng dẫn xây dựng mô hình Khách/Chủ (Client/Server) sử dụng kết nối tin cậy TCP. Học cách tạo Socket, ServerSocket và xử lý nhiều client đồng thời.",
        content: "Hướng dẫn xây dựng mô hình Khách/Chủ (Client/Server) sử dụng kết nối tin cậy TCP...",
        date: "2025-12-22",
        tags: ["Java Socket", "TCP", "Client-Server"]
    },
    {
        id: 6,
        title: "Bài 6: Đa tiến trình và Tuần tự hóa đối tượng",
        excerpt: "Nâng cấp Server đơn lẻ thành Server tương tranh có khả năng phục vụ hàng ngàn khách hàng đồng thời. Học về serialization và cách truyền đối tượng qua mạng.",
        content: "Nâng cấp Server đơn lẻ thành Server tương tranh có khả năng phục vụ hàng ngàn khách hàng đồng thời...",
        date: "2025-12-22",
        tags: ["Java Concurrency", "Serialization", "Network Programming"]
    },
    {
        id: 7,
        title: "Bài 7: Lập trình mạng cho giao thức UDP",
        excerpt: "Giải pháp truyền tin tốc độ cao cho các ứng dụng không yêu cầu độ tin cậy tuyệt đối như Streaming hay Game. Học cách sử dụng DatagramSocket và DatagramPacket.",
        content: "Giải pháp truyền tin tốc độ cao cho các ứng dụng không yêu cầu độ tin cậy tuyệt đối như Streaming hay Game...",
        date: "2025-12-22",
        tags: ["UDP", "DatagramSocket", "Network Programming"]
    },
    {
        id: 8,
        title: "Bài 8: Lập trình Multicast",
        excerpt: "Kỹ thuật truyền dữ liệu hiệu quả từ một nguồn tới một nhóm máy tính cùng lúc. Học về MulticastSocket, joinGroup, và các ứng dụng của multicast.",
        content: "Kỹ thuật truyền dữ liệu hiệu quả từ một nguồn tới một nhóm máy tính cùng lúc...",
        date: "2025-12-22",
        tags: ["Multicast", "Network Programming", "UDP"]
    },
    {
        id: 9,
        title: "Bài 9: Phân tán đối tượng bằng Java RMI",
        excerpt: "Công nghệ cho phép gọi phương thức của một đối tượng ở máy xa như đang gọi cục bộ. Học cách tạo Remote Interface, triển khai RMI Server và Client.",
        content: "Công nghệ cho phép gọi phương thức của một đối tượng ở máy xa như đang gọi cục bộ...",
        date: "2025-12-22",
        tags: ["Java RMI", "Distributed Systems", "Remote Objects"]
    }
];

// Skills data with image icons from skillimage folder
const skills = [
    { name: "C++", icon: "skillimage/c-.png" },
    { name: "DynamoDB", icon: "skillimage/DynamoDB.png" },
    { name: "Flutter", icon: "skillimage/flutter-icon.png" },
    { name: "Git", icon: "skillimage/git.png" },
    { name: "JavaScript", icon: "skillimage/java-script.png" },
    { name: "MySQL", icon: "skillimage/mysql-database.png" }
];

// Render blog posts
function renderPosts(posts) {
    const postsGrid = document.getElementById('postsGrid');
    const noResults = document.getElementById('noResults');
    
    if (posts.length === 0) {
        postsGrid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }
    
    postsGrid.classList.remove('hidden');
    noResults.classList.add('hidden');
    
    postsGrid.innerHTML = posts.map(post => `
        <a href="post-${post.id}.html" class="block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer">
            <article>
                <div class="p-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-sm text-slate-500 font-mono">${formatDate(post.date)}</span>
                    </div>
                    <h3 class="text-xl font-semibold text-navy-900 mb-3">${post.title}</h3>
                    <p class="text-slate-600 mb-4 leading-relaxed">${post.excerpt}</p>
                    <div class="flex flex-wrap gap-2">
                        ${post.tags.map(tag => `
                            <span class="px-2.5 py-1 bg-navy-50 text-navy-700 text-xs font-medium rounded">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </article>
        </a>
    `).join('');
}

// Render skills
function renderSkills() {
    const skillsContainer = document.querySelector('#skills .grid');
    skillsContainer.innerHTML = skills.map(skill => `
        <div class="flex flex-col items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors duration-200 cursor-pointer">
            <div class="w-10 h-10 flex items-center justify-center">
                <img src="${skill.icon}" alt="${skill.name}" class="w-full h-full object-contain" />
            </div>
            <span class="text-sm font-medium text-slate-700">${skill.name}</span>
        </div>
    `).join('');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Search functionality
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        renderPosts(blogPosts);
        return;
    }
    
    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
    );
    
    renderPosts(filteredPosts);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPosts(blogPosts);
    renderSkills();
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

