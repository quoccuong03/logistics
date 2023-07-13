import "./index.scss";
export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="bg-[#D4D4D7]">
			<div className={`max-w-[1613.96px] mx-auto  relative  `} id="layout">
				<main className="min-h-screen">{children}</main>
			</div>
		</section>
	);
}
