const links = document.getElementsByClassName('n');
let i = 0;
let j = links.length;

for (; i < j; i++) {
    links[i].addEventListener('click', function(event) {
        if (this.hash) {
            event.preventDefault();
            const anchor = this.hash.substr(1);
            window.scrollTo(0, 0);
            const rect = document
                .getElementById(anchor)
                .getBoundingClientRect();
            
            let top = 100;
            if (rect.top >= top) {
                top = rect.top - top;
            }

            //console.log(`top of ${anchor}: ${top}`);
            
            window.scrollTo(0, top);
            history.pushState('', '', '#' + anchor);
        }
    });
}

const menu = [
    'about',
    'reports',
    'exhibition',
    'acknowledgements',
    'license'
];

const menuMaker = function() {
    let menuHtml = '<a href="index.html"><b>MP</b></a>';
    const j = menu.length;

    if (window.innerWidth > 550) {
        let i = 0;
        for (; i < j; i++) {
            if (menu[i] === 'reports') {
                menuHtml += `<a class="n" href="${menu[i]}.html" onclick="showReports(event);">${menu[i]}</a>`;
            }
            else {
                menuHtml += `<a class="n" href="${menu[i]}.html">${menu[i]}</a>`;
            }
        }
    }
    else {
        let i = 0;
        for (; i < j; i++) {
            if (menu[i] === 'reports') {
                menuHtml += `<a href="${menu[i]}.html" onclick="showReports(event);">${menu[i].substr(0, 2)}</a>`;
            }
            else {
                menuHtml += `<a href="${menu[i]}.html">${menu[i].substr(0, 2)}</a>`;
            }
        }
    }

    const mainMenu = document.getElementById('mainMenu');
    mainMenu.innerHTML = menuHtml;
}

const subMenu = [
    {link: 'mid-project-report.html', text: 'Mid-Project Report'},
    {link: 'final-report.html', text: 'Final Report'}
];

const showReports = function(event) {
    let subMenuHtml = '';
    let i = 0;
    const j = subMenu.length;
    for (; i < j; i++) {
        subMenuHtml += `<a href="${subMenu[i]['link']}">${subMenu[i]['text']}</a>`;
    }

    const subMenuContainer = document.getElementById('subMenu');
    if (subMenuContainer.className === 'container on') {
        subMenuContainer.className = 'container off';
    }
    else if (subMenuContainer.className === 'container off') {
        subMenuContainer.className = 'container on';
        subMenuContainer.innerHTML = subMenuHtml;
    }

    event.preventDefault();
    event.stopPropagation();
    return false;
};