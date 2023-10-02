import { Skeleton } from "@/components/ui/skeleton";
import { useGetPostImageQuery } from "@/services/posts";

interface BlogImageTypes {
  imageID: number;
}

const BlogImage = ({ imageID }: BlogImageTypes): JSX.Element => {
  const { data: image, isLoading } = useGetPostImageQuery(imageID);
  // console.log(image.source_url);
  return isLoading ? (
    <Skeleton className="bg-accent h-64 w-full rounded-4" />
  ) : (
    <div
      style={{ backgroundImage: `url(${image.source_url})` }}
      className="block bg-cover bg-no-repeat bg-center transition-all hover:scale-105 w-full h-64 rounded-lg"
    ></div>
  );
};

export default BlogImage;
