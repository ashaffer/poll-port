poll-port
=========


```javascript
pollPort(22, 'ssh.server.com', 20000, function(err) {
 if(err) throw err;
 // Connect
 fs.createReadStream('script.sh')
  .pipe(sshStream({
    host: 'ssh.server.com'
    user: 'task'
  })
  .pipe(consoleStream());
```
