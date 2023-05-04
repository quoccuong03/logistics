"use client";
import React, { useState } from "react";

type Props = {
	children?: any;
	className?: string;
	textTow?: any;
	text?: any;
};
export default function AnimatedText(props: Props) {
	const { children, className = "", text, textTow } = props;
	const [firstAnimation, setFirstAnimation] = useState(true);
	const [secondAnimation, setSecondAnimation] = useState(false);

	function handleFirstAnimationEnd() {
		setFirstAnimation(false);
		setSecondAnimation(true);
		console.log(3838328328);
	}

	function handleSecondAnimationEnd() {
		setSecondAnimation(false);
		setFirstAnimation(true);
	}

	return (
		<>
			<div
				onAnimationEnd={handleFirstAnimationEnd}
				className={`${firstAnimation ? "text-type" : ""} ${className}`}
			>
				{text}
			</div>
			{secondAnimation ? (
				<div
					className={` ${secondAnimation ? "text-type-second" : ""}  ${className}`}
					onAnimationEnd={handleSecondAnimationEnd}
				>
					{textTow}
				</div>
			) : null}

			{children}
		</>
	);
}
