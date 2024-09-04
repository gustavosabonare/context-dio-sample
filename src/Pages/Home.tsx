import { useContext } from "react"
import { UserContext } from "../Context/UserContext";
import { Button, Link as MaterialLink, Stack, Typography } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../Hooks/User";
import { useUserCombined } from "../Hooks/UserCombined";

export const HomePage = () => {
	const { push } = useHistory();
	const user = useContext(UserContext);

	if (!user) {
		push("/");
	}

	return (
		<div>
			<Typography variant="body1">Bem vindo(a), {user}.</Typography>

			<Link to="/lista"><MaterialLink>Ir para Lista de Items</MaterialLink></Link>
		</div>
	)
}

// Parte App-4-user-context-controlled
export const HomeControlledPage = () => {
	const { push } = useHistory();
	const { isAuth, user } = useUser();

	if (!isAuth) {
		push("/");
	}

	return (
		<div>
			<Typography variant="body1">Bem vindo(a), {user}.</Typography>

			<Link to="/lista"><MaterialLink>Ir para Lista de Items</MaterialLink></Link>
		</div>
	)
}

// Parte App-5-user-context-combined
export const HomeCombinedPage = () => {
	const { push } = useHistory();
	const { isAuth, user, logout } = useUserCombined();

	if (!isAuth) {
		push("/");
	}

	return (
		<div>
			<Typography variant="body1">Bem vindo(a), {user}.</Typography>

			<Stack direction="column" spacing={1} sx={{ justifyContent: "center", alignItems: "center" }}>
				<Link to="/lista"><MaterialLink>Ir para Lista de Items</MaterialLink></Link>

				<Button variant="contained" onClick={() => logout()}>Logout</Button>
			</Stack>
		</div>
	)
}