import React, { type ReactNode } from "react";
import Layout from "@theme-original/DocRoot/Layout";
import type LayoutType from "@theme/DocRoot/Layout";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  return (
    <div className="container">
      <Layout {...props} />
    </div>
  );
}
