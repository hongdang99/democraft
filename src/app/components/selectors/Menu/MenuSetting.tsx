import React from "react";
import {ToolbarSection} from "../../editor/Toolbar/ToolbarSection";
import {ToolbarItem} from "../../editor/Toolbar/ToolbarItem";

export const MenuSetting = () => {
    return (
        <React.Fragment>
            <ToolbarSection
                title="Dimensions"
                props={['width', 'height']}
                summary={({ width, height }: any) => {
                    return `${width || 0} x ${height || 0}`;
                }}
            >
                <ToolbarItem propKey="width" type="text" label="Width" full={true} onChange={undefined}
                             index={undefined} />
                <ToolbarItem propKey="height" type="text" label="Height" full={true} onChange={undefined}
                             index={undefined} />
            </ToolbarSection>
        </React.Fragment>
    )
}
