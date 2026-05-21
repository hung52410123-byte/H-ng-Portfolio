document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page-section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // 1. Loại bỏ trạng thái active của tất cả các nút điều hướng
            navLinks.forEach(item => item.classList.remove("active"));
            // Thêm trạng thái active cho nút vừa click
            this.classList.add("active");

            // 2. Ẩn toàn bộ các trang nội dung bằng cách xóa class active
            sections.forEach(section => section.classList.remove("active"));

            // 3. Lấy id mục tiêu và kích hoạt trang đó hiển thị lên
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });
});