// SofiCoin 网站交互脚本

// 平滑滚动
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

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为所有卡片和模块添加滚动动画
document.querySelectorAll('.card, .module-item, .flow-step, .region, .safety-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 语言切换（简化版）
const langSwitch = document.querySelector('.lang-switch');
let currentLang = 'zh';

langSwitch.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentLang === 'zh') {
        currentLang = 'en';
        langSwitch.textContent = '中文';
        // 这里可以添加实际的语言切换逻辑
        alert('English version coming soon! 英文版即将推出！');
    } else {
        currentLang = 'zh';
        langSwitch.textContent = 'EN';
    }
});

// 表单提交
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // 这里应该连接到后端API
        console.log('Form submitted:', { name, email, message });
        
        // 显示成功消息
        alert('感谢您的留言！我们会尽快回复您。\nThank you for your message! We will get back to you soon.');
        
        // 重置表单
        contactForm.reset();
    });
}

// 添加粒子效果到英雄区（可选）
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
}

// 初始化粒子效果
createParticles();

// 统计访问（简化版）
console.log('SofiCoin Website Loaded - 爱，是技术的起点，也是终点');

// 添加键盘快捷键
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 打开搜索（未来功能）
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Search feature coming soon!');
    }
});

// 检测暗色模式偏好（未来功能）
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('Dark mode detected - feature coming soon');
}

// 性能监控
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});
