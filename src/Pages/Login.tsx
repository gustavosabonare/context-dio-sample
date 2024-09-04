import { useState } from "react"
import { Button, Stack, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useUser } from "../Hooks/User";
import { useUserCombined } from "../Hooks/UserCombined";

export const LoginPage = () => {
	const history = useHistory();
	const { isAuth, login } = useUser()
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		login(user, password);
	}

	if (isAuth) {
		history.push("/inicio");
	}

	return (
		<Stack direction="column" spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
			<TextField variant="outlined" label="login" onChange={e => setUser(e.target.value)} />
			<TextField variant="outlined" type="password" label="senha" onChange={e => setPassword(e.target.value)} />
			<Button variant="contained" onClick={handleLogin}>Login</Button>
		</Stack>
	)
}

// Parte App-5-user-context-combined
export const LoginCombinedPage = () => {
	const history = useHistory();
	const { isAuth, login } = useUserCombined()
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		login(user, password);
	}

	if (isAuth) {
		history.push("/inicio");
	}

	return (
		<Stack direction="column" spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
			<TextField variant="outlined" label="login" onChange={e => setUser(e.target.value)} />
			<TextField variant="outlined" type="password" label="senha" onChange={e => setPassword(e.target.value)} />
			<Button variant="contained" onClick={handleLogin}>Login</Button>
		</Stack>
	)
}