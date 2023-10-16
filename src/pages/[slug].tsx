import parser from "html-react-parser";

import { getPage, getPages, getRunningQueriesThunk } from "@/services/pages";
import { reduxStore, wrapper } from "@/lib/redux";
import Internal from "@/components/common/Internal";

export const getStaticPaths = async () => {
  const store = reduxStore();
  const { data: pages } = await store.dispatch(getPages.initiate());

  return {
    paths: pages.map((page: any) => ({
      params: {
        slug: page.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(getPage.initiate(context?.params?.slug));
    const [page] = await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {
        page: page.data[0],
      },
      revalidate: 50,
    };
  }
);

const Page = ({ page }: any) => {
  return (
    <Internal>
      <div className="my-24 md:my-36 w-3/4 mx-auto page-content">
        <h1 className="text-4xl md:text-[64px] text-primary md:mb-6 font-sans font-bold">
          {page.title.rendered}
        </h1>
        <div className="">{parser(page.content.rendered, { trim: true })}</div>
      </div>
    </Internal>
  );
};

export default Page;
