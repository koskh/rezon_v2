export default function (params) {
    const pairs = [];

    for (let key in params) {
        if (params.hasOwnProperty(key)) 
            pairs.push(key + '=' + encodeURIComponent(params[key]));
        
    }

    return pairs.join('&');
}
