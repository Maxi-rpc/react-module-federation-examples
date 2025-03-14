import './App.css';
import { MainLayout } from './components/layout';
import { Table } from './components/ui';

const App = () => {
  return (
    <>
      <MainLayout>
        <h1>Remote</h1>
        <Table></Table>
      </MainLayout>
    </>
  );
};

export default App;
