"use client";

type Props = {
	children: any;
};
export default function AnimatedText(props: Props) {
	const { children } = props;

	return <div>{children}</div>;
}
