"use client";

import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "actions/storageAction";
import { queryClient } from "config/ReactQueryClientProvider";
import { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Spinner } from "@material-tailwind/react";

export default function DragDrop() {
    const uploadImageMutation = useMutation({
        mutationFn: uploadFile,
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["images"],
          })
        },
      });

  const onDrop = useCallback(async (acceptedFiles) => {
    console.log(acceptedFiles);
    const formData = new FormData();

    if (acceptedFiles.length > 0) {
        acceptedFiles.forEach((file) => {
            formData.append(file.name, file);
        })

    await uploadImageMutation.mutate(formData);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop, multiple: true});

  return (
    <div
      {...getRootProps()}
      className="flex flex-col justify-center items-center gap-2 w-full py-20  border-2 border-dotted border-indigo-700 cursor-pointer"
    >
      <input {...getInputProps()} />
      {
        uploadImageMutation.isPending ? (
            <Spinner /> 
        ) : (
            isDragActive ? (
                <p>Drop it!</p>
            ) : (
                <p>파일을 이곳에 놓거나 클릭하여 업로드 하세요.</p>
            )
        )
      }
    </div>
  );
}
