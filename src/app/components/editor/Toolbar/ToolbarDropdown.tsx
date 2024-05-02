import React from 'react';
import {Form, Input, Select} from "antd";

export const ToolbarDropdown = ({ title, value, onChange, children }: any) => {
    return (
        <Form>
            <Input>{title}</Input>
            <Select value={value} onChange={(e) => onChange(e.target.value)}>
                {children}
            </Select>
        </Form>
    );
};
