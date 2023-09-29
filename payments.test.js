describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
        // initialization logic;
        billAmtInput.value = 105;
        tipAmtInput.value = 13;
        allPayments = {payment1: {billAmt: '100', tipAmt: '15', tipPercent: 15}, payment2: {billAmt: '65', tipAmt: '15', tipPercent: 23}};
      });

      //for submitPaymentInfo()
      it('should increase paymentId by 1 and grow allPayments by 1 record', function(){
        // let paymentId = 2;
        submitPaymentInfo();
        expect(paymentId).toEqual(2);
        expect(Object.keys(allPayments).length).toEqual(2);
      });

      //for createCurPayment()
      it('should create curPayment object based on input values', function(){
        expect(createCurPayment()).toEqual({billAmt: '105', tipAmt: '13', tipPercent: 12});
      });

      //for appendPaymentTable()
      it('should expand the payment table by one row if input values are valid', function(){
        let curPayment = {billAmt: 105, tipAmt: 13, TipPercent: 12};
        appendPaymentTable(curPayment);
        expect(paymentTbody.childElementCount).toEqual(1);
      });

      //for updateSummary()
      it('should update the summary table with new bill and tip values', function () {
        updateSummary();
        expect(summaryTds[0].innerHTML).toEqual('$165');
        expect(summaryTds[1].innerHTML).toEqual('$30');
        expect(summaryTds[2].innerHTML).toEqual('19%');
      });
      
      afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
      });
});