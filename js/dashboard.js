class Dashboard{
    constructor(){
        this.name = createElement('h2');
        this.number = createElement('h2');
        this.dob = createElement('h2');
        this.address = createElement('h2');
        //this.mail = createElement('h2');
        this.title = createElement('h2');
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

        this.name.show();
        this.name.html("Name: "+names); //Change data.name to var name from getName();
        this.name.position(width/4, height/2);

        this.number.show();
        this.number.html("Phone No. :"+number);
        this.number.position(width/4, height*3/4);

        this.dob.show(); //Change to Age
        this.dob.html("Age: "+age);
        this.dob.position(width*3/4,height/2);

        this.address.show();
        this.address.html("Address: "+address);
        this.address.position(width*3/4, height*3/4);

        /*this.mail.show();
        this.mail.html("E-mail ID: "+data.mail);
        this.mail.position(width/2, height);*/

        this.title.show();
        this.title.html("Personal Info");
        this.title.position(width/2, 0);
    }
    hide(){
        this.title.hide();
        this.name.hide();
        this.number.hide();
        this.dob.hide();
        this.address.hide();
        this.bsa.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
        //this.mail.hide();
    }
}