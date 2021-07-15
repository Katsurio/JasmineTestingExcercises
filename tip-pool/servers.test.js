describe("Servers test (with setup and tear-down)", () => {
  beforeEach(() => {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', () => {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not accept an empty string input on submitServerInfo()', () => {
    serverNameInput.value = '';
    submitServerInfo();
    
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update allServers object on submitServerInfo()', () => {
    serverNameInput.value = 'Larry';
    serverId = 3;
    allServers = {
      'server1': {
        'servername' : 'Gertrude'
      },
      'server2': {
        'servername' : 'Globo Jim'
      },
      'server3': {
        'servername' : 'Bruce Wayne'
      }
    }
    
    submitServerInfo();
    
    expect(Object.keys(allServers).length).toEqual(4);
    expect(allServers.server4.serverName).toEqual('Larry');
  });

  it('should update tbody on updateServerTable()', () => {
    submitServerInfo();
    updateServerTable();

    expect(serverTbody.querySelectorAll('tr').length).toEqual(1);
    expect(serverTbody.querySelectorAll('td').length).toEqual(3);
  })

  afterEach(function() {
    allServers = {};
    serverTbody.innerHTML = '';
    serverId = 0;
  });
});
