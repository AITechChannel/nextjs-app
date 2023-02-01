import Link from "next/link";

export default function Post({ post }: { post: any }) {
  return (
    <>
      <main>
        <article>
          <h1>{post.data.name}</h1>
          <p>{post.data.date_applied}</p>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://ggg-kpi-service.mor.com.vn/api/goals");
  const posts = await res.json();

  const paths = posts.data.map((post: any) => ({
    params: { id: post.id.toString() },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }: { params: any }) {
  console.log(params);
  const { id } = params;
  const res = await fetch(`https://ggg-kpi-service.mor.com.vn/api/goals/${id}`);
  const post = await res.json();

  return {
    props: { post },
  };
}
