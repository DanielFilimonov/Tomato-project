import { useEffect } from "react";
import { useAppDispatch } from "./useTypeScriptHook";
import { useInView } from "react-intersection-observer";

import { activeSectionSet } from "../store/activeSectionSlice";

interface UseSectionInViewProps {
	sectionName: string;
	threshold?: number;
	rootMargin?: string;
}

export const useSectionInView = ({
	sectionName,
	threshold = 0.9,
	rootMargin = "0px",
}: UseSectionInViewProps) => {
	const dispatch = useAppDispatch();

	const { ref, inView } = useInView({
		threshold,
		rootMargin,
	});

	useEffect(() => {
		if (inView) {
			dispatch(activeSectionSet(sectionName));
		}
	}, [inView, dispatch, sectionName]);

	return { ref, inView };
};
