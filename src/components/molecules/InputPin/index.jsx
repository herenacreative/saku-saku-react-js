import { React } from "libraries";
import { Input, Col, Row } from 'antd';

const InputPin = () => {
    return (
        <>
            <Input.Group size="large" style = {{textAlign: 'center'}}>
                <Row gutter={12}>
                    <Col span={4}>
                    <Input maxLength="1"/>
                    </Col>
                    <Col span={4}>
                    <Input maxLength="1"/>
                    </Col>
                    <Col span={4}>
                    <Input maxLength="1"/>
                    </Col>
                    <Col span={4}>
                    <Input maxLength="1"/>
                    </Col>
                    <Col span={4}>
                    <Input maxLength="1"/>
                    </Col>
                    <Col span={4}>
                    <Input maxLength="1"/>
                    </Col>
                </Row>
            </Input.Group>
        </>
    )
}

export default InputPin