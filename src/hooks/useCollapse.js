import { useRef } from "react";


/**
 * 
 * @param {Number} velocity in milliseconds
 * @returns {Object} that contains elementRef and toggleCollapse function.
 */
export function useCollapse(velocity = 500) {
    const elementRef = useRef(null);

    /**
     * 
     * @returns If referenced element has collapsed class, makes transition: collapsed -> uncollapsing -> no collapsed or uncollapsed class.
     * Else: No collapsed class -> collapsing (removes uncollapsing) -> collapsed.
     */
    function toggleCollapse() {
        const element = elementRef.current;
        if (!element) return;

        if (element.classList.contains("collapsed")) {
            element.addEventListener("animationend", () => {
                element.classList.remove("uncollapsing");
            }, { once: true });
            element.classList.remove("collapsed");
            element.classList.add("uncollapsing");
            const finalHeight = element.scrollHeight;
            const duration = finalHeight / velocity;
            element.style.setProperty("--collapsing-duration", `${duration}s`);
            element.style.setProperty("--scroll-height", `${finalHeight}px`);
        } else {
            element.addEventListener("animationend", () => {
                element.classList.remove("collapsing");
                element.classList.add("collapsed");
            }, { once: true });
            const startingHeight = window.getComputedStyle(element).height;
            const duration = parseInt(startingHeight) / velocity;
            element.style.setProperty("--collapsing-duration", `${duration}s`);
            element.style.setProperty("--scroll-height", `${startingHeight}`);
            element.classList.remove("uncollapsing");
            element.classList.add("collapsing");
        }
    }

    return { elementRef, toggleCollapse };
}