(()=>{

type Gender = "M"|"F";
interface PersonProps{
    name:string;
    gender:Gender;
    birthdate: Date;
    
}

class Person{
    public birthdate: Date;
    public gender:Gender;
    public name:string;
    constructor({name,gender,birthdate}:PersonProps){
        this.name=name;
        this.gender=gender;
        this.birthdate=birthdate;
    }
    
    
    // class UserSettings extends User {
        //     constructor(
            //         public workingDirectory: string,
            //         public lastOpenFolder  : string,
            //         email                  : string,
            //         role                   : string,
    //         name                   : string,
    //         gender                 : Gender,
    //         birthdate              : Date
    //     ) {
    //         super(email, role, name, gender, birthdate );
    //     }
    // }
    
    
    // const userSettings = new UserSettings(
        //     '/usr/home',
        //     '/home',
        //     'fernando@google.com',
        //     'Admin',
        //     'Fernando',
        //     'M',
        //     new Date('1985-10-21')
        // );
        
        
        // public name:string;
        // public gender:Gender;
        // public birthdate: Date;
        
        // constructor(name:string,gender:Gender,birthdate:Date){
            //     this.name=name;
            //     this.gender=gender;
            //     this.birthdate=birthdate;
            // }
        }
        interface UserProps{
            lastAccess: Date;
            email: string;
            role: string;
            name:string;
            gender:Gender;
            birthdate: Date;
    
    }
    class User extends Person {
        
        public lastAccess: Date;
        public email:string;
        public role:string;

        constructor(
    {       lastAccess,
            email,
            role,
            name,
            gender,
            birthdate}:UserProps
        ) {
            super( {name, gender, birthdate} );
            this.lastAccess = new Date();
            this.email=email;
            this.role=role;
        }
    
        checkCredentials() {
            return true;
        }
    }
        
        
})();