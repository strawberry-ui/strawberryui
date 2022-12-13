export function useFocusNextElement () {
    //add all elements we want to include in our selection
    let focusableElements = 'a:not([disabled]), button:not([disabled]), input:not([disabled]), , textarea:not([disabled]), select:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
    let activeElement = document.activeElement
    if (activeElement && activeElement.form) {
        let focusable = Array.prototype.filter.call(activeElement.form.querySelectorAll(focusableElements),
        function (element) {
            //check for visibility while always include the current activeElement 
            return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement
        });
        let index = focusable.indexOf(document.activeElement);
        if(index > -1) {
           let nextElement = focusable[index + 1] || focusable[0];
           nextElement.focus();
        }                    
    }
}