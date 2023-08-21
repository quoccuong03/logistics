"use client";

export default function Navbar() {
	return (
		<nav className="bg-gray-800">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
								alt="Your Company"
							/>
						</div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								<a
									href="/vi"
									className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
								>
									Home
								</a>
								<a
									href="/vi/new-order"
									className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
								>
									New order
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Mobile menu, show/hide based on menu state. */}
			<div className="sm:hidden" id="mobile-menu">
				<div className="space-y-1 px-2 pb-3 pt-2">
					{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
					<a
						href="/vi"
						className=" text-white block rounded-md px-3 py-2 text-base font-medium"
						aria-current="page"
					>
						Home
					</a>
					<a
						href="/vi/new-order"
						className=" text-white block rounded-md px-3 py-2 text-base font-medium"
						aria-current="page"
					>
						New order
					</a>
				</div>
			</div>
		</nav>
	);
}
