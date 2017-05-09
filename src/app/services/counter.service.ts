export class CounterService{
    private activation:number;
    private deactivation:number;
    constructor(){
        this.activation=0;
        this.deactivation=0;
    }

    public getActivation(){
        return this.activation;
    }

    public getDeactivation(){
        return this.deactivation;
    }

    public countActivation(){
        this.activation++;
    }

    public countDeactivation(){
        this.deactivation++;
    }

    public reset(){
        this.activation=0;
        this.deactivation=0;
    }
}