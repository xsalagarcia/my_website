import { useState, useEffect } from "react";

function FloatingScrollTopButton () {
    const [isVisible, setIsVisible] = useState(false);
    const [timerId, setTimerId] = useState(null);



    useEffect(()=> {
        const pageContent = document.getElementById("page-content");

        function handleScroll (e) {
            const scrollPosition = pageContent ? e.currentTarget.scrollTop : window.scrollY;
            if (scrollPosition > 20) {
                setIsVisible(true);

                if (timerId){
                    clearTimeout(timerId);
                    console.log("timer id clena", timerId)
                }

                setTimerId(setTimeout(()=> {
                    setIsVisible(false)
                }, 5000));

            }
            else
                setIsVisible(false)
        }

        if (pageContent) 
            pageContent.addEventListener("scroll", handleScroll);
         else
            window.addEventListener("scroll", handleScroll);

        return ()=> {
            if (pageContent) 
                pageContent.removeEventListener("scroll", handleScroll);
            else
                window.removeEventListener("scroll", handleScroll);

            if (timerId)
                clearTimeout(timerId);

        }
    }, [timerId]);

    function handleScrollToTop (e) {
        e.preventDefault();
        const pageContent = document.getElementById("page-content");
        if (pageContent) {
            pageContent.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    

    return (
        <a
            className="btn btn-lg bs-icons-lg btn-only-icon soft-colors rounded-full"
            data-icon="&#xF13A;"
            onClick={handleScrollToTop}
            style = {{
                position: "fixed",
                bottom: "20px",
                right: "50%",
                display: isVisible ? 'block' : 'none',
                transition: 'opacity 0.3s ease',
                opacity: isVisible ? 1 : 0,
                boxShadow: "3px 3px 8px #7F7F7F"
            }}
        ></a>
    )
}

export default FloatingScrollTopButton;