class Error{
    constructor(){
        this.error = createElement('h1');
        //this.tryagain = createButton("Try again");
    }
    display(){
        this.error.show();
        this.tryagain.show();
        this.error.html("Incorrect Username/Password");
        this.error.position(width/2,height/2);
        //this.tryagain.position(width/2, height*3/4);
    }
    hide(){
        this.error.hide();
        //this.tryagain.hide();
    }
}