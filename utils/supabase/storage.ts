export function getImageUrl(path: string) {
    const fullUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${process.env.NEXT_PUBLIC_STORAGE_BUCKET}/${path}`
    console.log(fullUrl)
    return fullUrl
}