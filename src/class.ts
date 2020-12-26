export class User {
    public name: string;

    constructor(name: string, public age: number){
        this.name = name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getName = (): string => {
        return this.name;
    }
}

let user = new User("Rizki", 18);
// console.log(user);

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";

    constructor(phone: string, name: string, age: number){
        super(name, age);
        this.phone = phone;
    }

    getRole(): { read: boolean, write: boolean }{
        return {
            read: this.read,
            write: this.write
        }
    }

    set email(value: string){
        this._email = value;
    }

    get email(): string {
        return this.email;
    }
}

let admin = new Admin("082126", "Rizu", 18);
admin.getName();
admin.getRole();
admin.setName("Rizuki");
admin.email = "admin@gmail.com";