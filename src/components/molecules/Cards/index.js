import { React, Link } from "libraries";
import { Typography, List, Avatar } from 'antd';
import '../../../assets/scss/main.scss';

const { Text } = Typography;

const Cards = (props) => {
  const {image, numPhone, nameUser, count} = props;

    return (
        <>
          <List.Item className="shadow__box">
            <List.Item.Meta
              avatar={<Avatar shape="square"
              size={45} src={image}/>}
              title={nameUser}
              description={numPhone}
            />
            <Text>{count}</Text>
          </List.Item>              
        </>
    )
}

export default Cards;
