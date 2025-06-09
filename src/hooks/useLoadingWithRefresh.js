import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setAuth} from '../features/auth/authSlice'

export function useLoadingWithRefresh() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/auth/refresh`,
                    {
                        withCredentials: true,
                    }
                );
                console.log(data);
                dispatch(setAuth(data))
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        })();
    }, []);

    return {loading}
}
