import React, { memo, type ReactNode } from "react";
import {
  DocSidebarItemsExpandedStateProvider,
  useVisibleSidebarItems,
} from "@docusaurus/plugin-content-docs/client";
import DocSidebarItem from "@theme/DocSidebarItem";

import type { Props } from "@theme/DocSidebarItems";

function DocSidebarItems({ items, ...props }: Props): ReactNode {
  const visibleItems = useVisibleSidebarItems(items, props.activePath);

  const topicTitles = {
    "/docs/category/tutorial---basics-1": "Documentation",
    "/docs/category/tutorial---extras-1": "Other Resources",
  };

  return (
    <DocSidebarItemsExpandedStateProvider>
      {visibleItems.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <DocSidebarItem key={index} item={item} index={index} {...props} />
          </React.Fragment>
        );
      })}
    </DocSidebarItemsExpandedStateProvider>
  );
}

// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
