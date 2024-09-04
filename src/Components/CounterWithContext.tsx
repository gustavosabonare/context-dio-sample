import { Avatar } from "@mui/material";
import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const CounterWithContext = () => {
	const { count } = useContext(CounterContext);

	return (
		<div>
			<Avatar>{count}</Avatar>
		</div>
	)
};

export default CounterWithContext;