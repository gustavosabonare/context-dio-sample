import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom"

export const LocationPage = () => {
	const { location } = useHistory();

	return (
		<Typography>
			Olá, você está na página {location.pathname};
		</Typography>
	)
}