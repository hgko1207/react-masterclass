import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/Layout';

export default function ProductDetail({ data }: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulStickerPack?.name!}>
      <GatsbyImage image={image!} alt={data.contentfulStickerPack?.name!} />
      <h3>${data.contentfulStickerPack?.price!}</h3>
    </Layout>
  );
}

export const data = graphql`
  query Product($id: String!) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 450, placeholder: BLURRED)
      }
    }
  }
`;
