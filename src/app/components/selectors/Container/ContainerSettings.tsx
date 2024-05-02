import React from 'react';

import { ToolbarSection } from '../../editor/Toolbar/ToolbarSection';
import { ToolbarItem } from '../../editor/Toolbar/ToolbarItem';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const ContainerSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Dimensions"
        props={['width', 'height']}
        summary={({ width, height }: any) => {
          return `${width || 0} x ${height || 0}`;
        }}
      >
        <ToolbarItem propKey="width" type="text" label="Width" full={true} onChange={undefined} index={undefined} />
        <ToolbarItem propKey="height" type="text" label="Height" full={true} onChange={undefined} index={undefined} />
      </ToolbarSection>
      <ToolbarSection
        title="Colors"
        props={['background', 'color']}
        summary={({ background, color }: any) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              >
                <p
                  style={{
                    color: color && `rgba(${Object.values(color)})`,
                  }}
                  className="text-white w-full text-center"
                >
                  T
                </p>
              </div>
            </div>
          );
        }}
      >
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background" onChange={undefined} index={undefined}        />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" onChange={undefined} index={undefined} />
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={['margin']}
        summary={({ margin }: any) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" onChange={undefined} />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" onChange={undefined} />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" onChange={undefined} />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" onChange={undefined} />
      </ToolbarSection>
      <ToolbarSection
        title="Padding"
        props={['padding']}
        summary={({ padding }: any) => {
          return `${padding[0] || 0}px ${padding[1] || 0}px ${
            padding[2] || 0
          }px ${padding[3] || 0}px`;
        }}
      >
        <ToolbarItem propKey="padding" index={0} type="slider" label="Top" onChange={undefined} />
        <ToolbarItem propKey="padding" index={1} type="slider" label="Right" onChange={undefined} />
        <ToolbarItem propKey="padding" index={2} type="slider" label="Bottom" onChange={undefined} />
        <ToolbarItem propKey="padding" index={3} type="slider" label="Left" onChange={undefined} />
      </ToolbarSection>
      <ToolbarSection title="Decoration" props={['radius', 'shadow']}>
        <ToolbarItem
          full={true}
          propKey="radius"
          type="slider"
          label="Radius" onChange={undefined} index={undefined}        />
        <ToolbarItem
          full={true}
          propKey="shadow"
          type="slider"
          label="Shadow" onChange={undefined} index={undefined}        />
      </ToolbarSection>
      <ToolbarSection title="Alignment">
        <ToolbarItem
          propKey="flexDirection"
          type="radio"
          label="Flex Direction" onChange={undefined} index={undefined}        >
          <ToolbarRadio value="row" label="Row" />
          <ToolbarRadio value="column" label="Column" />
        </ToolbarItem>
        <ToolbarItem propKey="fillSpace" type="radio" label="Fill space" onChange={undefined} index={undefined}>
          <ToolbarRadio value="yes" label="Yes" />
          <ToolbarRadio value="no" label="No" />
        </ToolbarItem>
        <ToolbarItem propKey="alignItems" type="radio" label="Align Items" onChange={undefined} index={undefined}>
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>
        <ToolbarItem
          propKey="justifyContent"
          type="radio"
          label="Justify Content" onChange={undefined} index={undefined}        >
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>
      </ToolbarSection>
    </React.Fragment>
  );
};
