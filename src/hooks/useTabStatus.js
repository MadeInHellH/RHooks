import { useState, useEffect } from 'react';

function useTabStatus() {
    const [hasFocus, setHasFocus] = useState(window.document.hasFocus());

    useEffect(() => {
        const handleFocus = () => {
            setHasFocus(true);
        };
        const handleBlur = () => {
            setHasFocus(false);
        };

        window.addEventListener('focus', () => setHasFocus(true));
        window.addEventListener('blur', () => setHasFocus(false));

    return () => { 
         window.removeEventListener('focus', () => setHasFocus(true));
         window.removeEventListener('blur', () => setHasFocus(false));
    };
},  []);    

    return { hasFocus };
}
export default useTabStatus;