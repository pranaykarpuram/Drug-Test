class BSA{
    constructor(){
        this.height = createInput("");
        this.weight = createInput("");
        this.title1 = createElement('h3');
        this.title2 = createElement('h3');
        this.bsa = createElement('h1');
        this.enter = createButton('Enter');

        this.bsaB = createButton("Calculate BSA");
        this.counts = createButton("Labs");
        this.tablets = createButton("Tablets");
        this.dashboard = createButton("Dashboard");
    }

    display(){

        this.bsaB.show();
        this.bsaB.position(0,height*1100/1200);
        this.bsaB.mousePressed(()=>{
            state = "BSA";
        });

        this.counts.show();
        this.counts.position(width*1/3,height*1100/1200);
        this.counts.mousePressed(()=>{
            state = "counts"
        });

        this.tablets.show();
        this.tablets.position(width*2/3,height*1100/1200);
        this.tablets.mousePressed(()=>{
            state = "tablets"
        });

        this.dashboard.show();
        this.dashboard.position(width*5/6,height*1100/1200);
        this.dashboard.mousePressed(()=>{
            state = "dashboard";
        });

        this.height.show();
        this.weight.show();
        this.title1.show();
        this.title2.show();
        this.enter.show();


        this.title1.html("Enter Height(in cm): ");
        this.title1.position(width/2,height/2-150);
        this.height.position(width/2,height/2-100);

        this.title2.html("Enter Weight(in kg): ");
        this.title2.position(width/2,height/2);
        this.weight.position(width/2, height/2+100);

        this.enter.position(width/2,height*3/4);



        this.enter.mousePressed(()=>{
            this.height.hide();
            this.weight.hide();
            this.title1.hide();
            this.title2.hide();
            this.enter.hide();
            var heights = this.height.value();
            var weight = this.weight.value();
            var bsa = (heights*weight)/3600^1/2
            this.bsa.show();
            this.bsa.html("Your Body Surface Area is: "+ bsa+"metre square");
            this.bsa.position(width*1235/2400, height*780/1200);
            database.ref("username: "+username+"/Day/Day"+dayIndex+"/counts").update({
                bsa: bsa
            });
        });





    }
    hide(){
        this.height.hide();
        this.weight.hide();
        this.title1.hide();
        this.title2.hide();
        this.enter.hide();
        this.bsaB.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
        this.bsa.hide();
    }

}