import {Button, Checkbox, Form, Input} from 'antd'
import {useState} from 'react'
import useAdd from './hooks/useAdd'


const TestPage = ()=>{
    const [name, setName] = useState('');
    const [add, setAdd] = useState('');
    const {AddUser} = useAdd();

    const onFinish = (e) => {
        console.log('Success:', e);
        AddUser(e.username, e.Address);
    };
    
    const onFinishFailed = (e) => {
    console.log('Failed:', e);
    };

    return(
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Address"
                name="Address"
                rules={[{ required: true, message: 'Please input your address!' }]}
            >
                <Input/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default TestPage