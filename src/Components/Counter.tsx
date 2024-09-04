import { Avatar } from "@mui/material";

interface ICounterProps {
	count: number,
}
const Counter = ({ count }: ICounterProps) => {
	return (
		<div>
			<Avatar>{count}</Avatar>
		</div>
	)
};

export default Counter;