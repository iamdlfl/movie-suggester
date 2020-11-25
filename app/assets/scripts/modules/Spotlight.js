import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class Spotlight {
    constructor() {
        this.bannerText = document.querySelector('.banner--center-text');
        this.bannerText.isRevealed = false;
        this.spotlightC = document.querySelector('.banner--center-text__C');
        this.light = document.querySelector('.spotlight');
        this.shadow = document.querySelector('.main-content__shadow');
        this.scrollThrottle = throttle(this.calcCaller, 100).bind(this);
        this.events();
        this.windowHeight = window.innerHeight;
    }


    calculateIfScrolledTo(el) {
        if (window.scrollY + this.windowHeight > el.offsetTop) {
            let scrollPercent = (el.getBoundingClientRect().y / this.windowHeight) * 100;
            if (scrollPercent < 40) {
                this.spotlightC.classList.add('banner--center-text__C-spotlight');
                this.light.classList.add('spotlight--visible');
                this.shadow.classList.add('main-content__shadow--visible');
                el.isRevealed = true;
                window.removeEventListener("scroll", this.scrollThrottle);
            }
        }
    }

    calcCaller() {
        if (!this.bannerText.isRevealed) {
            this.calculateIfScrolledTo(this.bannerText);
        }

    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            this.windowHeight = window.innerHeight;
        }, 333));
    }
}

export default Spotlight;