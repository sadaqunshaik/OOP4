class Accont{
    acc_Name;
    acc_Email;
    acc_Adds;
    constructor(name,email,addr){
         this.acc_Name=name
         this.acc_Email=email
         this.acc_Adds=addr
    }

}
class SA extends Accont{ 
    acct_Id
    acc_Bal=0
    min_Bal=500
    constructor(id,name,email,ammount,addr){
        super(name,email,addr)
        this.acct_Id=id
        this.acc_Bal=ammount
    }

}
let sa1=new SA(101,"Rahul","rl@pm.com",45000,"Wayanadu");
console.log(sa1)
