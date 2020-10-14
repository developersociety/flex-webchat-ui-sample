var appConfig = {
    //  change the your AccountSid
    accountSid: "AC3a5825d2d1a2181f7bcbebd4dcfaf268",
    flexFlowSid: "FO73730f930be55236a7c5ee812a5a8a95",

    colorTheme: {
        overrides: brandedColors
    },
    componentProps: {
        MainContainer: {
            startEngagementOnInit: true,
            width: '100vw',
            height: '100vh',
            bottom: 0,
            right: 0,
        },
        MainHeader: {
            titleText: 'Triage your needs to find the right support',
            closeCallback: () => { return }
        },
        MessagingCanvas: {
            memberDisplayOptions: {
                yourDefaultName: 'You',
                theirDefaultName: 'Triage Bot',
                yourFriendlyNameOverride: false,
                theirFriendlyNameOverride: false
            },
            messageStyle: "Squared",

        },
        MessageCanvasTray: {
            showButton: true
        }
    },
}