import '../styles/styles.css';
import FoldingLink from './modules/FoldingLink';
import Spotlight from './modules/Spotlight';
import RevealOnScroll from './modules/RevealOnScroll';

new FoldingLink();
new Spotlight();
new RevealOnScroll(document.querySelectorAll('.main-content__intro'), 65);

if (module.hot) {
    module.hot.accept();
}