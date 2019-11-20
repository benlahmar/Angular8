export class Personne{
    
    Name:string; 
    City:string;
    Country:string;
    state:boolean;
    constructor(data)
    {
        
        this.Name=data.Name;
        this.City=data.City;
         this.Country=data.Country;
        this.state=false;
        
        
    }
}