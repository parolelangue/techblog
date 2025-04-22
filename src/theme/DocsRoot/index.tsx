import React, { type ReactNode } from "react";
import DocsRoot from "@theme-original/DocsRoot";
import type DocsRootType from "@theme/DocsRoot";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof DocsRootType>;

export default function DocsRootWrapper(props: Props): ReactNode {
  return <DocsRoot {...props} />;
}
