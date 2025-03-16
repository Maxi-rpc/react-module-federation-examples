import './App.css';
import { MainLayout } from './components/layout';
import { Button } from './components/ui';

const App = () => {
  return (
    <>
      <MainLayout>
        <div className="p-3">
          <h1 className="text-base">Remote - component</h1>
        </div>
        <Button />
      </MainLayout>
    </>
  );
};

export default App;
