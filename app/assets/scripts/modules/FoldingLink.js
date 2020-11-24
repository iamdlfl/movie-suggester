class FoldingLink {
    constructor() {
        this.leftBG = document.querySelector('.folding-link__background--left');
        this.rightBG = document.querySelector('.folding-link__background--right');
        this.leftIT = document.querySelector('.folding-link__info-text--left');
        this.rightIT = document.querySelector('.folding-link__info-text--right');
        this.leftMT = document.querySelector('.folding-link__main-text--left');
        this.rightMT = document.querySelector('.folding-link__main-text--right');
        this.events();
    }

    events() {
        this.leftAdd(this.leftBG, this.leftBG, this.leftIT);
        this.leftAdd(this.leftIT, this.leftBG, this.leftIT);
        this.leftAdd(this.leftMT, this.leftBG, this.leftIT);
        this.rightAdd(this.rightBG, this.rightBG, this.rightIT);
        this.rightAdd(this.rightIT, this.rightBG, this.rightIT);
        this.rightAdd(this.rightMT, this.rightBG, this.rightIT);
    }

    leftAdd(addee, addclass1, addclass2) {
        addee.addEventListener('click', () => {
            addclass1.classList.add('folding-link__background--left--extended')
            addclass2.classList.add('folding-link__info-text--left--visible')
        })
    }

    rightAdd(addee, addclass1, addclass2) {
        addee.addEventListener('click', () => {
            addclass1.classList.add('folding-link__background--right--extended')
            addclass2.classList.add('folding-link__info-text--right--visible')
        })
    }
}

export default FoldingLink;