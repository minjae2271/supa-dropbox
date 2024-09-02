'use client'

import { Input } from "@material-tailwind/react"

type Props = {
    searchInput: string
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBox({ searchInput, setSearchInput }: Props) {
    return (
        <Input 
        label="Search "
        placeholder="Search"
        icon={<i className="fas fa-search"/>}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        />
    )
}
