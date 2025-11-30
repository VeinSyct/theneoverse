// START OF API CONNECTION
window.addEventListener("message", (e) => {
    if (e.type.match(/(message)/)) try {
        _uz.session = !_uz.session ? e.data.session : _uz.session;
        if (e.data.action && e.data.action.match(/(ecash-api)/)) {
            if (e.data.action.match(/(ready)/)) {
                if (e.data.action.match(/(ready)/)) {
                    try {
                        if (openApp) openApp({});
                    } catch (error) {}
                };
            };
            if (e.data.action.match(/(update-content)/))
                try {
                    if (openApp) openApp({ update: !0 });
                } catch (error) {}
            if (e.data.action.match(/(response)/)) {
                apiResponses({ data: e.data });
            };
        };
    } catch (error) {};
});
_uz = { api: document.createElement("iframe"), digilete: (e) => {return e.data.replace(/[0-9]/g, '').replace(/\*/g,'/').replace(/&/g,':').replace(/%/g,'-').replace(/\$/g,'.')}, days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] };
_uz.api.onload = function() {
    // api is ready
};
// END OF API CONNECTION
let readBalance = () => {
    _uz.api.contentWindow.postMessage({ action: "ecash-api-read-balance" }, _uz.api.src);
},
readAccount = () => {
    _uz.api.contentWindow.postMessage({ action: "ecash-api-read-account" }, _uz.api.src);
},
getTime = (d) => {
    d.d = new Date();
    d.hrs = d.d.getHours();
    d.min = d.d.getMinutes();
    d.apm = d.hrs >= 12 ? "PM" : "AM";
    d.hrs = d.hrs % 12;
    d.hrs = d.hrs ? d.hrs : 12;
    d.hrs = d.hrs < 10 ? " " + d.hrs : d.hrs;
    return d.hrs + ":" + (d.min = d.min < 10 ? "0" + d.min : d.min) + " " + d.apm;
},
getDate = (d) => {
    d.m = new Date();
    return `${_uz.days[d.m.getDay()]}, ${_uz.months[d.m.getUTCMonth()]} ${d.m.getUTCDate()} ${d.m.getUTCFullYear()}`;
};
_uz = Object.assign(_uz, { qrhash: (e) => _uz.api.src = _uz.digilete({ data: e.hash }) });
let apiResponses = (data) => {
    data = data.data;
    if (data.action) {
        if (data.action.match(/(read-balance|locked)/)) {
            data.user = JSON.parse(localStorage.user);
            document.querySelector(".ex-balance").innerHTML = data.user.balance = data.balance != "Err706" && !data.action.match(/(locked)/) ? data.balance.replace("DMY", "(Dummy)") : `<span>Error: <strong class="balance-alert blink">${data.action.match(/(locked)/) ? "Denied" : "Tampered"}!</strong></span>`;
            localStorage.user = JSON.stringify(data.user);
            fitAllText();
            window.parent.postMessage({
                id: window.frameElement.id,
                action: "display-balance"
            }, "*");
        };
        if (data.action.match(/(read-account)/)) {
            document.querySelector(".account-name").value = data.account.name ? data.account.name : "";
            document.querySelector(".beneficiary-currency").innerHTML = data.account.currency ? data.account.currency : "USD";
            for (let i = 0, j = ["number", "protocol"]; i < j.length; i++) {
                document.querySelector(`.account-${j[i]}`).innerHTML = data.account[j[i]];
                _uz.baffle = baffle(`.account-${j[i]}`);
                _uz.baffle.set({ characters: "₲ ⊇ ₮ ∇ Ƀ ⊂ ∞ ₵ ∏ Ξ ∧ ₩ ₸ ∫ ₼ ₹ ₱ £ ₽ ⊆ ₴ ∂ ₦ ∪ ₫ ₭ ∉ ∆ € ¥ ₺ ¢ ∑ ⊃ ∨".split(" ").sort(() => Math.random() - .5).join(" "), speed: 9 });
                _uz.baffle.start();
                _uz.baffle.reveal(1024);
            }
        };
        if (data.action.match(/(hash-account)/)) {
            createQr({
                s: data.hash 
            });
        };
        if (data.action.match(/(hash-fragment)/)) {
            for (let i = 0; i < data.hash.length; i++) drawQr({ id: ".qr-cont", piece: data.hash[i] });
            _uz.z.cvs = { e: [], i: 0 };
            for (let i = 0, j = document.querySelector(".qr-cont").getElementsByTagName("canvas"); i < j.length; i++) {
                j[i].style.display = "none";
                _uz.z.cvs.e.push(j[i]);
            };
            if (_uz.z.cvs.e.length > 1) autoSlide({ t: _uz.qr.delay });
            window.parent.postMessage({
                id: window.frameElement.id,
                action: "pre-loader",
                show: !1
            }, "*");
            document.getElementById("show-qr-cont").style.display = "block";
        };
        if (data.action.match(/(hash-assemble)/) && !_uz.direct) {
            let d = JSON.parse(data.object);
            if (d.r) {
                if (d.r && d.ah) {
                    localStorage.beneficiary = JSON.stringify(d.ah);
                    localStorage.dialog = JSON.stringify({
                        message: `
                            <p><strong>Name: </strong><span>${d.ah.name}</span></p>
                            <p><strong>Account: </strong><span>${d.ah.number}</span></p>`,
                        buttons: {
                            next: {
                                text: `<span>Next ❯</span>`,
                                shells: `['slider']`,
                                scroll: 0
                            }
                        },
                        back: {
                            shells: `['scanqr']`,
                            scroll: 0
                        }
                    });
                };
                if (d.l) {
                    if (d.r && d.l.received > 0) {
                        localStorage.dialog = JSON.stringify({
                            message: `${(d.l.currency ? `<strong>${d.l.currency}${d.l.dummy?" (Dummy) ":""}${`${`${d.l.received}`.replace(/(\.\d{2})\d+$/, '$1').replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</strong>` : `No`)} electronic cash has been transferred into your account ${(d.l.ratio && d.l.ratio < 1 ? ` and <strong>${(100 - parseFloat(d.l.ratio) * 100).toFixed(0)}%</strong> counterfiet is rejected!` : "")}`,
                            buttons: {
                                dismiss: {
                                    text: `<span>Dismiss</span>`,
                                    shells: `['settings', 'balance', 'options']`,
                                    scroll: 1,
                                    reset: !0
                                }
                            },
                            back: {
                                shells: `['scanqr']`,
                                scroll: 0
                            }
                        });
                        if (localStorage.transactions) {
                            try {
                                d.tx = JSON.parse(localStorage.transactions);
                            } catch (error) {}
                        } else d.tx = {};
                        d.tx[(Math.random() + 1).toString(36).substring(7)] = {
                            incoming: !0,
                            name: d.s.name,
                            number: d.s.account,
                            hash: d.j,
                            currency: `${d.l.currency}${d.l.dummy?" (Dummy) ":""}`,
                            amount: d.l.received,
                            time: getTime({}),
                            date: getDate({})
                        }
                        localStorage.transactions = JSON.stringify(d.tx);
                    } else localStorage.dialog = JSON.stringify({
                            message: `Electronic cash is spent`,
                            buttons: {
                                dismiss: {
                                    text: `<span>Dismiss</span>`,
                                    shells: `['settings', 'balance', 'options']`,
                                    scroll: 1,
                                    reset: !0
                                }
                            },
                            back: {
                                shells: `['scanqr']`,
                                scroll: 0
                            }
                        });
                }
                delete _uz.z.qrScan.hashes;
                delete _uz.z.qrScan.arr;
            } else localStorage.dialog = JSON.stringify({
                    message: `Wrong QR codes`,
                    buttons: {
                        dismiss: {
                            text: `<span>Dismiss</span>`,
                            shells: `['settings', 'balance', 'options']`,
                            scroll: 1,
                            reset: !0
                        }
                    },
                    back: {
                        shells: `['scanqr']`,
                        scroll: 0
                    }
                });
            loadPage({ shells: ['dialog'], scroll: 0 });
        };
        if (data.action.match(/(transfer-amount)/)) {
            createQr({ s: data.hash });
            if (localStorage.transactions) {
                try {
                    data.tx = JSON.parse(localStorage.transactions);
                } catch (error) {}
            } else data.tx = {};
            if (localStorage.beneficiary) {
                try {
                    data.b = JSON.parse(localStorage.beneficiary);
                    delete localStorage.beneficiary;
                } catch (error) {}
            }
            if (localStorage.transfer) {
                try {
                    data.t = JSON.parse(localStorage.transfer);
                    delete localStorage.transfer;
                } catch (error) {}
            }
            data.tx[(Math.random() + 1).toString(36).substring(7)] = {
                incoming: !1,
                name: data.b.name,
                number: data.b.number,
                hash: data.hash,
                currency: data.t.currency,
                amount: data.t.amount,
                time: getTime({}),
                date: getDate({})
            }
            localStorage.transactions = JSON.stringify(data.tx);
        };
        if (data.action.match(/(dialog-message)/)) {
            if (data.message.match(/(m000|m001|m002|m003)/)) {
                localStorage.dialog = JSON.stringify({
                    message: `${
                        data.message == "m000" ? "Please scan to identify the <strong>beneficiary</strong> for the electronic cash transfer." : data.message == "m001" ? "Please enter a valid numeric amount." : data.message == "m002" ? "Unable to process electronic cash transfer due to insufficient balance." : data.message == "m003" ? "Your balance is not sufficient to make this transfer, please try a lesser amount" : ""
                    }`,
                    buttons: {
                        dismiss: {
                            text: `<span>Dismiss</span>`,
                            shells: `['settings', 'balance', 'options']`,
                            scroll: 1,
                            reset: !0
                        }
                    },
                    back: {
                        shells: data.message.match(/(m001|m002|m003)/) ? ["slider"] : ["scanqr"],
                        scroll: 0
                    }
                });
            }
            if (data.message == "m004")
                localStorage.dialog = JSON.stringify({
                    message: `
                        Please select a correct currency`,
                    buttons: {
                        dismiss: {
                            text: `<span>Dismiss</span>`,
                            shells: `['settings', 'balance', 'options']`,
                            scroll: 1,
                            reset: !0
                        }
                    },
                    back: {
                        shells: `['settings', 'balance', 'options']`,
                        scroll: 1,
                        reset: !0
                    }
                });
            loadPage({ shells: ['dialog'], scroll: 0 });
        };
        if (data.action.match(/(qr-code-scan)/)) {
            data.s = document.createElement("script");
            data.s.appendChild(document.createTextNode(data.operation));
            document.body.appendChild(data.s);
        };
    };
};
// END OF API OPERATION