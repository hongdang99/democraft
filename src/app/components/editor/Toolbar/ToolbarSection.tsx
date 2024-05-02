import React from 'react';
import { Collapse, Divider, Row, Col } from 'antd';
import { useNode } from '@craftjs/core';

const customPanelStyle = {
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
};

const customSummaryStyle = {
    padding: 0,
    margin: '0px',
};

export const ToolbarSection = ({ title, props, summary, children }: any) => {
    const { nodeProps } = useNode((node) => ({
        nodeProps:
            props &&
            props.reduce((res: any, key: any) => {
                res[key] = node.data.props[key] || null;
                return res;
            }, {}),
    }));

    return (
        <Collapse
            bordered={false}
            expandIconPosition="right"
            defaultActiveKey={['1']}
            style={customPanelStyle}
        >
            <Collapse.Panel
                header={
                    <Row align="middle" style={customSummaryStyle}>
                        <Col span={4}>
                            <h5 className="text-sm text-left font-medium text-dark-gray">
                                {title}
                            </h5>
                        </Col>
                        {summary && props ? (
                            <Col span={8} offset={12}>
                                <h5 className="text-sm text-right text-dark-blue">
                                    {summary(
                                        props.reduce((acc: any, key: any) => {
                                            acc[key] = nodeProps[key];
                                            return acc;
                                        }, {})
                                    )}
                                </h5>
                            </Col>
                        ) : null}
                    </Row>
                }
                key="1"
            >
                <Divider />
                <Row gutter={[16, 16]}>{children}</Row>
            </Collapse.Panel>
        </Collapse>
    );
};

