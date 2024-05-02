import { useEditor } from '@craftjs/core';
import cx from 'classnames';
import React, {useState} from 'react';
import styled from 'styled-components';
import lz from 'lzutf8';
import Checkmark from '../../../../public/icons/check.svg';
import Customize from '../../../../public/icons/customize.svg';
import RedoSvg from '../../../../public/icons/toolbox/redo.svg';
import UndoSvg from '../../../../public/icons/toolbox/undo.svg';
import {Button, Flex, Input, message, Modal, Tooltip} from "antd";
import copy from "copy-to-clipboard";

const HeaderDiv = styled.div`
  width: 100%;
  height: 45px;
  z-index: 99999;
  position: relative;
  padding: 0px 10px;
  background: #d4d4d4;
  display: flex;
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
`;

const Item = styled.a<{ disabled?: boolean }>`
  margin-right: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: #707070;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity:0.5;
    cursor: not-allowed;
  `}
`;

export const Header = () => {
  const { enabled,query, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stateToLoad, setStateToLoad] = useState(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        const json = lz.decompress(lz.decodeBase64(stateToLoad));
        actions.deserialize(json);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { TextArea } = Input;
  return (
    <HeaderDiv className="header text-white transition w-full">
      <div className="items-center flex w-full px-4 justify-end">
        {enabled && (
          <Flex className="flex-1 flex" align="center">
            <Tooltip title="Undo" placement="bottom">
              <Item disabled={!canUndo} onClick={() => actions.history.undo()}>
                <UndoSvg />
              </Item>
            </Tooltip>
            <Tooltip title="Redo" placement="bottom">
              <Item disabled={!canRedo} onClick={() => actions.history.redo()}>
                <RedoSvg />
              </Item>
            </Tooltip>
              <Tooltip title="Copy State" placement="bottom">
                  <Button  onClick={() => {
                      const json = query.serialize();
                      copy(lz.encodeBase64(lz.compress(json)));
                      message.success('Copied!');
                  }}>COPY CURRENT STATE</Button>
              </Tooltip>
              <Tooltip title="Copy State" placement="bottom">
                  <Button  onClick={showModal}>LOAD STATE</Button>
              </Tooltip>
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <TextArea onChange={(e) => setStateToLoad(e.target.value)} rows={4} />
              </Modal>
          </Flex>
        )}
        <div className="flex">
          <Btn
            className={cx([
              'transition cursor-pointer',
              {
                'bg-green-400': enabled,
                'bg-primary': !enabled,
              },
            ])}
            onClick={() => {
              actions.setOptions((options) => (options.enabled = !enabled));
            }}
          >
            {enabled ? <Checkmark /> : <Customize />}
            {enabled ? 'Finish Editing' : 'Edit'}
          </Btn>
        </div>
      </div>
    </HeaderDiv>
  );
};
