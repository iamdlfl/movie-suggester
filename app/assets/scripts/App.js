import '../styles/styles.css';
import FoldingLink from './modules/FoldingLink';
import Spotlight from './modules/Spotlight';

new FoldingLink();
new Spotlight();

if (module.hot) {
    module.hot.accept();
}