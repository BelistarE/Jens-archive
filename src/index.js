import "./styles.css";
import homeDisplay from './home';
import p2008 from './2008';

(function(){
    const mainModule = {
        init: function(){
            console.log("mainModule loaded")
            homeDisplay.init();
            this.cacheDOM();
            this.btnFunctions();
        },
        cacheDOM: function(){
            this.homeBtn = document.querySelector('#homebtn');
            //this.button2008 = document.querySelector('#2008');
        },
        btnFunctions: function(){
           /* this.homeBtn.addEventListener('click', () => {
                homeDisplay.init();
            }); */
            
        },
    }
    mainModule.init();
})();

