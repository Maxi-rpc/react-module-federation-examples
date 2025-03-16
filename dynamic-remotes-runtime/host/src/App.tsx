import './App.css';
import { MainLayout } from './components/layout';
import Demo from './Demo';
const App = () => {
  return (
    <>
      <MainLayout>
        <div className="p-3">
          <h1 className="text-base">Remote - component host</h1>
          <Demo />
        </div>
      </MainLayout>
    </>
  );
};

export default App;
