#!/bin/bash

PROJECT_DIR="/home/ziwen/workplace/daily-paper-reader"

echo "🚧 开始重新部署..."

# 1. 进入项目目录
cd $PROJECT_DIR

# 1.1 加载环境变量（如果存在 .env 文件）
if [ -f ".env" ]; then
  # 忽略注释行，将 KEY=VALUE 导出为环境变量
  export $(grep -v '^#' .env | xargs)
  echo "✅ 已从 .env 加载环境变量"
fi

# 2. 拉取最新代码 (如果你是用 git 管理的，把下面这行的注释取消掉)
# git pull origin main

# 3. 重启后端 (FastAPI)
echo "🔄 重启 Python 后端..."
pkill -f uvicorn
sleep 2 # 等待进程完全退出
nohup uvicorn app.main:app --host 127.0.0.1 --port 8008 > app.log 2>&1 &
echo "✅ 后端已后台启动"

# 4. 重载 Nginx (可选，只有改了 Nginx 配置才需要，但多跑一次也没事)
echo "🔄 重载 Nginx..."
sudo systemctl reload nginx
echo "✅ Nginx 已重载"

echo "🚀 部署完成！请访问网站测试。"
