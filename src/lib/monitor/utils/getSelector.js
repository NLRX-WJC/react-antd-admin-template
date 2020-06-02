
function getSelectors(path) {
    return path.reverse().filter(element => {
        return element !== document && element !== window;
    }).map(element => {
        let selector = "";
        if (element.id) {
            return `${element.nodeName.toLowerCase()}#${element.id}`;
        } else if (element.className && typeof element.className === 'string') {
            return `${element.nodeName.toLowerCase()}.${element.className}`;
        } else {
            selector = element.nodeName.toLowerCase();
        }
        return selector;
    }).join(' ');
}
export default function (pathsOrTarget) {
    if (Array.isArray(pathsOrTarget)) {//可能是一个数组
        return getSelectors(pathsOrTarget);
    } else {//也有可有是一个对象 
        let path = [];
        while (pathsOrTarget) {
            path.push(pathsOrTarget);
            pathsOrTarget = pathsOrTarget.parentNode;
        }
        return getSelectors(path);
    }
}