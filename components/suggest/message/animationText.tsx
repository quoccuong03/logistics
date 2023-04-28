"use client";
import Typed from "react-typed";

type Props = {
	children: any;
};
export default function AnimatedText(props: Props) {
	const { children } = props;

	return <div>{children}</div>;
}
