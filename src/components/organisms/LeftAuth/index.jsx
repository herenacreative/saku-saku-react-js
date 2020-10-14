import { React } from "libraries";
import { Typography } from 'antd';
import '../../../assets/scss/main.scss'
import { imageAuth } from 'assets';

const { Title, Text } = Typography;

const Login = () => {
  return (
    <>
      <Title level={2} className="font__light">Saku Saku</Title>
      <div className="img__auth_center">
        <img src={imageAuth} className="img__auth" />
      </div>
      <Title level={2} className="font__light">
        App that Covering Banking Needs.
      </Title>
      <Text className="font__light">
        Saku Saku is an application that focussing in banking needs for all users
        in the world. Always updated and always following world trends.
        5000+ users registered in Saku Saku everyday with worldwide
        users coverage.
      </Text>
    </>
  )
}

export default Login