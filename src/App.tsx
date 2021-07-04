import Side from './components/Side/Side';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import styles from './App.module.scss';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route } from 'react-router-dom';
import MenuBurger from './components/MenuBurger/MenuBurger';
import Skills from './pages/Skills/Skills';

const App: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mobile_menu}>
          <MenuBurger />
        </div>
        <div className={styles.side}>
          <Side />
        </div>
        <div className={styles.main}>
          <AnimatePresence>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/skills" component={Skills} />
              <Route path="/" component={About} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default App;
