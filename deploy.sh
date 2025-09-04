#!/bin/bash

# 部署到AWS Lambda的脚本

# 打包项目
npm run build

# 部署到S3
aws s3 sync build/ s3://my-updated-s3-bucket-name/

# 更新Lambda函数
aws lambda update-function-code \
    --function-name your-function-name \
    --s3-bucket my-updated-s3-bucket-name \
    --s3-key index.zip

echo "部署完成！"