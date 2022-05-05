 class ProjectStaffbase{

     user(name, owes = [], owed=[], bal){
      this.name = name;
      this.owned_by = owes;
      this.money_given = owed;
      this.bal = bal;
    }

    borrow_money(lender, amount){
         lender.bal +=amount;
         this.bal -= amount;

         if(!lender.money_given(this.name) && !this.owned_by(lender.name)){
             lender.owned_by[this.name] = bal;
         }
         this.checkExistingRecord(lender)
    }

   
    checkExistingRecord(lender){
         if(lender.owned_by(this.name) === 0){
             delete this.owned_by(lender.name)
         }

         if(lender.money_given(this.name)===0){
             delete this.money_given(this.name)
         }
    }

    get(url) {
        if (url === "/users") {
        }
    }

    post(url, payload) {
        if (url === "/add") {
            this.users.push(payload)
        }

    }
}
 //  Var lol = new projextstaf00
 Lol.post(“/add”, jsonobjext)
