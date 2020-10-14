import { React, connect, useState } from "libraries";
import { Typography, PageHeader, Avatar, Space, Image } from 'antd';
import "../../../assets/scss/main.scss";
import { Notif } from "components/molecules";
import config from '../../../configs/index';

const { Text, Title } = Typography;

const Headers = (props) => {
  const [user, setUser] = useState([])

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={[
          <Title level={3} className="font__primary">Saku Saku</Title>
        ]}
        extra={[
          <div className="space-align-block">
            <Space direction="horizontal" align="center">
              <Image className="profile" width={50} height={50} src={`${config.imgURL}/${props.auth.data.photo}`} />
              <div className="profile">
                <Title level={5} style={{ lineHeight: "15px" }}>{props.auth.data.fullname}</Title>
                <Text>{props.auth.data.phone}</Text>
              </div>
              <Notif />
            </Space>
          </div>
        ]}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Headers)