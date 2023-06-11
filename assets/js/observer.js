const observer = new IntersectionObserver(
    entries => {
        console.log(hiddenElements)
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    },
    {
        threshold: 1,
        rootMargin: "200px"
    }
)

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))
