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
      <div className="container my-32">
        {parser(page.content.rendered, { trim: true })}
      </div>
    </Internal>
  );
};

export default Page;
