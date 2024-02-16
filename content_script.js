    const root = document.documentElement
    const originalMainSurfaceColor = root.style.getPropertyValue('--main-surface-primary')
    const originalGray100Color = root.style.getPropertyValue('--gray-100')
    const originalTextPrimaryColor = root.style.getPropertyValue('--text-primary')

    // init
    if (root.classList.contains('dark')) {
        applyDarkMode()
    }

    function applyDarkMode() {
        root.style.setProperty('--main-surface-primary', '#343541')
        root.style.setProperty('--text-primary', 'rgba(249,249,249,0.91)')
        root.style.setProperty('--gray-100', 'rgba(249,249,249,0.91)')
    }

    function applyLightMode() {
        root.style.setProperty('--main-surface-primary', originalMainSurfaceColor)
        root.style.setProperty('--text-primary', originalTextPrimaryColor)
        root.style.setProperty('--gray-100', originalGray100Color)
    }

    function changeMode() {
        if (root.classList.contains('dark')) {
            applyDarkMode()
        } else {
            applyLightMode()
        }
    }

    function onClassChange(node, callback) {
        let lastClassString = node.classList.toString();
        const mutationObserver = new MutationObserver((mutationList) => {
            for (const item of mutationList) {
                if (item.attributeName === "class") {
                    const classString = node.classList.toString();
                    if (classString !== lastClassString) {
                        callback();
                        lastClassString = classString;
                        break;
                    }
                }
            }
        });

        mutationObserver.observe(node, {attributes: true});
        return mutationObserver;
    }

    onClassChange(root, changeMode)

