// content_script.js

// Function to change background color
function changeBackgroundColor() {
    const root = document.documentElement
    root.style.setProperty('--gray-50', 'rgba(249,249,249,0.91)')
    document.body.style.backgroundColor = '#343541';
    document.documentElement.style.setProperty('--main-surface-primary', '#343541')
}
changeBackgroundColor();
