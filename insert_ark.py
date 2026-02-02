import sys

# 读取原文件
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 读取要插入的内容
with open('ark-section.html', 'r', encoding='utf-8') as f:
    ark_content = f.read()

# 在白皮书之前插入
insert_marker = '    <!-- 白皮书 -->'
if insert_marker in content:
    content = content.replace(insert_marker, ark_content + '\n\n' + insert_marker)
    
    # 写回文件
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully inserted ark section!")
else:
    print("Marker not found!")
