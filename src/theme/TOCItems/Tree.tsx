import React, { useEffect, type ReactNode } from "react";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/TOCItems/Tree";
import { useLocation } from "@docusaurus/router";

// Recursive component rendering the toc tree
function TOCItemTree({
  toc,
  className,
  linkClassName,
  isChild,
}: Props): ReactNode {
  const location = useLocation();
  if (!toc.length) {
    return null;
  }

  const _onIntoView = (id: string) => {
    const ele = document.getElementById(id);
    ele.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (id) _onIntoView(id);
  }, []);

  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => (
        <li className="toc-item" key={heading.id}>
          <Link
            to={`#${heading.id}`}
            className={linkClassName ?? undefined}
            // Developer provided the HTML, so assume it's safe.
            dangerouslySetInnerHTML={{ __html: heading.value }}
            onClick={(ev) => {
              // _onIntoView(heading.id);
            }}
          />
          <TOCItemTree
            isChild
            toc={heading.children}
            className={className}
            linkClassName={linkClassName}
          />
        </li>
      ))}
    </ul>
  );
}

// Memo only the tree root is enough
export default React.memo(TOCItemTree);
