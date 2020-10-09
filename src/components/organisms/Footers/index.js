import { React, useState } from "libraries";
import { Layout, Typography } from 'antd';
import "../../../assets/scss/main.scss"
const { Footer } = Layout;
const { Text } = Typography;

const Footers = (props) => {
    const [numPhone, setNUmPhone] = useState('+62 8381 9000 500');
    const [email, setEmail] = useState('sintaherena@gmail.com');
    return(
        <>
            <Footer className="container__set">
                <div className="flex__sb">
                    <Text className="font__light">2020 Zwallet. All right reserved.</Text>
                    <div className="flex__start">
                        <div className="font__light">{numPhone}</div>
                        <div className="font__light">{email}</div>
                    </div>
                </div>
            </Footer>
        
        </>
    );
}

export default Footers;