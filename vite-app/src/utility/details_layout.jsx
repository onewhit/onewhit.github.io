export default function DetailsLayout({page_title, children}) {
    return (<>
        <h2>{page_title}</h2>
        {children}
    </>)
}