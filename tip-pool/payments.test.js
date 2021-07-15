describe("Payments test (with setup and take down)", () => {
    beforeEach(() => {
        billAmtInput.value = 300;
        tipAmtInput.value = 60;

        allPayments = {
            'payment1' : {
                billAmt: 100,
                tipAmt: 10,
                tipPercent: 10
            },
            'payment2' : {
                billAmt: 200,
                tipAmt: 20,
                tipPercent: 10
            }
        }
        paymentId = 2;

        let currentPayment = createCurPayment();
    })

    it('should add a curPayment object to allPayments, update html, and reset input values on submitPaymentInfo()', () => {
        submitPaymentInfo();

        expect(paymentTbody.querySelectorAll('tr').length).toEqual(1);
        expect(summaryTds.length).toEqual(3);
        expect(paymentId).toEqual(3);
        expect(Object.keys(allPayments).length).toEqual(3);
    })

    it('should create current payment from inputs on createCurPayment()', () => {
        let currentPayment = createCurPayment();

        expect(currentPayment.billAmt).toEqual('300');
        expect(currentPayment.tipAmt).toEqual('60');
        expect(currentPayment.tipPercent).toEqual(20);
    })

    it('should append current payment w/ID of payment3 to payment table on appendPaymentTable()', () => {
        let currentPayment = createCurPayment();
        paymentId = 3;
        appendPaymentTable(currentPayment);

        expect(paymentTbody.querySelectorAll('tr').length).toEqual(1);
        expect(paymentTbody.querySelector('tr').id).toEqual('payment3'); // returns the first element that matches
        expect(summaryTds.length).toEqual(3);
    })

    it('should create table row and append with calculated sums on updateSummary()', () => {
        updateSummary();

        expect(summaryTds.length).toEqual(3);
        expect(summaryTds[0].innerText).toEqual('$300');
        expect(summaryTds[1].innerText).toEqual('$30');
        expect(summaryTds[2].innerText).toEqual('10%');
        expect(Object.keys(allPayments).length).toEqual(2);
    })

    afterEach(() => {
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
    })
})