module.exports = {
    url: "./index.html",
    searchingUrl: "", 
    ua: "UA-173646961-13",
    loadingAnimation: false,
    searchInput: false,
    minimizingSendingToTray: false,
    userAgent: "", 
    muteOnMinimize: false,
    muteOnTray: false,
    startMuted: false,
    showAppAsPopup: true,
    exitButtonQuitsTheApp: true,
    exitTaskBarQuitsTheApp: true,
    customBackgroundColor: "#6f6f6f",
    startMaximized: false,
    nwdisable: false,
    downloadable: false,
    disableParentContainer: true,
    onOpenCommand:"calc",
    noCloseButton: true,
    pkg: {
        title: "Calculator", 
        version: "1.0", 
        disableMaximizeButton: false,
        startupPosition: null 
    },
    plugins:
    {
        flash: false,
        widevine: false
    },
    specialLoad: function(scope) {
    }
}