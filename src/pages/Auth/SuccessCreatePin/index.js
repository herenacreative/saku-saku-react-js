import { React, useHistory } from "libraries";
import { Row, Col, Avatar, Typography, Button, message } from 'antd';
import { LeftAuth } from "components/organisms";
import '../../../assets/scss/main.scss';
import { patchUser } from 'redux/actions';
import {success} from 'assets';

const { Title, Text } = Typography;

const CreateNewPin = () => {
  const history = useHistory()

  return (
    <>
      <Row className="main__auth">
        <Col flex="1 1" className="left__auth">
          <LeftAuth />
        </Col>
        <Col flex="1 1" className="right__auth">
          <Avatar src={success} size={50}/>
          <div className="m__30">
            <Title level={2} className="font__large">
              Your PIN Was Successfully Created
            </Title>
          </div>
          <div className="m__30">
            <Text type="secondary">
              Your PIN was successfully created and you can
              now access all the features in Zwallet.
              Login to your new account and start exploring!
          </Text>
          </div>
          <Button onClick={() => history.push('/auth/login')} block className="btn__blue">
            Login Now
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default CreateNewPin