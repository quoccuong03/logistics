"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import mydate, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { addOrder } from "@lib/get-order";
import { useRouter } from "next/navigation";
export default function SectionOne() {
	const [value, setValue] = useState<Dayjs | null>(mydate());
	const [valueExpectOrder, setValueExpectOrder] = useState<Dayjs | null>(mydate());
	const [dataInput, setDatInput] = useState<any>({});
	const [dataErorr, setDatErorr] = useState<any>({});
	const router = useRouter();
	const _handleValite = () => {
		let check = true;
		if (!dataInput["order_number"] || dataInput["order_number"] === "") {
			check = false;
			dataErorr["order_number"] = "error";
		}
		if (!dataInput["customer_name"] || dataInput["customer_name"] === "") {
			check = false;
			dataErorr["customer_name"] = "error";
		}

		if (!dataInput["recipient_address"] || dataInput["recipient_address"] === "") {
			check = false;
			dataErorr["recipient_address"] = "error";
		}
		if (!dataInput["shipping_address"] || dataInput["shipping_address"] === "") {
			check = false;
			dataErorr["shipping_address"] = "error";
		}
		setDatErorr({ ...dataErorr });
		return check;
	};

	return (
		<div className="p-[10px]">
			<Box
				component="form"
				sx={{
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<div>
					<TextField
						error={dataErorr["order_number"]}
						helperText="Not Allow Empty."
						id="outlined-required"
						label="Order number *"
						name="order_number"
						onChange={(e) => {
							const { value } = e.target;
							setDatInput({ ...dataInput, order_number: value });
							delete dataErorr["order_number"];
							setDatErorr({ ...dataErorr });
						}}
					/>
					<TextField
						onChange={(e) => {
							const { value } = e.target;
							setDatInput({ ...dataInput, customer_name: value });
							delete dataErorr["customer_name"];
							setDatErorr({ ...dataErorr });
						}}
						helperText="Not Allow Empty."
						error={dataErorr["customer_name"]}
						id="outlined-required"
						label="Customer name *"
					/>
					<TextField
						id="outlined-required"
						helperText="Not Allow Empty."
						onChange={(e) => {
							const { value } = e.target;
							setDatInput({ ...dataInput, recipient_address: value });
							delete dataErorr["recipient_address"];
							setDatErorr({ ...dataErorr });
						}}
						error={dataErorr["recipient_address"]}
						label="Recipient address *"
					/>
					<TextField
						id="outlined-required"
						helperText="Not Allow Empty."
						onChange={(e) => {
							const { value } = e.target;
							setDatInput({ ...dataInput, shipping_address: value });
							delete dataErorr["shipping_address"];
							setDatErorr({ ...dataErorr });
						}}
						error={dataErorr["shipping_address"]}
						label="Shipping address *"
					/>
				</div>

				<div className="sm:flex">
					<div>
						<b>Shipping date</b>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["DatePicker"]}>
								<DatePicker
									// name="shipping_date"
									value={value}
									onChange={(newValue) => {
										console.log(newValue);
										setValue(newValue);
									}}
								/>
							</DemoContainer>
						</LocalizationProvider>
					</div>
					<div>
						<b>Expected delivery date</b>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["DatePicker"]}>
								<DatePicker
									// name="expected_delivery_date"
									value={valueExpectOrder}
									onChange={(newValue) => setValueExpectOrder(newValue)}
								/>
							</DemoContainer>
						</LocalizationProvider>
					</div>
				</div>
				<button
					onClick={() => {
						if (_handleValite()) {
							const newData = {
								...dataInput,
								shipping_date: value?.format("YYYY/MM/DD"),
								expected_delivery_date: valueExpectOrder?.format("YYYY/MM/DD"),
								live_shipping: "pending",
							};
							addOrder(newData).then(() => {
								router.push("/vi");
							});
						}
					}}
					type="button"
					className="mt-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Submit
				</button>
			</Box>
		</div>
	);
}
