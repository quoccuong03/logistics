"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { findOrderById } from "@lib/get-order";
import TextField from "@mui/material/TextField";
import { addCustomerFeeback, getListCustomerFeeback } from "@lib/get-customer-feeback";
import moment from "moment";

export default function SectionOne(props: any) {
	const { params } = props;
	const [dataOrder, setDataOrder] = useState<Array<any>>([]);
	const [dataInput, setDatInput] = useState<any>({});
	const [dataErorr, setDatErorr] = useState<any>({});
	const router = useRouter();
	const [starView, setStarView] = useState(0);
	const [listComment, setListComment] = useState([]);

	const _handleFecthListComment = (slug: string) => {
		getListCustomerFeeback({ limt: 100, filter: { orderId: slug } }).then((result) => {
			if (result && result.data) {
				setListComment(result.data);
			}
		});
	};

	const _handleValite = () => {
		let check = true;
		if (!dataInput["fullName"] || dataInput["fullName"] === "") {
			check = false;
			dataErorr["fullName"] = "error";
		}
		if (!dataInput["content"] || dataInput["content"] === "") {
			check = false;
			dataErorr["content"] = "error";
		}

		setDatErorr({ ...dataErorr });
		return check;
	};

	useEffect(() => {
		if (params.slug) {
			findOrderById({ id: params.slug }).then((result) => {
				if (result) {
					setDataOrder([{ ...result }]);
				}
			});
			_handleFecthListComment(params.slug);
		}
	}, [params]);

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
			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Order number
							</th>
							<th scope="col" className="px-6 py-3">
								Customer name
							</th>
							<th scope="col" className="px-6 py-3 min-w-[300px]">
								Recipient address
							</th>
							<th scope="col" className="px-6 py-3 min-w-[200px]">
								shipping address
							</th>
							<th scope="col" className="px-6 py-3 ">
								Live Shipping
							</th>
							<th scope="col" className="px-6 py-3">
								Shipping date
							</th>
							<th scope="col" className="px-6 py-3">
								Expected delivery date
							</th>
						</tr>
					</thead>
					<tbody>
						{dataOrder.map((item) => (
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{item.order_number}
								</th>
								<td className="px-6 py-4"> {item.customer_name}</td>
								<td className="px-6 py-4 min-w-[300px]">
									{item.recipient_address}
								</td>
								<td className="px-6 py-4 min-w-[200px]">{item.shipping_address}</td>
								<td className="px-6 py-4 ">
									{_handleRederStatus(item.live_shipping)}
								</td>
								<td className="px-6 py-4">
									{moment(item.shipping_date).format("YYYY/MM/DD")}
								</td>
								<td className="px-6 py-4">
									{moment(item.expected_delivery_date).format("YYYY/MM/DD")}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
				<div className="max-w-2xl mx-auto px-4">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
							Reviews and Comments
						</h2>
					</div>
					<form className="mb-6">
						<TextField
							error={dataErorr["fullName"]}
							className="w-full mb-[20px] m-h-[50px]"
							id="outlined-required"
							label="Your Name *"
							name="fullName"
							value={dataInput.fullName}
							onChange={(e) => {
								const { value } = e.target;
								setDatInput({ ...dataInput, fullName: value });
								delete dataErorr["fullName"];
								setDatErorr({ ...dataErorr });
							}}
						/>

						<TextField
							error={dataErorr["content"]}
							className="w-full"
							id="outlined-required"
							label="Your comment *"
							name="content"
							multiline
							rows={5}
							value={dataInput.content}
							onChange={(e) => {
								const { value } = e.target;
								setDatInput({ ...dataInput, content: value });
								delete dataErorr["content"];
								setDatErorr({ ...dataErorr });
							}}
						/>

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
							onClick={() => {
								if (_handleValite()) {
									addCustomerFeeback({
										fullName: dataInput.fullName,
										content: dataInput.content,
										rate: `${starView}`,
										orderId: params.slug,
									}).then(() => {
										if (params.slug) {
											_handleFecthListComment(params.slug);
										}
										setDatInput({ fullName: "", content: "" });
									});
								}
							}}
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							Post comment
						</button>
					</form>
					{listComment.map((item: any) => (
						<article className="mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
							<footer className="flex justify-between items-center mb-2">
								<div className="flex items-center align-center">
									<p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
										{item.fullName}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 mr-[20px]">
										<time dateTime="2022-02-08" title="February 8th, 2022">
											{moment(item.createdAt).fromNow()}
										</time>
									</p>
									{Array.from(Array(5)).map((el, index) => (
										<svg
											className={`w-4 h-4 ${
												index > +item?.rate
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
							</footer>
							<p className="text-gray-500 dark:text-gray-400">{item.content}</p>
						</article>
					))}
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
