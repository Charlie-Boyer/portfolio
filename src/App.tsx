import Side from './components/Side/Side';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import styles from './App.module.scss';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
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
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default App;
