import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="app">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
