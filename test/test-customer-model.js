const expect = require('chai').expect;
const Customer = require('../customer');



describe("Customers", () => {
    it("Should be able to save to the database", (done) => {
        let myCustomer= new Customer();
        myCustomer
            .save()
            .then(done);
    });
});