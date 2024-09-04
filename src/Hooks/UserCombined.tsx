import { useContext } from "react";
import { UserContext } from "../Context/UserContextCombined";

export const useUserCombined = () => useContext(UserContext);