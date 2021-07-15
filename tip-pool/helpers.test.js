describe("Helpers test (with setup and take down)", () => {
    beforeEach(() => {
        paymentTbody = document.querySelector('#paymentTable tbody');
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
    })

    it('should give the sums of bill, tips, and tip percentage amounts on sumPaymentTotal()', () => {
        let billTotalSum = sumPaymentTotal('billAmt');
        let tipTotalSum = sumPaymentTotal('tipAmt');
        let tipPercentageSum = sumPaymentTotal('tipPercent');


        expect(billTotalSum).toEqual(300);
        expect(tipTotalSum).toEqual(30);
        expect(tipPercentageSum).toEqual(20);
    })

    it('should calculate tip percentage on calculateTipPercentage()', () => {
        let tipPercentage = calculateTipPercent(allPayments.payment2.billAmt, allPayments.payment2.tipAmt);

        expect(tipPercentage).toEqual(10);
    })

    it('should append td to tr on appendTd()', () => {
        let newTr = document.createElement('tr');
        paymentTbody.append(newTr);

        appendTd(newTr, '$' + allPayments.payment1.billAmt);
        appendTd(newTr, '$' + allPayments.payment1.tipAmt);
        appendTd(newTr, allPayments.payment1.tipPercent + '%');

        expect(paymentTbody.querySelectorAll('tr').length).toEqual(1);
        expect(paymentTbody.querySelectorAll('td').length).toEqual(3);
    })

    it('should append delete btn td to tr and delete on click event', () => {
        let newTr = document.createElement('tr');
        serverTbody.append(newTr);

        appendDeleteBtn(newTr);

        expect(serverTbody.querySelectorAll('tr').length).toEqual(1);
        expect(serverTbody.querySelectorAll('td').length).toEqual(1);
        expect(serverTbody.querySelectorAll('td')[0].innerText).toEqual("X");
    })

    afterEach(() => {
        allPayments = {};
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
    })
})