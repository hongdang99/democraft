import React, { useEffect, useState } from 'react';
import { Input, Popover } from 'antd';
import { ChromePicker } from 'react-color';

export const ToolbarTextInput = ({
                              onChange,
                              value,
                              prefix,
                              label,
                              type,
                              ...props
                          }) => {
    const [internalValue, setInternalValue] = useState(value);
    const [active, setActive] = useState(false);

    useEffect(() => {
        let val = value;
        if (type === 'color' || type === 'bg') {
            val = `rgba(${Object.values(value)})`;
        }
        setInternalValue(val);
    }, [value, type]);

    return (
        <div
            style={{ width: '100%', position: 'relative' }}
            onClick={() => setActive(true)}
        >
            {(type === 'color' || type === 'bg') && active ? (
                <Popover
                    content={
                        <ChromePicker
                            color={value}
                            onChange={(color) => {
                                onChange(color.rgb);
                            }}
                        />
                    }
                    trigger="click"
                    visible={active}
                    onVisibleChange={(visible) => setActive(visible)}
                    placement="bottomLeft"
                />
            ) : null}

            <Input
                addonBefore={label}
                style={{ margin: 0, width: '100%' }}
                value={internalValue || ''}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      // @ts-ignore
                        onChange(e.target.value);
                    }
                }}
                onChange={(e) => {
                    setInternalValue(e.target.value);
                }}
                {...props}
            />
        </div>
    );
};

