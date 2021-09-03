var os = require( 'os' );

const getIP = () => {
  var networkInterfaces = Object.values(os.networkInterfaces())
      .reduce((r,a) => {
          r = r.concat(a)
          return r;
      }, [])
      .filter(({family, address}) => {
          return family.toLowerCase().indexOf('v4') >= 0 &&
              address !== '127.0.0.1'
      })
      .map(({address}) => address);
  var ipAddresses = networkInterfaces.join(', ')
  console.log(ipAddresses);
  return ipAddresses
}

module.exports = {
  getIP
}