import { useEffect } from "react";

const useKeyListener = (keyCode: string, onKeyDown:() => void) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === keyCode) {
				onKeyDown();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [keyCode, onKeyDown]);
};

export default useKeyListener;
