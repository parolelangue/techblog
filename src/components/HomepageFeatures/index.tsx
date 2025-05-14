import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { cn } from "@site/src/utils/classnames";
import Translate from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: string;
  img: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Solution",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: "Smarter Solutions, Power by Artificial Intelligence",
    img: require("@site/static/img/ic-solution.png").default,
  },
  {
    title: "Technology",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description:
      "Our core technology is specialized in Artificial Intelligence",
    img: require("@site/static/img/ic-technology.png").default,
  },
  {
    title: "Service",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: "Human Computing Services for Digital Transformation",
    img: require("@site/static/img/ic-service.png").default,
  },
];

function Feature({ title, Svg, description, img }: FeatureItem) {
  return (
    <div className={clsx("features__item col col--4")}>
      <div className="icon text--center">
        <img src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className="title">
          <Translate>{title}</Translate>
        </Heading>
        <p className="desc">
          <Translate>{description}</Translate>
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={cn("features", styles.features)}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
