import { Link, React } from "libraries";
import { Row, Col, Typography, Input, Button } from 'antd';
import { LeftAuth } from "components/organisms";
import { InputPin } from "components/molecules";
import '../../assets/scss/main.scss'

const { Title, Text } = Typography;

const CreateNewPin = () => {
    return (
        <>
            <Row className="main__auth">
                <Col flex="1 1" className="left__auth">
                    <LeftAuth/>
                </Col>
                <Col flex="1 1" className="right__auth">
                    <Title level={2} className="font__large">
                        Secure Your Account, Your Wallet, and Your Data 
                        With 6 Digits PIN That You Created Yourself.
                    </Title>
                    <Text type="secondary">
                        Create 6 digits pin to secure all your money and your data in Saku Saku app. 
                        Keep it secret and don’t tell anyone about your Saku Saku account password and the PIN.
                    </Text>
                    <div className="form__input">
                        <InputPin/>
                    </div>
                    <Button type="primary" block className="btn__primary">
                        Confirm
                    </Button> 
                </Col>
            </Row>
        </>
    )
}

export default CreateNewPin