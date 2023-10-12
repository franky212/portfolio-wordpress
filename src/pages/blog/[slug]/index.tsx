import parser from "html-react-parser";

import { getPost, getPosts, getRunningQueriesThunk } from "@/services/posts";
import { wrapper, reduxStore } from "@/lib/redux";
import Internal from "@/components/common/Internal";
import ScrollDown from "@/components/common/scrollDown";

export const getStaticPaths = async () => {
  const store = reduxStore();
  const { data: posts } = await store.dispatch(getPosts.initiate());

  return {
    paths: posts.map((post: any) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(getPost.initiate(context?.params?.slug));
    const [post] = await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {
        post: post.data[0],
      },
      revalidate: 50,
    };
  }
);

const Post = ({ post }: any) => {
  const dateUploaded = new Date(post.date).toDateString();
  const modified = new Date(post.modified).toDateString();
  return (
    <Internal>
      <div className="bg-gray-800 flex justify-center items-center h-72 md:h-[32rem] overflow-hidden text-white relative">
        <video
          id="background-video"
          autoPlay
          loop
          muted
          poster="https://wordpress-1110286-3894329.cloudwaysapps.com/wp-content/uploads/2023/09/Screen-Shot-2023-09-26-at-11.49.22-PM.png"
          className="w-screen h-screen object-cover top-0 left-0 bottom-0 right-0"
        >
          <source
            src="https://wordpress-1110286-3894329.cloudwaysapps.com/wp-content/uploads/2023/09/video-2160p.mp4"
            type="video/mp4"
          ></source>
        </video>
        <h1 className="absolute text-center text-4xl font-bold text-foreground inset-y-auto inset-x-0">
          {post.title.rendered}
        </h1>
        <ScrollDown />
      </div>
      <div className="flex flex-col md:flex-row items-center my-10 text-center md:w-3/4 mx-auto">
        <img
          src="https://wordpress-1110286-3894329.cloudwaysapps.com/wp-content/uploads/2023/09/frankdelaguila-headshot.jpeg"
          alt="Photo of Frank Delaguila - Glasses, Moustache, Hat, smiling"
          className="block w-1/3 md:w-1/12 rounded-full border-2 border-solid border-primary"
        ></img>
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="ml-4 mb-4 md:mb-0 md:text-left">
            <h4 className="font-bold font-sans text-2xl">Frank Delaguila</h4>
            <p className="font-light">Software Engineer / UX UI Designer</p>
          </div>
          <div className="flex-col md:text-right">
            <h4>Post Uploaded on: {dateUploaded}</h4>
            <p>Modified: {modified}</p>
          </div>
        </div>
      </div>
      <div className="post-content mb-24 px-8 md:px-0 md:w-3/4 mx-auto">
        {parser(post.content.rendered, { trim: true })}
      </div>
    </Internal>
  );
};

export default Post;
