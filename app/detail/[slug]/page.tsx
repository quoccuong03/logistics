export default function DetailPage({ params }: { params: { slug: string } }) {
    console.log("params", params);

    return (
        <div className="mt-5">
            {params?.slug}
            {/* <PageSection /> */}
        </div>
    );
}
