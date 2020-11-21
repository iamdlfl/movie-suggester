import '../styles/styles.css';
import FoldingLink from './modules/FoldingLink';

new FoldingLink();

if (module.hot) {
    module.hot.accept();
}