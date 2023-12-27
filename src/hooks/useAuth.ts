import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import cookie from 'js-cookie'
import { auth } from "src/firebase";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);

     createUserWithEmailAndPassword(auth, email, password)
       .then((res) => {
         setUser(res.user);
         cookie.set("user_id", res.user.uid);
           fetch("/api/customer/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
             body: JSON.stringify({email:res.user.email, user_id:res.user.uid}),
          });
        router.push("/auth");
        setIsLoading(true);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        cookie.set("user_id", res.user.uid);
        router.push("/");
        setIsLoading(true);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const logout = async () => {
    setIsLoading(true);

    signOut(auth)
      .then(() => {
        setUser(null)
        cookie.remove("user_id")
        router.push("/auth")})
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  return {
    error,
    isLoading,
    user,
    signIn,
    signUp,
    logout,
    setUser,
    setIsLoading,
  };
};
