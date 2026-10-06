# 1. Bắt đầu từ một "máy" có sẵn Node 22
FROM node:22-alpine

# 2. Làm việc trong thư mục /app bên trong thùng
WORKDIR /app

# 3. Copy file khai báo thư viện rồi cài thư viện (bỏ thư viện chỉ dùng khi dev)
COPY package*.json ./
RUN npm ci --omit=dev

# 4. Copy toàn bộ code vào
COPY . .

# 5. App lắng nghe cổng 3000
EXPOSE 3000

# 6. Lệnh chạy khi thùng được mở
CMD ["node", "app.js"]
