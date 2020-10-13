require('dotenv').config()

var appConfig = {
    //  change the your AccountSid
    accountSid: process.env.TWILIO_ACC_NO,
    // change to your Flex Flow SID
    flexFlowSid: process.env.TWILIO_FLEX_FLOW,
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
        MessageCanvasTray: {
            showButton: true
        }
    },
}