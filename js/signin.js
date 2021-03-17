class Signin{
    constructor(){
        this.ph = createElement("h2");
        this.phI = createInput("");
        this.firstName = createElement("h2");
        this.nameI = createInput("");
        this.lastName = createElement("h2");
        this.lastnameI = createInput("");
        this.dob = createElement("h2");
        this.dobI = createInput("");
        this.enter = createButton("Enter");
        this.username = createElement("h2");
        this.usernameI = createInput("");
        this.password = createElement("h2");
        this.passwordI = createInput("");
        //this.mail = createElement("h2");
        //this.mailI = createInput("");
        this.address = createElement("h2");
        this.addressI = createInput("");
        this.prescriptions1 = createCheckbox("Tablet1");
        this.prescriptions2 = createCheckbox("Tablet2");
        this.prescriptions3 = createCheckbox("Tablet3");
        this.prescriptions4 = createCheckbox("Tablet4");
        this.prescriptions5 = createCheckbox("Tablet5");
    }
    display(){
        this.ph.show();
        this.phI.show();
        this.firstName.show();
        this.nameI.show();
        this.lastName.show();
        this.lastnameI.show();
        this.dob.show();
        this.dobI.show();
        this.enter.show();
        this.username.show();
        this.usernameI.show();
        this.password.show();
        this.passwordI.show();
        //this.mail.show();
        //this.mailI.show();
        this.address.show();
        this.addressI.show();
        this.prescriptions1.show();

        this.ph.html("Enter Phone No. :");
        this.ph.position(width/4,height*400/1250);
        this.phI.position(width/4,height*450/1250);
        data.number = this.phI.value();

        this.firstName.html("Enter First Name: ");
        this.firstName.position(width/4, height*500/1250);
        this.nameI.position(width/4, height*550/1250);
        var nameI = this.nameI.value();

        this.lastName.html("Enter Last Name: ");
        this.lastName.position(width/4, height*600/1250);
        this.lastnameI.position(width/4, height*650/1250);
        var nameII = this.lastnameI.value();
        data.name = nameI+" "+nameII;      

        this.dob.html("Enter Age");
        this.dob.position(width/4, height*700/1250);
        this.dobI.position(width/4, height*750/1250);
        data.dob = this.dobI.value();

        this.username.html("Enter username: ");
        this.username.position(width/4, height*800/1250);
        this.usernameI.position(width/4, height*850/1250);
        data.username = this.usernameI.value();

        this.password.html("Enter password: ");
        this.password.position(width/4, height*900/1250);
        this.passwordI.position(width/4, height*950/1250);
        data.password = this.passwordI.value();

        /*this.mail.html("Enter e-mail ID");
        this.mail.position(width/4,height*1000/1250);
        this.mailI.position(width/4, height*1050/1250);
        data.mail = this.mailI.value();*/

        this.address.html("Enter House address: ");
        this.address.position(width/4,height*1100/1250);
        this.addressI.position(width/4, height*1150/1250);
        data.address = this.addressI.value();
        
        this.prescriptions1.show();
        this.prescriptions1.position(width*3/4, height*400/1250);
        if(this.prescriptions1.checked()){
            data.tablet1 = "Prescribed";
        }
        else{
            data.tablet1 = null;
        }

        this.prescriptions2.show();
        this.prescriptions2.position(width*3/4, height*500/1250);
        if(this.prescriptions2.checked()){
            data.tablet2 = "Prescribed";
        }
        else{
            data.tablet2 = null;
        }

        

        this.enter.position(width/2, height*1200/1250);
        this.enter.mousePressed(()=>{
            state = "login";
            data.updatePersonalInfo();
            //data.updatePrescriptions(); uncomment after "Prescriptions"


        });


        
    }
    hide(){
        this.ph.hide();
        this.phI.hide();
        this.firstName.hide();
        this.nameI.hide();
        this.lastName.hide();
        this.lastnameI.hide();
        this.dob.hide();
        this.dobI.hide();
        this.enter.hide();
        this.username.hide();
        this.usernameI.hide();
        this.password.hide();
        this.passwordI.hide();
        //this.mail.hide();
        //this.mailI.hide();
        this.address.hide();
        this.addressI.hide();
        this.prescriptions1.hide();
        this.prescriptions2.hide();
        this.prescriptions3.hide();
        this.prescriptions4.hide();
        this.prescriptions5.hide();
    }
}