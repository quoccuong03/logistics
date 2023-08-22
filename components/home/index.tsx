"use client";
import { useEffect, useState } from "react";
import React from "react";
import moment from "moment";
import ChatBoard from "@/components/chatBoard";
import { getListOrder } from "@lib/get-order";
import { useRouter } from "next/navigation";
import queryString from "query-string";
const TypeSearch = [
	{
		value: "order_number",
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

export default function Index(props: any) {
	const { searchParams } = props;
	const router = useRouter();
	let dataActive = TypeSearch[0];
	if (searchParams.typeSearch) {
		dataActive = TypeSearch.find((el) => el.value === searchParams.typeSearch) || dataActive;
	}
	const [searchActive, setSearchActive] = useState(dataActive);
	const [searchText, setSerchText] = useState(searchParams.search_text);
	const [isLoading, setIsLoading] = useState(false);
	const [dataOrder, setDataOrder] = useState([]);

	const _initData = () => {
		const filter = {
			limit: 0,
			filter: {},
		};
		if (searchParams.search_text) {
			filter["filter"] = {
				search_text: searchParams.search_text,
			};
		} else if (searchParams.shipping_date) {
			filter["filter"] = {
				shipping_date: searchParams.shipping_date,
			};
		}
		setIsLoading(true);
		getListOrder(filter).then((result) => {
			const { data } = result;
			setIsLoading(false);
			if (result && data) {
				setDataOrder(data);
			}
		});
	};

	useEffect(() => {
		_initData();
	}, [searchParams]);

	const _handleRederStatus = (status?: string) => {
		if (status === "pending") {
			return <span className="text-[#92921f]">{status}</span>;
		} else if (status === "done") {
			return <span className="text-[green]">{status}</span>;
		} else if (status === "reject") {
			return <span className="text-[red]">{status}</span>;
		}
		return <span className="text-[#92921f]">{status}</span>;
	};

	return (
		<div className="p-[10px]">
			<ChatBoard />
			<form className="mt-[20px] relative">
				<div className="flex">
					<label
						htmlFor="search-dropdown"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
					>
						Your Email
					</label>

					<div className="relative w-full">
						<input
							type="search"
							id="search-dropdown"
							className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
							placeholder="Number, Customer name, Shipping date..."
							required
							defaultValue={searchParams.search_text}
							onChange={(e) => {
								setSerchText(e.target.value);
							}}
						/>
						<button
							type="submit"
							className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							onClick={(e) => {
								e.preventDefault();
								const newFilter: any = {};
								if (searchText && searchText !== "") {
									newFilter.search_text = searchText;
								}
								newFilter.typeSearch = searchActive.value;
								router.push(`/vi?${queryString.stringify(newFilter)}`);
							}}
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
			{isLoading ? (
				"Loading ..."
			) : (
				<>
					{" "}
					{dataOrder.length ? (
						<div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 mt-[20px]">
							{dataOrder.map((item: any) => (
								<figure
									onClick={() => {
										router.push(`/vi/${item.id}`);
									}}
									className="flex flex-col items-center justify-center p-8  bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-100"
								>
									<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
											<b>Order number: {item.order_number}</b>
										</h3>
										<p className="my-4">
											<b>Customer name: {item.customer_name}</b>
										</p>
									</blockquote>
									<figcaption className="flex items-center justify-center space-x-3">
										<div>
											Shipping date:{" "}
											{moment(item.shipping_date).format("YYYY/DD/MM")}
										</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">
											Expected delivery date:{" "}
											{moment(item.expected_delivery_date).format(
												"YYYY/DD/MM",
											)}
										</div>
										<div>
											Live shipping : {_handleRederStatus(item.live_shipping)}
										</div>
									</figcaption>
								</figure>
							))}
						</div>
					) : (
						"NOT FOUND"
					)}
				</>
			)}
		</div>
	);
}
