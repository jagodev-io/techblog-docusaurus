import clsx from "clsx"
import styles from "./styles.module.css"

const FeatureList = [
  {
    title: "Tech Insights",
    description: <>Dive deep into the latest technology trends and innovations.</>,
  },
  {
    title: "Developer Focused",
    description: <>Practical tips, tutorials, and best practices for developers.</>,
  },
  {
    title: "Community Driven",
    description: <>Join our community of tech enthusiasts and share your knowledge.</>,
  },
]

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

