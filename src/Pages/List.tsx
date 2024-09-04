import { useContext, useState } from "react"
import { UserContext } from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import { Button, IconButton, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import { useUser } from "../Hooks/User";
import { useUserCombined } from "../Hooks/UserCombined";

export const ListPage = () => {
	const { push } = useHistory();
	const user = useContext(UserContext);

	if (!user) {
		push("/");
	}

	return (
		<div>
			<Typography>Olá, {user}</Typography>

			<List>
				<ListItem disablePadding>
					<ListItemText primary="Item 1" />
				</ListItem>
				<ListItem disablePadding>
					<ListItemText primary="Item 2" />
				</ListItem>
				<ListItem disablePadding>
					<ListItemText primary="Item 3" />
				</ListItem>
				<ListItem disablePadding>
					<ListItemText primary="Item 4" />
				</ListItem>
				<ListItem disablePadding>
					<ListItemText primary="Item 5" />
				</ListItem>
			</List>
		</div>
	)
}

// Parte App-4-user-context-controlled
export const ListControlledPage = () => {
	const { push } = useHistory();
	const { isAuth, user, logout } = useUser();

	if (!isAuth) {
		push("/");
	}

	return (
		<div>
			<Typography>Olá, {user}</Typography>

			<List>
				<ListItem disablePadding>
					<ListItemText primary="Item 1" />
				</ListItem>
				<ListItem disablePadding>
					<ListItemText primary="Item 2" />
				</ListItem>
				<ListItem disablePadding>
					<ListItemText primary="Item 3" />
				</ListItem>
				<ListItem disablePadding>
					<ListItemText primary="Item 4" />
				</ListItem>
				<ListItem disablePadding>
					<ListItemText primary="Item 5" />
				</ListItem>
			</List>

			<Button variant="contained" onClick={() => logout()}>Logout</Button>
		</div>
	)
}

// Parte App-5-user-context-combined
export const ListCombinedPage = () => {
	const { push } = useHistory();
	const [newItem, setNewItem] = useState("");
	const { isAuth, user, items, removeItem, addItem } = useUserCombined();

	const handleNewItem = () => {
		addItem(newItem);
		setNewItem("");
	}

	const handleRemoveItem = (itemToRemove: string) => {
		removeItem(itemToRemove);
	}


	if (!isAuth) {
		push("/");
	}

	return (
		<div>
			<Typography>Olá, {user}</Typography>

			<Stack direction="column" spacing={1} sx={{ justifyContent: "center", alignItems: "center" }}>
				<Typography>Adicione um novo item:</Typography>
				<TextField variant="outlined" label="item" onChange={e => setNewItem(e.target.value)} />
				<Button variant="contained" onClick={handleNewItem}>Adicionar novo item</Button>
			</Stack>

			{items.length <= 0 ? (
				<Typography>Não ainda não possui items.</Typography>
			) : (
				<List>
					{items.map(item => (
						<ListItem disablePadding secondaryAction={<IconButton edge="end" aria-label="delete" onClick={() => handleRemoveItem(item)}><DeleteIcon /></IconButton>}>
							<ListItemText primary={item} />
						</ListItem>
					))}
				</List>
			)}
		</div>
	)
}