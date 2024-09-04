import { Alert, Snackbar, Typography } from "@mui/material";
import { useUserCombined } from "../Hooks/UserCombined";
import { useRef } from "react";

const AuthListener = () => {
	const { isAuth } = useUserCombined();
	const renderCounter = useRef(0);
	renderCounter.current = renderCounter.current + 1;

	return (
		<Snackbar
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			open={true}
		>
			<div style={{ display: "flex", flexDirection: "column", gap: "10px"}}>
				<Alert
					severity={isAuth ? "success" : "error"}
					variant="filled"
					sx={{ width: '100%' }}
				>
					<Typography>{isAuth ? "Logado" : "Deslogado"}</Typography>
				</Alert>

				<Alert
					variant="filled"
					color="warning"
					sx={{ width: '100%' }}
				>
					<Typography>Renders: {renderCounter.current}</Typography>
				</Alert>
			</div>
		</Snackbar>
	)
};

export default AuthListener;