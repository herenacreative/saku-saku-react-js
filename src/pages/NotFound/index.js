import { React, useHistory } from "libraries";
import { Result, Button } from 'antd';

const NotFound = () => {
    const history = useHistory()
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={()=> history.push("auth/login")}>Back Home</Button>}
            />
        </div>
    )
}

export default NotFound