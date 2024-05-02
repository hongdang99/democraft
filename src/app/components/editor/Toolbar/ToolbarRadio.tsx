import React from 'react';
import { Radio } from 'antd';
import styled from 'styled-components';
import classnames from 'classnames';

// Tạo kiểu tùy chỉnh cho thành phần Radio
const StyledRadio = styled(Radio)`
  .ant-radio-inner {
    border-radius: 100%;
    width: 15px;
    height: 15px;
    background: transparent;
    padding: 3px;
    border: 2px solid rgb(142, 142, 142);
    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .ant-radio-checked .ant-radio-inner {
    background: rgb(19, 115, 230);
    border-color: transparent;
  }

  .ant-radio-checked .ant-radio-inner:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: white;
  }
`;

// Tạo kiểu tùy chỉnh cho nhãn
const StyledLabel = styled.div`
  font-size: 15px;
`;

// Tạo thành phần ToolbarRadio sử dụng StyledRadio và StyledLabel
export const ToolbarRadio = ({ value, label }) => (
    <StyledLabel>
        <StyledRadio value={value} />
        {label}
    </StyledLabel>
);