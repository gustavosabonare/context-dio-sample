import { createContext, ReactNode, useState } from "react";

type UserProps = {
	login: (user: string, password: string) => Promise<void>,
	logout: () => Promise<void>,
	isAuth: boolean,
	user: undefined | string,
};

const UserInitProp = {
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

	return UserInitProp;
}

export const UserContext = createContext<UserProps>(getInitProp());

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState<UserProps>(getInitProp());

	const login = async (user: string, password: string) => {
		const newState = { ...state, user, isAuth: !!user }
		setState(newState);
		sessionStorage.setItem("state", JSON.stringify(newState));
	}

	const logout = async () => {
		setState(UserInitProp);
		sessionStorage.removeItem("state");
	}

	return (
		<UserContext.Provider value={{ ...state, login, logout }}>
			{children}
		</UserContext.Provider>
	)
}
