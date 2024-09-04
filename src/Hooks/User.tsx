import { useContext } from "react";
import { UserContext } from "../Context/UserContextControlled";

export const useUser = () => useContext(UserContext);