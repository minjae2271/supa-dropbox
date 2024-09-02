'use client'

import DragDrop from "components/dragDrop";
import ImageList from "components/imageList";
import Logo from "components/logo";
import SearchBox from "components/searchBox";
import { useState } from "react";

export default function Ui() {

  const [searchInput, setSearchInput] = useState('')

  return (
    <main className="flex flex-col gap-4 w-full p-2">
      {/* logo */}
      <Logo />
      {/* searchComponent */}
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput}/>
      {/* dragdrop */}
      <DragDrop />
      {/* image list */}
      <ImageList searchInput={searchInput}/>
    </main>
  )
}
