import React from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
};

function Layout({ children, className }: Props) {
	return (
		<div className={`max-w-7xl mx-auto w-full ${className}`}>{children}</div>
	);
}

export default Layout;
