import { React, useState, QueryString } from 'libraries'
import { Input, Form } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

const Searching = (props) => {
    const [search, setSearch] = useState('')

    const enterSearch = () => {
        console.log(props.location, 'lock', props.getData.search, 'l', props)
        if (props.getData.search === "") {
            props.history.push(`/transfer/?q=${search}`)
        } else {
            let qs = QueryString.parse(props.location.search);

            if (qs.search) {
                const url = props.location.search.replace(
                    `q=${qs.search}`,
                    `q=${search}`
                )
                props.history.push(url)
            } else {
                props.history.push(`${props.location.search}&q=${search}`)
            }

        }
    }

    return (
        <div>
            <Form onFinish={enterSearch}>
                <Input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    size="large"
                    placeholder="Search Reciver Here... "
                    prefix={<SearchOutlined />}
                    onKeyDown={e => enterSearch}
                />
            </Form>
        </div>
    )
}

export default Searching