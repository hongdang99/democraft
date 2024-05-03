import { useNode } from '@craftjs/core';
import React, {useRef, useState} from 'react';
import {Breadcrumb, Flex, Input, Layout, Menu, theme} from 'antd';
import {Text} from "../Text";
import {TextSettings} from "../Text/TextSettings";
import {MenuSetting} from "./MenuSetting";
import {ContainerProps} from "../Container";
import {Resizer} from "../Resizer";
const { Header, Content, Footer } = Layout;
export type MenuCustomProps = {
    width: string;
    height: string;
    number : number;
};
const defaultProps = {
    number : 6,
    width: '100%',
    height: 'auto',
};
export const MenuCustom = (props: Partial<MenuCustomProps>) => {
    const {number} = props;
    console.log(number)
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const {
        connectors: { connect, drag },
    } = useNode();
    const items = new Array(number).fill(null).map((_, index) => ({
        key: String(index + 1),
        label:`nav ${index + 1}`,
    }));
    const [image, setImage] = useState(null);
    const hiddenFileInput = useRef(null);
    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const imgname = file.name;

        // Sử dụng FileReader để đọc tệp
        const reader = new FileReader();
        reader.onloadend = () => {
            // Dữ liệu hình ảnh dưới dạng base64
            const base64Image = reader.result;

            // Tạo đối tượng File từ dữ liệu đã đọc
            const newFile = new File([file], imgname, {
                type: file.type,
                lastModified: Date.now(),
            });

            setImage(newFile); // Cập nhật trạng thái hình ảnh
        };
        reader.readAsDataURL(file);
    };
    return (
        <Layout style={{background : "none"}}>
            <Resizer propKey={{ width: 'width', height: 'height' }}>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    height:'100%'
                }}
                ref={(ref) => connect(drag(ref))}
            >
                <Flex align='center' onClick={handleClick} style={{cursor: "pointer"}}>
                    {image ? (
                        <img style={{ width: "10px", height: "10px" }} src={URL.createObjectURL(image)} alt="upload image" className="img-display-after"/>
                    ) : (
                        <img style={{ width: "10px", height: "10px" }} src='../../logo.svg' alt="upload image" className="img-display-before"/>
                    )}

                    <input
                        id="image-upload-input"
                        type="file"
                        onChange={handleImageChange}
                        ref={hiddenFileInput}
                        style={{display: "none"}}
                    />
                </Flex>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
            </Resizer>
        </Layout>
    );
};
MenuCustom.craft = {
    props : defaultProps,
    related: {
        toolbar: MenuSetting,
    }
}
