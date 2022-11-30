import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <h2>
            <a style={{color: 'white', fontWeight: 'bold'}} target="_blank" href={ require("/101e672a-8bf5-4fc4-ad0d-413d687267f5.pdf").default } download>Download SRS Usability Test PDF</a>
          </h2>
        </div>
        <div className={styles.buttons}>
          <h2>
            <a style={{color: 'white', fontWeight: 'bold'}} target="_blank" href={ require("/79e373b0-efeb-4e50-9e81-431487795856.pdf").default } download>Download Protocol SRS Usability Test PDF</a>
          </h2>
        </div>
        <div className={styles.buttons}>
          <h2>
            <a style={{color: 'white', fontWeight: 'bold'}} target="_blank" href={ require("/README.pdf").default } download>Download SRS README</a>
          </h2>
        </div>
        <div className={styles.buttons}>
          <h2>
            The source-code of this project will be released as soon as SRS's research paper got published.
          </h2>

        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation and Tutorials">
      <HomepageHeader />
      <main>
        {/*<HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
