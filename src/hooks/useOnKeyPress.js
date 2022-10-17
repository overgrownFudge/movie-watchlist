import { useEffect } from "react";

export const useOnKeyPress = (callback, targetKey) => {
    useEffect(() => {

        const keyPressHandler = (event) => {
            if (event.key === targetKey) {
                callback()
            }
        }
        window.addEventListener('keyup', keyPressHandler)
        return () => {
            window.removeEventListener('keyup', keyPressHandler)
        }
    }, [callback, targetKey])
}