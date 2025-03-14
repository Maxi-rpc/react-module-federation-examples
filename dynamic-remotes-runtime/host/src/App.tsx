import './App.css';
import { MainLayout } from './components/layout';
import Main from './Main';
import useFetchJson from './hooks/useFetchJson';

const App = () => {
  const { data, loading } = useFetchJson(`${__webpack_public_path__}`);

  return loading ? (
    'Loading...'
  ) : (
    <>
      <MainLayout>
        <Main data={data} />
      </MainLayout>
    </>
  );
};

export default App;
