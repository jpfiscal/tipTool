describe("helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
        // initialization logic;
        billAmt = 100;
        tipAmt = 15;
        allPayments = {payment1: {billAmt: '100', tipAmt: '15', TipPercent: 15}, payment2: {billAmt: '65', tipAmt: '15', TipPercent: 23}};
        allServers = {server1: {serverName: 'Josh'}, server2: {serverName: 'Jose'}};
      });

      it("calculateTipPercent should return accurate percentage values in whole numbers", function () {
        expect(calculateTipPercent(billAmt, tipAmt)).toEqual(15);
      });
      
      it("Should accurately sum each category", function(){
        expect(sumPaymentTotal('billAmt')).toEqual(165);
        expect(sumPaymentTotal('tipAmt')).toEqual(30);
      });

      it("Should append multiple Td to a single Tr", function(){
        let newTr = document.createElement('tr')
        appendTd(newTr,'$'+100);
        expect(newTr.childElementCount).toEqual(1);
        appendTd(newTr,'$'+15);
        expect(newTr.childElementCount).toEqual(2);
        appendTd(newTr,15+'%');
        expect(newTr.childElementCount).toEqual(3);
      });

      //test appendDeleteBtn
      it("Should have a third element for every tr in the serverTbody table", function(){
        updateServerTable();
        expect(serverTbody.children[0].childElementCount).toEqual(3);
      });

      afterEach(function() {
        billAmt = '';
        tipAmt = '';
        allPayments = {};
        allServers = {};
      });
});