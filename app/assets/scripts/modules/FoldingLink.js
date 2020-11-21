class FoldingLink {
    constructor() {
        this.leftBackground = document.querySelector('.folding-link--left');
        this.rightBackground = document.querySelector('.folding-link--right');
        this.leftLink = document.querySelector('.folding-link--text--left');
        this.rightLink = document.querySelector('.folding-link--text--right');
        this.events();
    }

    events() {
        this.leftBackground.addEventListener('mouseover', function () {
            this.classList.add('folding-link--left--hover');
        })
        this.leftBackground.addEventListener('mouseleave', function () {
            this.classList.remove('folding-link--left--hover');
        })
        this.leftLink.addEventListener('mouseover', () => {
            this.leftBackground.classList.add('folding-link--left--hover');
        })
        this.leftLink.addEventListener('mouseleave', () => {
            this.leftBackground.classList.remove('folding-link--left--hover');
        })
        this.rightBackground.addEventListener('mouseover', function () {
            this.classList.add('folding-link--right--hover');
        })
        this.rightBackground.addEventListener('mouseleave', function () {
            this.classList.remove('folding-link--right--hover');
        })
        this.rightLink.addEventListener('mouseover', () => {
            this.rightBackground.classList.add('folding-link--right--hover');
        })
        this.rightLink.addEventListener('mouseleave', () => {
            this.rightBackground.classList.remove('folding-link--right--hover');
        })
    }
}

export default FoldingLink;