import { useQuery } from "@tanstack/react-query";
import ImageCard from "./imageCard";
import { searchFile } from "actions/storageAction";
import { Spinner } from "@material-tailwind/react";

type Props = {
    searchInput: string
}

export default function ImageList({ searchInput}: Props) {

    const searchImageQuery = useQuery({
        queryKey: ['images', searchInput],
        queryFn: () => searchFile(searchInput),
    })
  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
        {searchImageQuery.isLoading && <Spinner />}
        {searchImageQuery.data && searchImageQuery.data.map(image => <ImageCard key={image.id} image={image} />)}
    </section>
  );
}
