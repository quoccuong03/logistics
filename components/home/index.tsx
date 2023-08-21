"use client";
import { useState } from "react";
import React from "react";
import moment from "moment";
const TypeSearch = [
	{
		value: "number",
		label: "Number",
	},
	{
		value: "customer_name",
		label: "Customer name",
	},
	{
		value: "shipping_date",
		label: "Shipping date",
	},
];

export default function Index() {
	const [searchActive, setSearchActive] = useState(TypeSearch[0]);
	const [isDropDown, setIsDropDown] = useState(false);
	return (
		<div className="p-[10px]">
			<form className="mt-[20px] relative">
				<div className="flex">
					<label
						htmlFor="search-dropdown"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
					>
						Your Email
					</label>
					<button
						id="dropdown-button"
						data-dropdown-toggle="dropdown"
						className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium  text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
						type="button"
						onClick={() => {
							setIsDropDown(!isDropDown);
						}}
					>
						{searchActive.label}{" "}
						<svg
							className="w-2.5 h-2.5 ml-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>
					{isDropDown ? (
						<div
							id="dropdown"
							className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 block"
							data-popper-placement="bottom"
							style={{
								position: "absolute",
								inset: "0px auto auto 0px",
								margin: "0px",
								transform: "translate3d(4.5px, 72px, 0px)",
								top: "-20px",
							}}
						>
							<ul
								className="py-2 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="dropdown-button"
							>
								{TypeSearch.map((item) => (
									<li>
										<button
											onClick={() => {
												setSearchActive(item);
												setIsDropDown(false);
											}}
											type="button"
											className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											{item.label}
										</button>
									</li>
								))}
							</ul>
						</div>
					) : null}

					<div className="relative w-full">
						<input
							type="search"
							id="search-dropdown"
							className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
							placeholder="Number, Customer name, Shipping date..."
							required
						/>
						<button
							type="submit"
							className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							<svg
								className="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
							<span className="sr-only">Search</span>
						</button>
					</div>
				</div>
			</form>
			<div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 mt-[20px]">
				<figure className="flex flex-col items-center justify-center p-8  bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
					<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
							<b>Order number: 2342342</b>
						</h3>
						<p className="my-4">
							<b>Customer name: ho quoc cuong</b>
						</p>
					</blockquote>
					<figcaption className="flex items-center justify-center space-x-3">
						<div>Shipping date: {moment().format("YYYY/DD/MM")}</div>
						<div className="text-sm text-gray-500 dark:text-gray-400">
							Expected delivery date: {moment().format("YYYY/DD/MM")}
						</div>
					</figcaption>
				</figure>
			</div>
		</div>
	);
}
