try {
    const s = document.createElement("script");
    s.src = "assets/js/whatsapp/widget-plugin.js";
    s.type = "text/javascript";
    s.async = true;
    s.id = "df-script";
    const url = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap";
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
    var widgetOptions = null;
    setTimeout(function(){
      btn = widgetOptions = {
          variant: "WhatsAppBtnAndChatWidget",
          btnBackground: "#4dc247",
          linkid: '639544765588',
          phoneNumber:'639544765588',
          mb: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "12" : "12",
          ml: "12",
          mr: "12",
          borderRadius: "24",
          brandImgUrl: 'assets/images/neoverse_icon.webp',
          brandName: '#TheNeoVerse',
          brandSub: '3D Virtual Experiences',
          onscreenMsg: 'Hello,<br>We integrate innovative design into immersive virtual tours & interactive experiences.',
          btnCTA: 'Chat us',
          brandColor: "#0A5F54",
          prefilledMsg: 'I have a 3d development project',
          widgetBtnCTA: 'Chat us',
          position: "Bottom-Right",
          openWidgetByDefault: "true",
          openWidgetSessionWindow: "7-24_HOUR",
          onscreenImg: "",
          widgetOnMobile: "true",
          urlPersonalization: false,
          personalizedUrls: []
      };
      s.onload = function () {
          if (widgetOptions != null) {
              window.CreateWhatsAppButtonAndWidget(widgetOptions);
          }
          history.pushState = ((f) =>
              function pushState() {
                  var ret = f.apply(this, arguments);
                  window.dispatchEvent(new Event("pushstate"));
                  window.dispatchEvent(new Event("locationchange"));
                  return ret;
              })(history.pushState);
          history.replaceState = ((f) =>
              function replaceState() {
                  var ret = f.apply(this, arguments);
                  window.dispatchEvent(new Event("replacestate"));
                  window.dispatchEvent(new Event("locationchange"));
                  return ret;
              })(history.replaceState);
          window.addEventListener("popstate", () => {
              window.dispatchEvent(new Event("locationchange"));
          });
          window.addEventListener("locationchange", () => {
              if (widgetOptions != null) {
                  window.CreateWhatsAppButtonAndWidget({ ...widgetOptions });
              }
          });
      };
      document.body.appendChild(s);
    },1200)
} catch (err) {}
