// src/Chat.tsx
import React, { useState, useEffect } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { firebaseConfig } from "./firebaseConfig";
import { string } from "zod";

// Initialize Firebase
type typeDoc = {
	id: string;
	text: string;
};
const app = firebase.initializeApp(firebaseConfig);

// @ts-ignore

const firestore = app.firestore();
const messagesCollection = firestore.collection("messages");

const Chat: React.FC = () => {
	const [messages, setMessages] = useState<Array<typeDoc>>([]);
	const [newMessage, setNewMessage] = useState("");
	const [isChat, setIsChat] = useState(false);
	useEffect(() => {
		// Listen for new messages
		// @ts-ignore
		const unsubscribe = messagesCollection.orderBy("timestamp").onSnapshot((snapshot) => {
			const messageList: Array<typeDoc> = [];
			// @ts-ignore
			snapshot.forEach((doc) => {
				const message = doc.data();
				messageList.push({ text: message.text, id: message.id });
			});
			setMessages(messageList);
		});

		return () => unsubscribe();
	}, []);

	const sendMessage = (e: React.FormEvent) => {
		e.preventDefault();
		if (newMessage.trim() !== "") {
			messagesCollection.add({
				text: newMessage,
				id: "user",
				// @ts-ignore
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			});
			setNewMessage("");
		}
	};

	return (
		<div>
			<div className="relative">
				<div className="fixed bottom-0 right-0  z-20">
					<button
						onClick={() => {
							setIsChat(true);
						}}
						className="my-8 ml-auto px-5 py-2 bg-red-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none"
					>
						Chat
					</button>
					{isChat ? (
						<div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen bg-white">
							<div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
								<div className="relative flex items-center space-x-4">
									<div className="relative">
										<span className="absolute text-green-500 right-0 bottom-0">
											<svg width={20} height={20}>
												<circle cx={8} cy={8} r={8} fill="currentColor" />
											</svg>
										</span>
										<img
											src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
											alt=""
											className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
										/>
									</div>
								</div>

								<button
									type="button"
									onClick={() => {
										setIsChat(false);
									}}
									className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								>
									<span className="sr-only">Close menu</span>

									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div
								id="messages"
								className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
							>
								{messages.map((message, index) =>
									message.id === "user" ? (
										<div key={index} className="chat-message">
											<div className="flex items-end">
												<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
													<div>
														<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
															{message.text}
														</span>
													</div>
												</div>
												<img
													src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
													alt="My profile"
													className="w-6 h-6 rounded-full order-1"
												/>
											</div>
										</div>
									) : (
										<div key={index} className="chat-message">
											<div className="flex items-end justify-end">
												<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
													<div>
														<span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
															{message.text}
														</span>
													</div>
												</div>
												<img
													src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
													alt="My profile"
													className="w-6 h-6 rounded-full order-2"
												/>
											</div>
										</div>
									),
								)}
							</div>
							<div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
								<div className="relative flex">
									<input
										onChange={(e) => setNewMessage(e.target.value)}
										type="text"
										placeholder="Write your message!"
										className="w-full sm:w-[300px] focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 bg-gray-200 rounded-md py-3"
									/>
									<div className="absolute right-0 items-center inset-y-0  sm:flex">
										<button
											type="button"
											onClick={sendMessage}
											className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="h-6 w-6 ml-2 transform rotate-90"
											>
												<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Chat;
