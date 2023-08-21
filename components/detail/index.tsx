"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SectionOne() {
	const router = useRouter();

	return (
		<div className="p-[10px]">
			{" "}
			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Product name
							</th>
							<th scope="col" className="px-6 py-3">
								Color
							</th>
							<th scope="col" className="px-6 py-3">
								Category
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Apple MacBook Pro 17"
							</th>
							<td className="px-6 py-4">Silver</td>
							<td className="px-6 py-4">Laptop</td>
							<td className="px-6 py-4">$2999</td>
						</tr>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Microsoft Surface Pro
							</th>
							<td className="px-6 py-4">White</td>
							<td className="px-6 py-4">Laptop PC</td>
							<td className="px-6 py-4">$1999</td>
						</tr>
						<tr className="bg-white dark:bg-gray-800">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Magic Mouse 2
							</th>
							<td className="px-6 py-4">Black</td>
							<td className="px-6 py-4">Accessories</td>
							<td className="px-6 py-4">$99</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-[20px]">
				<button
					onClick={() => {
						router.push("/vi");
					}}
					type="button"
					className="bg-gray-800 text-white  border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
				>
					<div className="flex flex-row align-middle">
						<svg
							className="w-5 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="ml-2">Back to Home</p>
					</div>
				</button>
			</div>
		</div>
	);
}
