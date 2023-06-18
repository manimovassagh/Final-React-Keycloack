import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";


const useAuth = () => {
    const isRun = useRef(false);

    const [isLogin, setLogin] = useState(true);

    useEffect(() => {
        const client = new Keycloak({
            url: "http://127.0.0.1:4000",
            realm: 'myrealm',
            clientId: 'myclient',
        });
        if (isRun.current) return;

        isRun.current = true;
        client
            .init({ onLoad: "login-required" })
            .then((res) => {
                setLogin(res);

            });
    }, []);

    return isLogin
};

export default useAuth;