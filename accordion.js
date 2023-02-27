var accordionHeaders = document.querySelectorAll('.accordion-header')

accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
        var accordionContent = header.nextElementSibling
        var chevron = header.querySelector('i')
        var isCollapsed = accordionContent.classList.contains('active')

        // скрити content
        var accordionContents = document.querySelectorAll('.accordion-content')
        accordionContents.forEach(function (content) {
            content.classList.remove('active')
        })
        // Змінити "chevron"
        var chevrons = document.querySelectorAll('.accordion-header i')
        chevrons.forEach(function (chevron) {
            chevron.classList.remove('fa-chevron-up')
            chevron.classList.add('fa-chevron-down')
        })
        // показати content
        if (!isCollapsed) {
            accordionContent.classList.add('active')
            chevron.classList.remove('fa-chevron-down')
            chevron.classList.add('fa-chevron-up')
        }
    })
})
