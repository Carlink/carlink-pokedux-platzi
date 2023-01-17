import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

function PokemonCard() {
  return (
    <Card
      title="Ditto"
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png"
          alt="Ditto"
        />
      }
      extra={<StarOutlined />}>
      <Meta description="normal" />
    </Card>
  );
}

export default PokemonCard;
