import { React } from "libraries";
import { List, Typography } from 'antd';
import '../../../assets/scss/main.scss';
import style from './cardsText.module.scss';

const { Title, Text } = Typography;

const CardsText = (props) => {
  const {title, desc, count} = props;

    return (
        <>
          <List.Item>
            <List.Item.Meta
              title={title}
              description={<Title level={5}>{desc}</Title>}
            />
            <Text>{count}</Text>
          </List.Item>   
          {/* <div className={style.cards__text}>
            <p>{title}</p>
            <Title level={5}>{desc}</Title>
          </div>             */}
        </>
    )
}

export default CardsText;
