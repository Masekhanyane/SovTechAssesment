<!-- test cases -->
1. Navigate to https://www.sovtech.co.za/contact-us/
2. Fill  in the form
3. Tick the agree(checkbox)
4. Click on the submit button
5. Click on the facebook icon and open a blank tab

<!--how to run -->
1. download the zip file
2. open in any code editor (vs code)
3. install node packages
4. open the terminal (cmd or vs code terminal or powershell)
5. type "npm index.js"
6. wait for the browser(firefox or chrome) to load

<!--optional -->
please look through the other files.
https://docs.skuid.com/v12.1.1/v2/en/skuid/testing/example-node/


<!-- error and issues -->
C:\SeleniumAutomations\SeleniumExample\index.js:19
        .sendKeys("Mase Moeketsi", key.RETURN);
                                       ^

TypeError: Cannot read properties of undefined (reading 'RETURN')
    at example (C:\SeleniumAutomations\SeleniumExample\index.js:19:33)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)

DevTools listening on ws://127.0.0.1:58684/devtools/browser/dc555d0b-41bc-41d9-a456-fe569ac6e95a

DevTools listening on ws://127.0.0.1:58685/devtools/browser/aecc5405-c0c2-40e7-9e48-96f1e7708cbe
[20148:10820:0612/185317.423:ERROR:device_event_log_impl.cc(214)] [18:53:17.423] USB: usb_device_handle_win.cc:1048 Failed to read descriptor from node connection: A device attached to the system is not functioning. (0x1F)
[20148:10820:0612/185317.428:ERROR:usb_descriptors.cc(141)] Failed to read length for configuration 1.
[20148:10820:0612/185317.430:ERROR:usb_descriptors.cc(100)] Failed to read all configuration descriptors. Expected 2, got 1.    
[20148:10820:0612/185317.451:ERROR:device_event_log_impl.cc(214)] [18:53:17.451] USB: usb_device_win.cc:96 Failed to read descriptors from \\?\usb#vid_03f0&pid_521d#5&aba8a6f&0&11#{a5dcbf10-6530-11d2-901f-00c04fb951ed}.
[20148:10820:0612/185317.534:ERROR:device_event_log_impl.cc(214)] [18:53:17.534] USB: usb_device_handle_win.cc:1048 Failed to read descriptor from node connection: A device attached to the system is not functioning. (0x1F)
[20148:10820:0612/185317.556:ERROR:device_event_log_impl.cc(214)] [18:53:17.556] USB: usb_device_handle_win.cc:1048 Failed to read descriptor from node connection: A device attached to the system is not functioning. (0x1F)
[20148:10820:0612/185317.560:ERROR:device_event_log_impl.cc(214)] [18:53:17.560] USB: usb_device_handle_win.cc:1048 Failed to read descriptor from node connection: A device attached to the system is not functioning. (0x1F)
C:\SeleniumAutomations\SeleniumExample\node_modules\selenium-webdriver\lib\error.js:522
    let err = new ctor(data.message)
              ^

WebDriverError: unknown error: cannot determine loading status
from disconnected: received Inspector.detached event
  (Session info: chrome=102.0.5005.63)
    at Object.throwDecodedError (C:\SeleniumAutomations\SeleniumExample\node_modules\selenium-webdriver\lib\error.js:522:15)    
    at parseHttpResponse (C:\SeleniumAutomations\SeleniumExample\node_modules\selenium-webdriver\lib\http.js:549:13)
    at Executor.execute (C:\SeleniumAutomations\SeleniumExample\node_modules\selenium-webdriver\lib\http.js:475:28)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Driver.execute (C:\SeleniumAutomations\SeleniumExample\node_modules\selenium-webdriver\lib\webdriver.js:735:17)    
    at async example (C:\SeleniumAutomations\SeleniumExample\index.js:15:2) {
  remoteStacktrace: 'Backtrace:\n' +
    '\tOrdinal0 [0x0042D953+2414931]\n' +
    '\tOrdinal0 [0x003BF5E1+1963489]\n' +
    '\tOrdinal0 [0x002AC6B8+837304]\n' +
    '\tOrdinal0 [0x0029E45E+779358]\n' +
    '\tOrdinal0 [0x0029E04F+778319]\n' +
    '\tOrdinal0 [0x0029D646+775750]\n' +
    '\tOrdinal0 [0x0029C565+771429]\n' +
    '\tOrdinal0 [0x0029CB68+772968]\n' +
    '\tOrdinal0 [0x002A8B10+822032]\n' +
    '\tOrdinal0 [0x0029DE5D+777821]\n' +
    '\tOrdinal0 [0x0029EA3B+780859]\n' +
    '\tOrdinal0 [0x0029E06A+778346]\n' +
    '\tOrdinal0 [0x0029D646+775750]\n' +
    '\tOrdinal0 [0x0029C565+771429]\n' +
    '\tOrdinal0 [0x0029CA3D+772669]\n' +
    '\tOrdinal0 [0x002ADEA4+843428]\n' +
    '\tOrdinal0 [0x00304EBD+1199805]\n' +
    '\tOrdinal0 [0x002F449C+1131676]\n' +
    '\tOrdinal0 [0x00304812+1198098]\n' +
    '\tOrdinal0 [0x002F42B6+1131190]\n' +
    '\tOrdinal0 [0x002CE860+976992]\n' +
    '\tOrdinal0 [0x002CF756+980822]\n' +
    '\tGetHandleVerifier [0x0069CC62+2510274]\n' +
    '\tGetHandleVerifier [0x0068F760+2455744]\n' +
    '\tGetHandleVerifier [0x004BEABA+551962]\n' +
    '\tGetHandleVerifier [0x004BD916+547446]\n' +
    '\tOrdinal0 [0x003C5F3B+1990459]\n' +
    '\tOrdinal0 [0x003CA898+2009240]\n' +
    '\tOrdinal0 [0x003CA985+2009477]\n' +
    '\tOrdinal0 [0x003D3AD1+2046673]\n' +
    '\tBaseThreadInitThunk [0x75C0FA29+25]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77D57A7E+286]\n' +
    '\tRtlGetAppContainerNamedObjectPath [0x77D57A4E+238]\n'
}