const containerElement = document.querySelector('#body');
let h = null;

const handleScroll = () => {
    if (h !== null) {
        clearTimeout(h);
    }
    if (containerElement.classList.contains('on-scrollbar') === false) {
        containerElement.classList.add('on-scrollbar');
    }
    h =setTimeout(() => {
        containerElement.classList.remove('on-scrollbar');
    }, 800);
    };

    containerElement.addEventListener('scroll', handleScroll);

function lastScroll() {
    var lastScroll = 0;
    window.scroll(function(event){
        var st = this.scrollTop();
        if (st > lastScroll){
            if(window.scrollTop() >= 100) {
                "#btnTop".hide();
            }
        } else {
            "#btnTop".show();
        }
        lastScroll = st;
    });
};