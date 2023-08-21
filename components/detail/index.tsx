"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
export default function SectionOne() {
	const router = useRouter();
	const [starView, setStarView] = useState(0);

	return (
		<div className="p-[10px]">
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
			<section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
				<div className="max-w-2xl mx-auto px-4">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
							Discussion (20)
						</h2>
					</div>
					<form className="mb-6">
						<div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
							<input
								id="comment"
								className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
								placeholder="Your Name"
								required
								defaultValue={""}
							/>
						</div>
						<div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
							<label htmlFor="comment" className="sr-only">
								Your comment
							</label>
							<textarea
								id="comment"
								rows={6}
								className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
								placeholder="Write a comment..."
								required
								defaultValue={""}
							/>
						</div>
						<div className="flex items-center space-x-1 mt-[20px] mb-[20px]">
							{Array.from(Array(5)).map((item, index) => (
								<svg
									onClick={() => {
										setStarView(index);
									}}
									className={`w-4 h-4 ${
										index > starView
											? "text-gray-300 dark:text-gray-500 hover:text-yellow-300"
											: "text-yellow-300 hover:text-gray-300"
									} `}
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 22 20"
								>
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
							))}
						</div>
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							Post comment
						</button>
					</form>
					<article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
						<footer className="flex justify-between items-center mb-2">
							<div className="flex items-center">
								<p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
									<img
										className="mr-2 w-6 h-6 rounded-full"
										src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
										alt="Michael Gough"
									/>
									Michael Gough
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									<time dateTime="2022-02-08" title="February 8th, 2022">
										Feb. 8, 2022
									</time>
								</p>
							</div>
							<button
								id="dropdownComment1Button"
								data-dropdown-toggle="dropdownComment1"
								className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
								type="button"
							>
								<svg
									className="w-5 h-5"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
								</svg>
								<span className="sr-only">Comment settings</span>
							</button>
							{/* Dropdown menu */}
							<div
								id="dropdownComment1"
								className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
							>
								<ul
									className="py-1 text-sm text-gray-700 dark:text-gray-200"
									aria-labelledby="dropdownMenuIconHorizontalButton"
								>
									<li>
										<a
											href="#"
											className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											Edit
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											Remove
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											Report
										</a>
									</li>
								</ul>
							</div>
						</footer>
						<p className="text-gray-500 dark:text-gray-400">
							Very straight-to-point article. Really worth time reading. Thank you!
							But tools are just the instruments for the UX designers. The knowledge
							of the design tools are as important as the creation of the design
							strategy.
						</p>
					</article>
				</div>
			</section>
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
