import { createContext, ReactNode, useState } from "react";

type UserProps = {
	items: string[],
	addItem: (newItem: string) => Promise<void>,
	removeItem: (itemToRemove: string) => Promise<void>,

	login: (user: string, password: string) => Promise<void>,
	logout: () => Promise<void>,
	isAuth: boolean,
	user?: string,
};

const UserInitProps: UserProps = {
	items: [],
	addItem: (newItem: string) => Promise.resolve(),
	removeItem: (itemToRemove: string) => Promise.resolve(),

	user: undefined,
	isAuth: false,
	login: () => Promise.resolve(),
	logout: () => Promise.resolve()
};

const getInitProp = () => {
	const sessionState = sessionStorage.getItem("state");

	if (sessionState) {
		return JSON.parse(sessionState)
	}

	return UserInitProps;
}

export const UserContext = createContext<UserProps>(getInitProp());

export const UserCombinedProvider = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState<UserProps>(getInitProp());

	const updateCache = (stateToCache: UserProps) => {
		sessionStorage.setItem("state", JSON.stringify(stateToCache));
	}

	const cleanCache = () => {
		sessionStorage.setItem("state", JSON.stringify(UserInitProps));
	}

	const addItem = async (newItem: string) => {
		const newItems = [...state.items, newItem];
		const newState = { ...state, items: newItems }

		setState(newState);
		updateCache(newState);
	}

	const removeItem = async (itemToRemove: string) => {
		const newItems = state.items.filter(a => a !== itemToRemove);
		const newState = { ...state, items: newItems }

		setState(newState);
		updateCache(newState);
	}

	const login = async (user: string, password: string) => {
		const newState = { ...state, user, isAuth: !!user }
		setState(newState);
		updateCache(newState);
	}

	const logout = async () => {
		setState(UserInitProps);
		cleanCache()
	}

	return (
		<UserContext.Provider value={{ ...state, login, logout, addItem, removeItem }}>
			{children}
		</UserContext.Provider>
	)
}
