import { IconButton } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { deleteFile } from "actions/storageAction";
import { queryClient } from "config/ReactQueryClientProvider";
import { getImageUrl } from "utils/supabase/storage";
import { Spinner } from "@material-tailwind/react";

export default function ImageCard({ image }) {
    const deleteFIleMutation = useMutation({
        mutationFn: deleteFile,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['images']
            })
        }
    })
    console.log(image)
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 boder border-gray-100 rounded-2xl shadow-md">
      {/* image */}
      <div>
        <img
          className="w-full aspect-square rounded-2xl"
          src={getImageUrl(image.name)}
          alt=""
        />
      </div>
      {/* filename */}
      <div>{image.name}</div>
      <div className="absolute top-4 right-4 rounded-full">
        <IconButton onClick={() => {deleteFIleMutation.mutate(image.name)}} color="red">
            {deleteFIleMutation.isPending ? <Spinner /> : 
                <i className="fas fa-trash"></i>
            }
        </IconButton>
      </div>
    </div>
  );
}
