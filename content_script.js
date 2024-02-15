function changeBackgroundColor() {
    const root = document.documentElement

    const originalBgColor = document.body.style.backgroundColor
    const originalMainSurfaceColor =document.documentElement.style.getPropertyValue('--main-surface-primary')
    const originalMainSurfaceSecondaryColor =document.documentElement.style.getPropertyValue('--main-surface-secondary')

    if(root.classList.contains('dark')){
        document.body.style.backgroundColor = '#343541';
        document.documentElement.style.setProperty('--main-surface-primary', '#343541')
        root.style.setProperty('--main-surface-secondary', 'rgba(249,249,249,0.91)')
    }

    const config = {attributes: true, attributeFilter: ['class']};
    const onModeChange = function (mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {

                const targetElement = mutation.target
                if (targetElement.classList.contains('dark')) {
                    document.body.style.backgroundColor = '#343541';
                    document.documentElement.style.setProperty('--main-surface-primary', '#343541')
                    root.style.setProperty('--gray-50', 'rgba(249,249,249,0.91)')
                } else {
                    document.body.style.backgroundColor = originalBgColor;
                    document.documentElement.style.setProperty('--main-surface-primary', originalMainSurfaceColor)
                    root.style.setProperty('--main-surface-secondary', originalMainSurfaceSecondaryColor)
                }
            }
        }
    }

    const observer = new MutationObserver(onModeChange);
    observer.observe(root, config)
}

changeBackgroundColor();
