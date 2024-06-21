"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
	return (
		<div className="w-full">
			<CountUp end={amount} decimal="." prefix="$" decimals={2} duration={1} />
		</div>
	);
};

export default AnimatedCounter;
