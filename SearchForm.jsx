import React from "react";
import { Button, Form, Input } from "antd";
import "./SearchForm.css";

export default function SearchForm({ searchFunction }) {
    function onFinish(values) {
        console.log("Success:", values);
        searchFunction(values.search_term);
    }

    function onFinishFailed(errorInfo) {
        console.log("Failed:", errorInfo);
    }

    return (
        <div className="form-container">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Search Term"
                    name="search_term"
                    rules={[
                        {
                            required: true,
                            message: "A search term is required!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
