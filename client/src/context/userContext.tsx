import { createContext, useState } from "react";
import { fetchUser } from "../services/userServices";
import { Post } from "../components/Post";

export type User = {
  _id: string;
  fullName: string;
  bio: string;
  email: string;
  posts: Post[];
};

export type UserProviderValue = {
  user: User;
  setUser: React.Dispatch<User | null>;
};

export const UserContext = createContext<UserProviderValue | null>(null);

const fetchedUser = await fetchUser();

const initialUser = fetchedUser;

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
