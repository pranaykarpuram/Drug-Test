class Database{
    constructor(){
        this.name = null;
        this.number = null;
        this.dob = null;
        this.mail = null;
        this.address = null;
        this.username = null;
        this.password = null;

        this.bsa = null;
        this.wbc = null;
        this.hgb = null;
        this.platelet = null;

        this.tablet1 = null;
        this.tablet2 = null;


        this.day = null;

    }

    updatePersonalInfo(){
        var username = "username: "+this.username; //Add "PERSONAL INFO" Sub data, Add "Prescriptions", Add Med info/Day No. Date/ tablets and Med Info/ Counts/ wbc, hmg,etc
        database.ref(username+"/personal info").set({
            name: this.name,
            PhNo: this.number,
            age: this.dob,
            address: this.address,
            Email: this.mail,
            username: this.username,
            password: this.password,


        });
        database.ref(username+"/Tablets").update({
            MP: this.tablet1,
            Methotroxate: this.tablet2,


        });
    }

    getUsername(){
        
        var usernameRef = database.ref("username: "+username+"/personal info/username")
        usernameRef.on("value",(data)=>{
        correctUsername = data.val();
        });

    }
    getPassword(){
        var usernameRef = database.ref("username: "+username+"/personal info/password")
        usernameRef.on("value",(data)=>{
        correctPassword = data.val();
        });  
    }
    getName(){
        var nameRef = database.ref("username: "+username+"/personal info/name")
        nameRef.on("value",(data)=>{
            names = data.val();
        });
    }
    getNumber(){
        var nameRef = database.ref("username: "+username+"/personal info/PhNo")
        nameRef.on("value",(data)=>{
            number = data.val();
        });
    }
    getAge(){
        var nameRef = database.ref("username: "+username+"/personal info/age")
        nameRef.on("value",(data)=>{
            age = data.val();
        });
    }
    getMp(){
        var ref = database.ref("username: "+username+"/Tablets/MP")
        ref.on("value",(data)=>{
            mp = data.val();
        })
    }
    getMeth(){
        var ref = database.ref("username: "+username+"/Tablets/Methotroxate")
        ref.on("value",(data)=>{
            meth = data.val();
        })
    }
    getCounts(){
        var ref = database.ref("username: "+username+"/Day/Day"+dayIndex+"/counts/wbc")
        ref.on("value",(data)=>{
            wbc = data.val();
        })
    }

    getAddress(){
        var nameRef = database.ref("username: "+username+"/personal info/address")
        nameRef.on("value",(data)=>{
            address = data.val();
        });
    }
    
}