class Tablets{
    constructor(){
        this.mp = createElement('h2');
        this.mpRadio = createRadio();
        this.mpRadio.option("Taken");
        this.mpRadio.option("Not Taken");
        this.meth = createElement('h2');
        this.methRadio = createRadio();
        this.methRadio.option("Taken");
        this.methRadio.option("Not Taken");
        this.mp2 = createRadio();
        this.mp2.option("Fever");
        this.mp2.option("Bleeding");
        this.mp2.option("Hospitalisation");
        this.mp2.option("Forgot");
        this.mp2.option("Doctor said no");

        this.mp3 = createRadio();
        this.mp3.option("Fever");
        this.mp3.option("Bleeding");
        this.mp3.option("Hospitalisation");
        this.mp3.option("Forgot");
        this.mp3.option("Doctor said no");

        this.enter = createButton("Enter");

        this.bsa = createButton("Calculate BSA");
        this.counts = createButton("Labs");
        this.tablets = createButton("Tablets");
        this.dashboard = createButton("Dashboard");

    }   
    display(){
        this.bsa.show();
        this.bsa.position(0,height*1100/1200);
        this.bsa.mousePressed(()=>{
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

        this.mp.html("6MP: ");
        this.mp.position(width/4,height/4);
        this.mpRadio.position(width/4,height/2);
        this.enter.position(width/2,height*3/4);
        var mpVal = this.mpRadio.value();
        if(mpVal === "Not Taken"){
            this.mp2.show();
            this.mp2.position(width/4, height*640/1200);
        }
        else{
            this.mp2.hide();
        }


        this.meth.html("Methotroxate ");
        this.meth.position(width*3/4,height/4);
        this.methRadio.position(width*3/4,height/2);
        var methVal = this.methRadio.value();
        if(methVal === "Not Taken"){
            this.mp3.show();
            this.mp3.position(width*3/4, height*640/1200);
        }
        else{
            this.mp3.hide();
        }
        if(mp === "Prescribed"){
            this.mp.show();
            this.mpRadio.show();
           
        }
        else{
            this.mp.hide();
            this.mpRadio.hide();
        }

        if(meth === "Prescribed"){
            this.meth.show();
            this.methRadio.show();
            
        }
        else{
            this.meth.hide();
            this.methRadio.hide();
        }
        this.enter.show();
        this.enter.mousePressed(()=>{
            database.ref("username: "+username+"/Day/Day"+dayIndex+"/tablets").update({
                MP: mpVal,
                methotroxate: methVal
            });
            this.meth.hide();
            this.methRadio.hide();
            this.mp.hide();
            this.mpRadio.hide();

        });
    }
    hide(){
        this.mp.hide();
        this.mpRadio.hide();
        this.mp2.hide();
        this.mp3.hide();
        this.meth.hide();
        this.methRadio.hide();
        this.enter.hide();
        this.bsa.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
    }

}