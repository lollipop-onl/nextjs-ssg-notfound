/** @type {import('next').GetStaticProps} */
export function getStaticProps() {
  return { notFound: true };
}

export default function Page() {
  return <p>this is a dev page</p>;
}
