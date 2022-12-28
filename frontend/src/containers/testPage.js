import React from 'react';
import { Button, Form, Input, Select, DatePicker } from 'antd';
import useBackendTest from './hooks/useBackend_test'

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const TestPage = ()=>{

    const [form] = Form.useForm();
    const [productForm] = Form.useForm();
    const [itemForm] = Form.useForm();
    const [billForm] = Form.useForm();
    const { AddCategory, GetProductsByCategory,
        AddProductToCategory, UpdateProduct, GetProductById,
        AddItemToBill, AddBillToUser, GetUserBill, FindBill, UpdateBillAddress} = useBackendTest();

    const onReset = () => {
        console.log(form.getFieldValue());
    };

    const AddProduct = () => {
        console.log(productForm.getFieldValue());
    }
    
  return (
    <>
    <Form {...layout} form={form} name="control-hooks">
        Category
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button htmlType="button" onClick={onReset}>
                Add
            </Button>
            <Button htmlType="button" onClick={onReset}>
                Update
            </Button>
        </Form.Item>
    </Form>

    <Form {...layout} form={productForm} name="control-hooks">
        Product
        <Form.Item name="category" label="Category" rules={[{ required: true }]}>
            <Select options={[
            {
            value: 'jack',
            label: 'Jack',
            },
            {
            value: 'lucy',
            label: 'Lucy',
            }]}/>
        </Form.Item>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="url" label="url" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="price" label="price" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="note" label="note">
            <Input />
        </Form.Item>
        <Form.Item name="type" label="product_type" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="o_type" label="option_type" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="option numbers" label="options" rules={[{ required: true }]}>
            <Input/>
        </Form.Item>
        <Form.Item name="option1" label="option1" rules={[{ required: true }]}>
            <Input/>
        </Form.Item>
        <Form.Item name="option2" label="option2" rules={[{ required: true }]}>
            <Input/>
        </Form.Item>
        {/* <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item> */}
        <Form.Item {...tailLayout}>
            <Button htmlType="button" onClick={AddProduct}>
                Add
            </Button>
            <Button htmlType="button" onClick={onReset}>
                Update
            </Button>
        </Form.Item>
    </Form>

    <Form {...layout} form={billForm} name="control-hooks">
        Bill
        <Form.Item name="userLineId" label="lineId">
            <Input />
        </Form.Item>
        <Form.Item name="package" label="package" rules={[{ required: true }]}>
            <Select options={[
                {
                value: '泡泡紙',
                label: '泡泡紙',
                },
                {
                value: '破壞袋',
                label: '破壞袋',
            }]}/>
        </Form.Item>
        <Form.Item name="total" label="total" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="payment" label="payment" rules={[{ required: true }]}>
            <Select options={[
                {
                value: '現金',
                label: '現金',
                },
                {
                value: '刷卡',
                label: '刷卡',
            }]}/>
        </Form.Item>
        <Form.Item name="address" label="address">
            <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button htmlType="button" onClick={AddProduct}>
                Add
            </Button>
            <Button htmlType="button" onClick={onReset}>
                Update
            </Button>
        </Form.Item>
    </Form>

    </>
  );
}

export default TestPage