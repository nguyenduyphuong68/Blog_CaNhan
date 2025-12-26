// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Xây Dựng Ứng Dụng Mobile với Flutter",
        excerpt: "Khám phá Flutter framework để phát triển ứng dụng mobile đa nền tảng, từ State Management đến Widget Tree và Performance Optimization.",
        content: "Flutter là một framework mã nguồn mở của Google để xây dựng ứng dụng mobile đa nền tảng...",
        date: "2026-12-22",
        tags: ["Flutter", "Mobile Development", "Dart"]
    },
    {
        id: 2,
        title: "Các Pattern Giao Tiếp trong Microservices",
        excerpt: "Khám phá các pattern giao tiếp đồng bộ và bất đồng bộ trong kiến trúc microservices, bao gồm REST, gRPC, và message queues.",
        content: "Kiến trúc microservices yêu cầu cân nhắc cẩn thận về cách các services giao tiếp với nhau...",
        date: "2026-12-22",
        tags: ["Microservices", "Architecture", "Distributed Systems"]
    },
    {
        id: 3,
        title: "Java Memory Model và Concurrency",
        excerpt: "Hướng dẫn toàn diện về Java Memory Model, happens-before relationships, và cách viết thread-safe code.",
        content: "Java Memory Model (JMM) định nghĩa cách các threads tương tác qua memory và các hành vi được đảm bảo...",
        date: "2026-12-22",
        tags: ["Java", "Concurrency", "Performance"]
    },
    {
        id: 4,
        title: "Xây Dựng RESTful APIs với Spring WebFlux",
        excerpt: "Học cách xây dựng reactive REST APIs sử dụng Spring WebFlux, khám phá lợi ích của non-blocking I/O và reactive streams.",
        content: "Spring WebFlux cung cấp mô hình reactive programming để xây dựng web applications...",
        date: "2026-12-22",
        tags: ["Spring", "Reactive", "API"]
    },
    {
        id: 5,
        title: "Docker hóa Java Applications",
        excerpt: "Best practices cho việc containerize Java applications với Docker, bao gồm multi-stage builds và JVM tuning cho containers.",
        content: "Containerization đã trở nên thiết yếu cho việc triển khai Java applications hiện đại...",
        date: "2026-12-22",
        tags: ["Docker", "DevOps", "Java"]
    },
    {
        id: 6,
        title: "Kỹ Thuật Testing Nâng Cao với JUnit 5",
        excerpt: "Làm chủ các tính năng nâng cao của JUnit 5 bao gồm parameterized tests, test templates, và custom extensions cho các scenarios testing phức tạp.",
        content: "JUnit 5 giới thiệu các tính năng mạnh mẽ vượt xa basic unit testing...",
        date: "2026-12-22",
        tags: ["Testing", "JUnit", "Quality"]
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

