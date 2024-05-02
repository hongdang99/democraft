import { useNode } from '@craftjs/core';
import React, {useRef, useState} from 'react';
import {Breadcrumb, Flex, Layout, Menu, theme} from 'antd';
import {Text} from "../Text";

export const IconCustom = () => {
    const {
        connectors: { connect, drag },
    } = useNode();
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

                <Flex align='center' onClick={handleClick} style={{cursor: "pointer"}}  ref={(ref) => connect(drag(ref))}>
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after"/>
                    ) : (
                        <img src='../../logo.svg' alt="upload image" className="img-display-before"/>
                    )}

                    <input
                        id="image-upload-input"
                        type="file"
                        onChange={handleImageChange}
                        ref={hiddenFileInput}
                        style={{display: "none"}}
                    />
                </Flex>
    );
};
