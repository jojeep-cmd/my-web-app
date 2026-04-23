-- Xóa bảng cũ nếu tồn tại (để bắt đầu lại từ đầu)
DROP TABLE IF EXISTS posts;

-- Tạo bảng "posts" (bài viết)
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Thêm dữ liệu mẫu
INSERT INTO posts (title, content) VALUES
  ('Bài viết đầu tiên', 'Xin chào! Đây là bài viết đầu tiên trên web app của mình.'),
  ('Hướng dẫn Astro', 'Astro là framework tuyệt vời cho việc xây dựng web app hiện đại.');
