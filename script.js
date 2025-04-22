document.addEventListener('DOMContentLoaded', function () {
    const skillsList = document.querySelector('#skills .skills-list');
    const projectsGrid = document.querySelector('#projects .projects-grid');
    const certificatesList = document.querySelector('#certificates .certificates-list');

    const skillsData = [
        { name: 'Web Geliştirme', level: 75 },
        { name: 'Mobil Geliştirme', level: 60 },
        { name: 'Native Geliştirme', level: 50 },
        { name: 'GUI Geliştirme', level: 50 },
        { name: 'Yazılım Testi', level: 71 },
        { name: 'MS Office', level: 85 },
        { name: 'İşletim Sistemleri', level: 71 },
        { name: 'VS Code,Android Studio,PyCharm', level: 90 },
        { name: 'Docker', level: 30 },
        { name: 'Git & Github', level: 90 },
        { name: 'Jira & ClickUp', level: 100 },
        { name: 'DBeaver', level: 75 },
        { name: 'Postman', level: 71 },
        { name: 'Firebase', level: 60 },
        { name: 'Canva', level: 50 },
        { name: 'Zap', level: 40 },
    ];

    const projects = [
        {
            title: 'Mors Selektor',
            description: 'Bu mobil uygulama, sözlü mesajları Mors alfabesine çevirip flaşla iletir. 2. versiyonda ise makine öğrenimi ile flaşla gönderilen Mors kodlarını çözerek metne dönüştürmeyi hedeflemektedir.',
            skills: ['Kotlin', 'XML', 'Android Studio', 'Gooole ML Kit'],
            link: 'https://github.com/pessimisticdeveloper/mors-selektor'
        },
        {
            title: 'Coin Price Tracking',
            description: 'Django Rest API ve MS SQL ile geliştirilen bu web projesi, kripto para anlık fiyat ve piyasa hacmi bilgilerini gerçek zamanlı sunmaktaydı.',
            skills: ['Django', 'Python', 'Pycharm', 'MS SQL', 'HTML', 'CSS', 'JavaScript', 'Rest Framework', 'json'],
            link: 'https://github.com/pessimisticdeveloper/Coin-Price-Tracking'
        },
        {
            title: 'Not App',
            description: 'Bu uygulama, Flutter geliştirme çerçevesi kullanılarak hayata geçirilmiş, temel not alma işlevselliği sunan klasik bir mobil uygulamadır.',
            skills: ['Flutter', 'Dart', 'Android Studio','SQLite'],
            link: 'https://github.com/pessimisticdeveloper/Not-App'
        },
    ];

    const certificates = [
        { name: 'Nesnelerin İnterneti (IoT) ve Güvenliği', institution: 'BTK Akademi', year: '2022' },
        { name: 'DoS / DDos Saldırıları ve Koruma', institution: 'BTK Akademi', year: '2022' },
        { name: 'Versiyon Kontrolleri: Git ve GitHub', institution: 'BTK Akademi', year: '2022' },
        { name: 'Temel Linux (101-201-301-401)', institution: 'Turkcell Akademi', year: '2022' },
        { name: 'Sosyal Mühendislik ve Oltalama', institution: 'BTK Akademi', year: '2022' },
        { name: 'Android (101-201-301-401)', institution: 'Turkcell Akademi', year: '2022' },
        { name: 'Kotlin (101-201-301-401)', institution: 'Turkcell Akademi', year: '2022' },
        { name: 'Adobe XD ile UI-UX Tasarımı', institution: 'BTK Akademi', year: '2023' },
        { name: 'Kotlin İle Android Mobil Uygulama Geliştirme Eğitimi Temel Seviye', institution: 'BTK Akademi', year: '2021' },
        { name: 'Proje Yönetimi', institution: 'BTK Akademi', year: '2023' },
        { name: 'Python (101-201-301-401)', institution: 'Turkcell Akademi', year: '2021' },
        { name: 'Jetpack Compose ile Android Mobil Uygulama Geliştirme', institution: 'BTK Akademi', year: '2025' },
        { name: 'Django ile Web Geliştirme', institution: 'BTK Akademi', year: '2024' },
        { name: 'Google Flutter ile Mobil Uygulama', institution: 'BTK Akademi', year: '2023' },
        { name: 'Firebase ile Proje Geliştirme', institution: 'BTK Akademi', year: '2023' },
        { name: 'Sıfırdan İleri Seviye Python Programlama', institution: 'BTK Akademi', year: '2021' },
        { name: 'Kotlin ile Android Mobil Uygulama Geliştirme İleri Seviye', institution: 'BTK Akademi', year: '2024' }
    ];

    skillsData.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.name;

        const levelBarContainer = document.createElement('div');
        levelBarContainer.classList.add('level-bar-container');

        const levelBar = document.createElement('div');
        levelBar.classList.add('level-bar');
        levelBar.style.width = `${skill.level}%`;

        if (skill.level >= 0 && skill.level <= 35) {
            levelBar.style.backgroundColor = 'red';
        } else if (skill.level > 35 && skill.level <= 70) {
            levelBar.style.backgroundColor = 'yellow';
            levelBar.style.color = '#333';
        } else if (skill.level > 70 && skill.level <= 100) {
            levelBar.style.backgroundColor = 'green';
        }

        levelBarContainer.appendChild(levelBar);
        li.appendChild(levelBarContainer);
        skillsList.appendChild(li);
    });

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <p><strong>Teknolojiler:</strong> ${project.skills ? project.skills.join(', ') : 'Belirtilmemiş'}</p>
            <p><a target="_blank" href="${project.link}">Github Linki</a></p>
        `;
        projectsGrid.appendChild(projectCard);
    });

    certificates.forEach(cert => {
        const li = document.createElement('li');
        li.textContent = `${cert.name} - ${cert.institution} (${cert.year})`;
        certificatesList.appendChild(li);
    });

    skillsList.querySelectorAll('li').forEach(li => {
        li.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#4a5264';
            this.style.color = '#fff';
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.2s ease-in-out';
        });
        li.addEventListener('mouseout', function () {
            this.style.backgroundColor = '#383e4a';
            this.style.color = '#abb2bf';
            this.style.transform = 'scale(1)';
        });
    });

    projectsGrid.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease-in-out';
        });
        card.addEventListener('mouseleave', function () {
            this.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
            this.style.transform = 'translateY(0)';
        });
    });

    document.querySelector('.container').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.container').style.transition = 'opacity 0.5s ease-in-out';
        document.querySelector('.container').style.opacity = 1;
    }, 100);
});
