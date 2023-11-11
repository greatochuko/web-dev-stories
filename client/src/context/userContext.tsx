import { createContext, useState } from "react";
import { fetchUser } from "../services/userServices";
type User = {
  fullName: string;
  bio: string;
  email: string;
  posts: string[];
};

type UserProviderValue = {
  user: User;
  setUser: React.Dispatch<User | null>;
};

export const UserContext = createContext<UserProviderValue | null>(null);

const fetchedUser = await fetchUser();

const initialUser = fetchedUser.error ? null : fetchedUser;

console.log(initialUser);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(initialUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
