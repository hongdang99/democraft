import React from 'react';

import { capitalize, weightDescription } from '../../../../utils/text';
import { ToolbarSection } from '../../editor/Toolbar/ToolbarSection';
import { ToolbarItem } from '../../editor/Toolbar/ToolbarItem';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const TextSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Typography"
        props={['fontSize', 'fontWeight', 'textAlign']}
        summary={({ fontSize, fontWeight, textAlign }: any) => {
          return `${fontSize || ''}, ${weightDescription(
            fontWeight
          )}, ${capitalize(textAlign)}`;
        }}
      >
        <ToolbarItem
          full={true}
          propKey="fontSize"
          type="slider"
          label="Font Size" onChange={undefined} index={undefined}        />
        <ToolbarItem propKey="textAlign" type="radio" label="Align" onChange={undefined} index={undefined}>
          <ToolbarRadio value="left" label="Left" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="right" label="Right" />
        </ToolbarItem>
        <ToolbarItem propKey="fontWeight" type="radio" label="Weight" onChange={undefined} index={undefined}>
          <ToolbarRadio value="400" label="Regular" />
          <ToolbarRadio value="500" label="Medium" />
          <ToolbarRadio value="700" label="Bold" />
        </ToolbarItem>
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
        title="Appearance"
        props={['color', 'shadow']}
        summary={({ color, shadow }: any) => {
          return (
            <div className="fletext-right">
              <p
                style={{
                  color: color && `rgba(${Object.values(color)})`,
                  textShadow: `0px 0px 2px rgba(0, 0, 0, ${shadow / 100})`,
                }}
                className="text-white text-right"
              >
                T
              </p>
            </div>
          );
        }}
      >
        <ToolbarItem full={true} propKey="color" type="color" label="Text" onChange={undefined} index={undefined} />
        <ToolbarItem
          full={true}
          propKey="shadow"
          type="slider"
          label="Shadow" onChange={undefined} index={undefined}        />
      </ToolbarSection>
    </React.Fragment>
  );
};
