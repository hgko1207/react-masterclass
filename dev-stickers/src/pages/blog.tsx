import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function Blog() {
  return (
    <Layout title="Blog">
      <div>
        <p>The most recent news from my shop.</p>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Blog" />;
