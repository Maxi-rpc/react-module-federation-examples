import './App.css';
import { MainLayout } from './components/layout';
// se importa de forma remota
import Button from 'remote/Button';

const App = () => {
  return (
    <>
      <MainLayout>
        <div className="p-3">
          <h1 className="text-base">Remote - component host</h1>
        </div>
        <Button />
      </MainLayout>
    </>
  );
};

export default App;
