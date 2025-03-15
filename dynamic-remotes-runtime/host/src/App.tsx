import './App.css';
import { MainLayout } from './components/layout';
import Main from './Main';
import useFetchJson from './hooks/useFetchJson';

const App = () => {
  return (
    <>
      <MainLayout>
        <Main />
      </MainLayout>
    </>
  );
};

export default App;
