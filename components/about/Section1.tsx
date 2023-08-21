"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export default function SectionOne() {
	const [value, setValue] = useState<Dayjs | null>(null);

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
						error
						helperText="Incorrect entry."
						id="outlined-required"
						label="Order number"
					/>
					<TextField id="outlined-required" label="Customer name" />
					<TextField id="outlined-required" label="Recipient address" />
					<TextField id="outlined-required" label="Shipping address" />
				</div>

				<div className="sm:flex">
					<div>
						<b>Shipping date</b>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["DatePicker"]}>
								<DatePicker
									value={value}
									onChange={(newValue) => setValue(newValue)}
								/>
							</DemoContainer>
						</LocalizationProvider>
					</div>
					<div>
						<b>Expected delivery date</b>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["DatePicker"]}>
								<DatePicker
									value={value}
									onChange={(newValue) => setValue(newValue)}
								/>
							</DemoContainer>
						</LocalizationProvider>
					</div>
				</div>
				<button
					type="button"
					className="mt-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Submit
				</button>
			</Box>
		</div>
	);
}
