import {UUID} from 'angular2-uuid';

export class User{
    public uuid:string;

    constructor(
        public username:string
    ){
        this.uuid=UUID.UUID();
    }

    public toString(){
        return "[uuid: "+this.uuid+", username: "+this.username+"]";
    }
}