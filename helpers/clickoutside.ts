import { useEffect, useRef, useState } from "react";

export const useHandleClickOutside = () => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const [dropMenuState, setDropMenuState] = useState(false);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        // Close the dropdown if the click is outside of it and not on the button
        if (
            dropdownRef.current &&
            buttonRef.current &&
            !dropdownRef.current.contains(event.target as Node) &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setDropMenuState(false);
        }
    };

    return {
        buttonRef,
        dropdownRef,
        dropMenuState,
        setDropMenuState,
    };
};
