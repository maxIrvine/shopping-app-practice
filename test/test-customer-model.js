const expect = require('chai').expect;
const Customer = require('../customer');



describe("Customers", () => {
    it("Should be able to save to the database", (done) => {
        let myCustomer= new Customer('me', 'me@me.com', '123 me street', 'm3m3m3');
        myCustomer
            .save()
            .then( (result) => {
                done();
            });
    });
    it('should be able to get a customer from the database', (done) => {
        Customer
            .get(1)
            .then((myCustomer) => {
                console.log(myCustomer.name);
                console.log(myCustomer.email);
                console.log(myCustomer.address);
                console.log(myCustomer.password);
                done();
            });
    });
    it('should save, provide an id, and then get via id', (done) => {
        let data = ['ronald mcdonald', 'r@suckAcock.com', '123 up yours', 'passme'];
        let c1 = new Customer(...data);
        c1.save()
          .then((result) => {
              let customer_id = result.customer_id;
              Customer.get(customer_id)
                      .then((c2) => {
                          expect(c2.name).to.equal(data[0]);
                          expect(c2.email).to.equal(data[1]);
                          expect(c2.address).to.equal(data[2]);
                          done();   
                      });
          });
    });
    it('should have a customer_id when we retreive from db', (done) => {
        let data = ['ronald mcdonald', 'r@suckAcock.com', '123 up yours', 'passme'];
        let c1 = new Customer(...data);
        c1.save()
          .then((result) => {
              let customer_id = result.customer_id;
              Customer.get(customer_id)
                      .then((c2) => {
                          expect(c2.customer_id).to.equal(customer_id);
                          done();   
                      })
                      .catch(console.log);
          });
    });
    it('should update a user and retain the new values', (done) => {
        let newName = 'oakley';
        let data = ['ronald mcdonald', 'r@suckAcock.com', '123 up yours', 'passme'];
        let c1 = new Customer(...data);
        c1.save()
          .then((resultFromSave1) => {
              c1.customer_id = resultFromSave1.customer_id;
              c1.name = newName;
              c1.save()
                .then((resultFromSave2) => {
                    let customer_id = resultFromSave1.customer_id;
                    Customer.get(customer_id)
                      .then((c2) => {
                        expect(c2.name).to.equal(newName);
                        done();   
                      })
                      .catch(console.log);
                });
          });
    });
});