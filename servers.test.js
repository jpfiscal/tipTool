describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should ignore an attempt to add a blank server name', function(){
    serverNameInput.value = '';
    submitServerInfo();
    expect(serverId).toEqual(0);
    expect(allServers.length).toEqual(undefined);
    expect(serverTbody.childElementCount).toEqual(0);
  });

  it('should Add a record to the serverTbody element', function(){
    serverNameInput.value = 'Josh';
    submitServerInfo();
    expect(serverTbody.childElementCount).toEqual(1);
  });

  afterEach(function() {
    serverNameInput.value = '';
    serverId = 0;
    allServers = {};
    serverTbody.deleteRow(-1);
  });
});
