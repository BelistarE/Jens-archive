const homeDisplay = {
    content: document.getElementById('app'),
    init: function() {
        console.log('homeDisplay initialized');
        this.content.setAttribute("id", "contentHome"); 
        this.appendContainers();


    },

    appendContainers: function(){
        const top = document.createElement('div');
        top.setAttribute('id', 'top');
        this.content.appendChild(top);
    }

};


export default homeDisplay;