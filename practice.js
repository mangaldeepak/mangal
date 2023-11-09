class car{
constructor(brand){
    this.carname=brand;}
present(brand) {
return 'i have a'+this.carname;
}
}
 
class model extends car{
    constructor(brand,mod){
super(brand);
this.model=mod;
    }
    show(){
        return this.present()+',it is a  '+this.model;
    }
}
const mycar=new  model("ford","mustang");
document.getElementById("demo").innerHTML=mycar.show();