import Head from 'next/head';

export interface IHeadSEOProps {
  title: string;
  name: string;
  meta_keyword: string;
  meta_description: string;
  content: string;
  meta_social_image?: string;
}

export default function HeadSEO(props: IHeadSEOProps) {
  const { title, name, meta_keyword, meta_description, content, meta_social_image } = props;
  // eslint-disable-next-line no-console
  console.log('content', content);
  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#e60000" />
      <meta name="description" content={meta_description} />
      <meta name="keywords" content={meta_keyword} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={name} />
      <meta name="copyright" content={name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={meta_description} />
      <meta property="og:url" content="https://www.sandbox.oneibc.com" />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={meta_social_image} />
      <meta property="og:image:secure_url" content={meta_social_image} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="960" />
      <meta name="twitter:card" content={meta_social_image} />
      <meta name="twitter:description" content={meta_description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={meta_social_image} />
    </Head>
  );
}
