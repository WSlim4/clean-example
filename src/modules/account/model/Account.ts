import { v4 as uuidv4 } from "uuid";

class Account {

    id?: String;
    user_id: Number;
    amount: Number;
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
            this.created_at = new Date();
        }
    }
}

export { Account }