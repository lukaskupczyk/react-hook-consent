export function addExternalScript(src: string, elementId: string) {
    const element = document.createElement('script');
    element.id = elementId;
    element.src = src;
    element.async = true;
    document.body.appendChild(element);
}
