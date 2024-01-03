import React from "react"
import * as SecureStore from 'expo-secure-store';
import { env } from "../../environ";


interface AuthProps {
    authState?: { accessToken: string | null, authenticated: boolean | null };
    onLogin?: (username: string | null, password: string | null) => Promise<any>
    onLogout?: () => Promise<any>
}

const AuthContext = React.createContext<AuthProps>({})

export const useAuth = () => {
    return React.useContext(AuthContext)
}

export const AuthProvider = ({children}: any) => {
    const [authState, setAuthState] = React.useState<{
        accessToken: string | null,
        authenticated: boolean | null
    }>({
        authenticated: null,
        accessToken: null
    })

    const login = async (username: string | null, password: string | null) => {
        try {
            const res = await fetch(env.BASE_API + "/api/account/token/",
                {
                    method: "POST", credentials: "include", body:
                        JSON.stringify({
                            username: username,
                            password: password
                        }),
                    headers: {"Content-Type": "Application/json"}
                })
            if (res.ok) {
                const response = await res.json()
                await SecureStore.setItemAsync("access_token", JSON.stringify(response.access));
                await SecureStore.setItemAsync("refresh_token", JSON.stringify(response.refresh));
                setAuthState({
                    accessToken: response.access,
                    authenticated: true
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
    const logout = async () => {
        try {
            await SecureStore.deleteItemAsync("access_token");
            await SecureStore.deleteItemAsync("refresh_token");
            setAuthState({
                accessToken: null,
                authenticated: false
            })

        }
        catch (e){
            console.log(e)
        }
    }

    const checkAuth =  async () => {
        try {
            const binary_token = await SecureStore.getItemAsync("refresh_token");
            if (binary_token){
                const refresh_token = JSON.parse(binary_token)
                const res = await fetch(env.BASE_API + "/api/account/token/refresh/", {
                    method: "POST",
                    body: JSON.stringify({refresh: refresh_token}),
                    headers: {"Content-Type": "application/json"}
                })
                if (res.ok){
                    const response = await res.json()
                    setAuthState({
                        accessToken: response.access,
                        authenticated: true
                    })
                }
            }
        }catch (e){
            console.log(e)
        }
    }

    React.useEffect(() => {
        checkAuth()
        console.log("Works")
    }, [])

    const value: AuthProps = {
        authState: authState,
        onLogin: login,
        onLogout: logout
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}