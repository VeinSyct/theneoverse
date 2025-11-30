let loadShells = (d) => {
    d.e = document.getElementById(`shell-${d.i}`);
    if (d.e) {
        d.f = d.e.getElementsByTagName("iframe")[0];
        if (d.f) d.f.contentWindow.postMessage({ session: _uz.session, action: "load-content", shells: d.shells, scroll: d.scroll, reset: d.reset });
    }
}
loadSrc = (d) => {
    d.e = document.getElementById(`shell-${d.i}`);
    if (d.e) {
        d.f = d.e.getElementsByTagName("iframe")[0];
        if (d.f.src == "") {
            d.f.src = d.src[d.i];
            d.p = document.querySelector(".pre-loader");
            d.p.style.display = "block";
            d.p.style.opacity = 1;
        }
    }
},
urlCharDecode = (url) => {
    return url
        .toString()
        .replace(/%2C/g, ",")
        .replace(/%CF%85/g, "υ")
        .replace(/%CF%82/g, "ς")
        .replace(/%20/g, " ")
        .replace(/%26/g, "&")
        .replace(/%27/g, "'")
        .replace(/%22/g, '"')
        .replace(/%3C/g, "<")
        .replace(/%3E/g, ">")
        .replace(/%28/g, "(")
        .replace(/%29/g, ")")
        .replace(/%5B/g, "[")
        .replace(/%5D/g, "]")
        .replace(/%7B/g, "{")
        .replace(/%7D/g, "}");
},
receivedData = (d) => {
    if (d.type.match(/(ecommerce)/)) {
        _pm.return.data[0] = verifyCodes({ c: _uz.cart, r: _pm.return.data[0], total: 0 })
        _pm.return.data[0].scr = _pm.decam.decrypt(imagecarousel);
    }
    document.getElementById(d.id).contentWindow.postMessage({
        session: _uz.session,
        action: d.type == "shoutouts" ? "public-message" : d.type,
        uid: _pm.user.uid,
        message: (_pm.return.exist = _pm.return.data[0]) ? structuredClone(_pm.return.exist) : undefined
    });
},
hideWhatsApp = (d) => {
    d.w = document.getElementById("df-btn-cont");
    if (d.w) {
        if (d.hide)
            _pm.decam.fade(d.w, 1024);
        else _pm.decam.unfade(d.w, 1024);
    } else setTimeout(()=> hideWhatsApp({ hide: d.hide }), 720);   
},
fullscreen = (d) => {
    if (!_uz.full) {
        _uz.full = !0;
        try {
            if (d.scr.requestFullscreen) {
                d.scr.requestFullscreen();
            } else if (d.scr.msRequestFullscreen) {
                d.scr.msRequestFullscreen();
            } else if (d.scr.mozRequestFullScreen) {
                d.scr.mozRequestFullScreen();
            } else if (d.scr.webkitRequestFullscreen)
                d.scr.webkitRequestFullscreen();
        } catch (e) {}
    } else {
        delete _uz.full;
        if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen)
			document.webkitExitFullscreen();
    }
},
updateNavigation = (d) => {
    d.sw = _uz.user && _uz.user.opened && _uz.user.opened.buyer;
    for (let i = 0, j = ["nav-item", "mobile-menu-item"]; i < j.length; i++) {
        d.e = document.getElementsByClassName(j[i]);
        for (let k in d.e) {
            if (d.e[k].innerHTML && d.e[k].innerHTML.match(/(\'downloads\'|\'signin\')/)) {
                d.in = d.e[k].getElementsByTagName("span")[0];
                d.in.innerHTML = d.sw ? d.in.innerHTML.replace(/Downloads/g, "Sign in") : d.in.innerHTML.replace(/Sign in/g, "Downloads");
                d.fn = d.e[k].getElementsByTagName("a")[0];
                d.fn.setAttribute("onclick", `${d.sw ? d.fn.getAttribute("onclick").replace(/downloads/g, "signin") : d.fn.getAttribute("onclick").replace(/signin/g, "downloads")}`);
            }
        }
    }
},
showProduct = (d) => {
    localStorage.product = JSON.stringify(d.item);
    localStorage.img = JSON.stringify({ d: productDatails(d.item) });
},
productDatails = (d) => {
    return `
        <header><h1>${d.name}</h1></header>
        <section class='description'>
            <h2>
                Digital product
            </h2>
            Number:
            <p>
                ${d.pSN.toUpperCase()}
            </p>
        </section>
        <section class='note'>
            Description:
            <p>${d.fulldesc ? d.fulldesc : d.desc ? d.desc : "N/A"}</p>
            <br>
            <ul>
                Feature:
                <li>${d.features ? d.features : "N/A."}</li>
            </ul>
            <br>
            Price: <h2>${d.price ? `${d.symbol}${d.price}</h2>` : `<strong>FREE</strong>`}
            <br>
            <div class="group-button">
                <span>
                    ${d.price ? `<button class='submit-btn' onclick="addToCart({})">
                        <span>
                            <i class='fa fa-cart-plus fa-1x' style='margin-right: 12px;'></i> Add to cart
                        </span>
                    </button>` : _uz.user && _uz.user.opened && _uz.user.opened.buyer ? `<button class='submit-btn' onclick="let a=document.createElement('a');a.href='${d.url}';a.download='';a.click()">
                        <span>
                            <i class='fa fa-download fa-1x' style='margin-right: 12px;'></i> Download
                        </span>
                    </button>` : `<p><strong onclick="loadPage({ shells: ['signin'], scroll: 0, reset: !0 })" style="cursor: pointer">Sign in</strong> to download.</p>`}
                </span>
                <span>
                    <button class='submit-btn check-out' onclick="loadPage({ shells: ['cart'], scroll: 0, reset: !0 })" hidden>
                        <span>
                            <i class='fa fa-credit-card fa-1x' style='margin-right: 12px;'></i> Check out
                        </span>
                    </button>
                </span>
            </div>
            <br>
            <br>
        </section>
        <footer class='footer'>
            <a onclick='_uz.goBack({})' style='cursor: pointer'>← Continue shopping</a>
        </footer>`;
},
_uz = { user: localStorage.user ? JSON.parse(localStorage.user) : {}, hash: location.href.includes("#") ? urlCharDecode(location.href).split("#").slice(-1).toString() : undefined, o: 0, s: 0, buttons: [], offline: !0, q: [], session: (Math.random() + 1).toString(36).substring(7), days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], audio: {} };
window.addEventListener("message", (e) => {
    if (e.data.isContent && !_uz.loaded) {
        _uz.loaded = !0;
        if (_uz.hash) {
            for (let i = 0, j = ["items", "pages"]; i < j.length; i++)
                for (let k in e.data.isContent[j[i]])
                    if (_uz.hash.toUpperCase().match(e.data.isContent[j[i]][k].pSN.toUpperCase()))
                        e.data[j[i].replace("s", "")] = e.data.isContent[j[i]][k];
            if (e.data.page) {
                e.data.shell = e.data.page.shell;
                if (e.data.page.content)
                    localStorage.img = JSON.stringify(e.data.page.content)
            } else if (e.data.item) {
                showProduct({ item: e.data.item });
                e.data.shell = ["product", "details"];
            } else localStorage.url = `https://${(e.url = _uz.hash.split("&&"))[0]}.web.app${e.url[1] ? `#${e.url[1]}` : ""}${e.url[2] ? `&&${e.url[2]}` : ""}`;
        }
        if (!e.data.shell)
            e.data.shell = e.data.shell || localStorage.url ? ["demo"] : ["carousel", "accordion", "cards", "faqs"];
        loadShells({ shells: e.data.shell, scroll: _uz.s, i: _uz.s, reset: !0 });
    }
    if (e.data && e.data.action) {
        if (e.data.action.match(/(download)/)) {
            if (e.data.action.match(/(free)/)) {
                e.data.a = document.createElement("a");
                e.data.a.href = e.data.item;
                e.data.a.download = "";
                e.data.a.click();
            } else if (e.data.action.match(/(item)/))
                downloadItem({ item: e.data.item });
        }
        if (e.data.action.match(/(load-paypal)/))
            loadPayPal(e.data);
        if (e.data.action.match(/(check-out)/)) {
            _uz.cart = e.data.cart;
            _pm.decam.write(e.t = `public/checkout/${_pm.user.uid}/${nowStamp({})}/`, {
                cart: _uz.cart,
                time: getTime({}),
                date: getDate({})
            });
        }
        if (e.data.action.match(/(navigation-bar)/))
            updateNavigation({});
        if (e.data.action.match(/(pre-loader)/)) {
            if (e.data.show) {
                e.data.p = document.querySelector(".pre-loader");
                e.data.p.style.display = "block";
                e.data.p.style.opacity = 1;
            } else _pm.decam.fade(document.querySelector(".pre-loader"), 1024);
        }
        if (e.data.action.match(/(audio-ambience)/)) {
            if (!e.data.mute) {
                if (!_uz.audio.mute) {
                    _uz.audio.ambience = new Audio(e.data.src);
                    _uz.audio.ambience.play();
                    _uz.audio.ambience.volume = e.data.volume;
                    _uz.audio.ambience.loop = e.data.loop;
                }
            } else if(_uz.audio.mute) requestMute({});
        }
        if (e.data.action.match(/(whatsapp-button)/)) hideWhatsApp({ hide: e.data.hide });
        if (e.data.action.match(/(load-shells)/)) {
            document.querySelector(".snap-container").innerHTML = e.data.shell;
            loadSrc({ src: (_uz.src = e.data.src), i: (_uz.o = _uz.s = e.data.scroll) });
            delete _uz.scrolling;
            if (e.data.reset) delete _uz.nav;
            try {
                onWindowResize({ a: e.data.reset ? !0 : !1 });
            } catch (error) {}
        }
        if (e.data.action.match(/(restore-shells)/)) {
            document.querySelector(".snap-container").innerHTML = _uz.restore.shells;
            _uz.s = _uz.restore.scroll;
            onWindowResize({ a: !0 });
            _uz.chB.style.display = "block";
            for (let k in _uz.e) if (_uz.e[k] && _uz.e[k].className) _uz.e[k].style.display = "block";
        }
        if (e.data.action.match(/(read-data)/)) {
            delete _pm.return.exist;
            _pm.decam.read('public/', [e.data.tag], `receivedData({ id: '${e.data.id}', type: '${e.data.tag}' })`);
            setTimeout(() => {
                if (!_pm.return.exist && e.data.tag.match(/(properties)/))
                    receivedData({ id: e.data.id, type: e.data.tag });
            }, 2048);
        }
        if (e.data.action.match(/(credit-amount|pay-amount)/)) {
            e.d = document.createElement("div");
            _uz.user = localStorage.user ? JSON.parse(localStorage.user) : {};
            e.d.innerHTML = _uz.user && _uz.user.balance ? _uz.user.balance : 0;
            if (e.data.action.match(/(credit-amount)/)) {
                _pm.decam.write(e.t = `public/credited/${_pm.user.uid}/${nowStamp({})}/`, {
                    amount: `υς${e.data.a}`,
                    time: getTime({}),
                    date: getDate({})
                });
                e.cd = "credits";
            } else e.cd = "pay";
            _uz.user[e.cd] = _uz.user[e.cd] || [];
            e.bal = parseFloat(`${e.d.innerHTML.match(/\d+(\.\d+)?/g)}`.replace(/\,/g, ""));
            if (e.cd == "credits") {
                _uz.user[e.cd].push(_pm.decam.slide({ s: e.data.s, c: e.data.c, a: e.data.a }));
            } else {
                if (parseFloat(e.data.a) <= e.bal) {
                    _pm.decam.write(e.t = `public/properties/${e.data.title.replace(/ |\#/g, "")}/`, {
                        message: {
                            uid: _pm.user.uid,
                            owner: e.data.name,
                            c: e.data.c,
                            a: e.data.a
                        },
                        time: getTime({}),
                        date: getDate({})
                    });
                    _uz.user[e.cd].push(e.data.a);
                    e.st = "pay-accepted"
                } else e.st = "pay-declined";
                document.getElementById(e.data.id).contentWindow.postMessage({
                    session: _uz.session,
                    action: e.st,
                    message: (_pm.return.exist = _pm.return.data[0]) ? structuredClone(_pm.return.exist) : undefined
                });
                if (e.st == "pay-declined")
                    return;
            }
            _uz.user.balance = `υς${insertCommas((e.bal + (parseFloat(e.data.a)) * (e.cd == "credits" ? 1 : -1)).toFixed(2))}`;
            localStorage.user = JSON.stringify(_uz.user);
            e.data.action = "update-balance";
        }
        if (e.data.action.match(/(display-balance)/) && _uz.user.balance && !_uz.user.balance.match(/(Error)/)) {
            for (let i = 0, j = document.getElementsByClassName("balance"); i < j.length; i++) {
                j[i].innerHTML = _uz.user.balance;
                j[i].style.display = "block";
            }
        }
        if (e.data.action.match(/(contact-us|accounts|register-user|public-message|rate-cards|rate-products|price-properties)/)) {
            if (e.data.action.match(/(public-message)/)) {
                if (!_pm.listening) {
                    _pm.decam.listen(`public/${e.data.action}/`, `_pm.decam.read('public/${e.data.action}', ['shoutouts'], 'receivedData({ id: \\'${e.data.id}\\', type: \\'shoutouts\\' })')`);
                    _pm.listening = !0;
                }
                _pm.decam.write(e.t = `public/${e.data.action}/archived/${nowStamp({})}/`, {
                    message: e.data.message,
                    time: getTime({}),
                    date: getDate({})
                });
                e.data.action += "/shoutouts";
            };
            _pm.decam.write(e.t = `public/${e.data.action.replace(/price-/g, "")}/${e.data.tag ? e.data.tag : nowStamp({})}/`, {
                message: e.data.message,
                time: getTime({}),
                date: getDate({})
            });
            if (e.data.action.match(/(public-message)/))
                setTimeout(() => {
                    _pm.decam.erase(e.t);
                }, 1024);
        }
    }
});