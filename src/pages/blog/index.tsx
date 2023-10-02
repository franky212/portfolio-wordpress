import Link from "next/link";

import { getPosts, getRunningQueriesThunk } from "@/services/posts";
import { wrapper } from "@/lib/redux";
import Internal from "@/components/common/Internal";
import BlogImage from "@/components/common/BlogImage/BlogImage";

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(getPosts.initiate());
    const [posts] = await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {
        posts: posts.data,
      },
    };
  }
);

export default function Posts({ posts }: any): JSX.Element {
  return (
    <Internal>
      <div className="container mt-32 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post: any) => {
            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="justify-between"
              >
                {post.featured_media ? (
                  <BlogImage imageID={post.featured_media} />
                ) : (
                  <div className="w-full h-64 bg-accent rounded-lg"></div>
                )}
                <h1 className="font-sans text-2xl font-bold my-4">
                  {post.title.rendered}
                </h1>
              </Link>
            );
          })}
        </div>
      </div>
    </Internal>
  );
}
