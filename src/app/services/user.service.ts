import { Injectable } from '@angular/core';
import { User } from '../dto/user';
import { CounterService } from '../services/counter.service';

@Injectable()
export class UserService{
    private activeUsers:User[];
    private inactiveUsers:User[];

    constructor(private counterService:CounterService){
        this.activeUsers=[];
        this.inactiveUsers=[];
        this.activeUsers.push(new User('alberto'));
        this.activeUsers.push(new User('fabio'));
        this.activeUsers.push(new User('marcello'));
        this.activeUsers.push(new User('francesca'));
        this.activeUsers.push(new User('giuseppe'));
        this.activeUsers.push(new User('giovanni'));
    }

    public setInactive(index:number){
        var user=this.activeUsers.splice(index,1)[0];
        this.inactiveUsers.push(user);
        this.counterService.countDeactivation();
        console.log("SET to INACTIVE: "+user.toString());

    }

    public setActive(index:number){
        var user=this.inactiveUsers.splice(index,1)[0];
        this.activeUsers.push(user);
        this.counterService.countActivation();
        console.log("SET to ACTIVE: "+user.toString());
    }

    public getActiveUsers(){
        return this.activeUsers;
    }

    public getInactiveUsers(){
        return this.inactiveUsers;
    }

    public add(user:User){
        this.inactiveUsers.push(user);
    }
}