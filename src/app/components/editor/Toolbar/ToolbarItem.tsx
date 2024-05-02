import { useNode } from '@craftjs/core';
import { Row, Col, Slider, Radio, Select } from 'antd';
import styled from 'styled-components';
import React from 'react';

import {ToolbarTextInput} from "./ToolbarTextInput";
import {ToolbarDropdown} from './ToolbarDropdown';

// Tạo kiểu tùy chỉnh cho Slider
const StyledSlider = styled(Slider)`
  .ant-slider-rail {
    height: 2px;
    background-color: #bfbfbf;
  }
  .ant-slider-track {
    height: 2px;
  }
`;

export const ToolbarItem = ({
                                full = false,
                                propKey,
                                type,
                                onChange,
                                index,
                                ...props
                            }) => {
    const {
        actions: { setProp },
        propValue,
    } = useNode((node) => ({
        propValue: node.data.props[propKey],
    }));

    const value = Array.isArray(propValue) ? propValue[index] : propValue;

    const handleSetProp = (newValue) => {
        setProp((props) => {
            if (Array.isArray(propValue)) {
                props[propKey][index] = onChange ? onChange(newValue) : newValue;
            } else {
                props[propKey] = onChange ? onChange(newValue) : newValue;
            }
        }, 500);
    };


  return (
        <Col span={full ? 24 : 12}>
            <div className="mb-2">
                {['text', 'color', 'bg', 'number'].includes(type) ? (
                  // @ts-ignore
                    <ToolbarTextInput
                        {...props}
                        type={type}
                        value={value}
                        onChange={handleSetProp}
                    />
                ) : type === 'slider' ? (
                    <>
                        {props.label && (
                            <h4 className="text-sm text-light-gray-2">{props.label}</h4>
                        )}
                        <StyledSlider
                            value={parseInt(value) || 0}
                            onChange={(newValue) => handleSetProp(newValue)}
                        />
                    </>
                ) : type === 'radio' ? (
                    <>
                        {props.label && (
                            <h4 className="text-sm text-light-gray-2">{props.label}</h4>
                        )}
                        <Radio.Group
                            value={value || 0}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                handleSetProp(newValue);
                            }}
                        >
                            {props.children}
                        </Radio.Group>
                    </>
                ) : type === 'select' ? (
                    <ToolbarDropdown
                        value={value || ''}
                        onChange={(newValue) =>
                            handleSetProp(newValue)
                        }
                        {...props}
                    />
                ) : null}
            </div>
        </Col>
    );
};
