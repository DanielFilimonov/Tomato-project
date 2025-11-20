import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { activeSectionSet } from "../store/activeSectionSlice";

export const useSectionInView = ({
	sectionName,
	threshold = 0.9,
	rootMargin = "0px",
}) => {
	const dispatch = useDispatch();

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
