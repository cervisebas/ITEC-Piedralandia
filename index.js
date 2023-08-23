window.onload = ()=>{
    /** @type {HTMLElement} */
    const HeaderElement = document.getElementById('header'),
        ContentElement = document.getElementById('content');
    /**
     * Variable que guarda el estado del elemento de encabezado.
     * Si es "false" significa que esta anclado, pero si es "true" esta flotando.
     * @type {boolean}
     */
    var HeaderStatus = false;
    
    for (let i = 0; i < 60; i++) {
        ContentElement.append(ContentElement.querySelector('p').cloneNode(true));
    }

    ContentElement.addEventListener('scroll', ({ target: { scrollTop } })=>setStatusHeaderContent(scrollTop !== 0));
    
    /**
     * Funcion para cambiar el estado del encabezado y del contenido.
     * @param {boolean} status Nuevo estado a colocar.
     * @return {void}
     */
    function setStatusHeaderContent(status) {
        if (HeaderStatus == status) return;
        HeaderStatus = status;
        ContentElement.style.paddingTop = (status)? '0px': '70px';
        ContentElement.style.marginTop = (!status)? '0px': '70px';
        ContentElement.style.height = (!status)? 'calc(100% - 70px)': 'calc(100% - 60px)';
        HeaderElement.style.paddingLeft = 
        HeaderElement.style.paddingRight = (status)? '32px': '16px';
        HeaderElement.style.backgroundColor = (status)? '#282828': 'transparent';
        HeaderElement.style.height = (status)? '70px': '60px';
        HeaderElement.querySelector('h2').style.fontSize = (status)? '30px': '26px';
    }
};
