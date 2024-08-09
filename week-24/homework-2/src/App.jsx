import './App.css';
import Table from './components/Table';

function App() {
  const headers = ['Company', 'Contact', 'Country', 'Action'];
  const items = [
    {
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany',
      button: 'Edit',
    },
    {
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico',
      button: 'Edit',
    },
    {
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria',
      button: 'Edit',
    },
  ];

  return <Table headers={headers} data={items} />;
}

export default App;
