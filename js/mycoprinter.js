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
            
            let top = 70;
            if (rect.top >= top) {
                top = rect.top - top;
            }

            //console.log(`top of ${anchor}: ${top}`);
            
            window.scrollTo(0, top);
            history.pushState('', '', '#' + anchor);
        }
    });
}