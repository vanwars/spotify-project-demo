import React from "react";
import { Button, Form, Input, Space } from "antd";
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
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
                    <Space>
                        <Input />
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
}
