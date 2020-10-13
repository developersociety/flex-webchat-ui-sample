var brandColor1 = "#382766";
var brandColor2 = "#fabc7a";
var brandTextColor = "#ffffff";

var personalizedColors = {
   primaryPurple: brandColor1,
   whiteText: "#FFFFFF",
   entryPointBackground: "#3C425C",
   lighterBackground: "#ecedf1",
   primaryButtonBackground: "#1976d2",
   primaryButtonColor: "#FFFFFF",
   secondaryButtonBackground: "#6e7180",
   secondaryButtonColor: "#FFFFFF"
};

var brandMessageBubbleColors = function (bgColor, textColor) {
    return {
        Bubble: {
            background: bgColor,
            color: textColor
        },
        Avatar: {
            background: bgColor,
            color: textColor
        },
        Header: {
            color: textColor
        }
    }
};

var brandedColors = {
    Chat: {
        MessageListItem: {
            FromOthers: brandMessageBubbleColors(brandColor2, brandColor1),
            FromMe: brandMessageBubbleColors(brandColor1, brandTextColor),
        },
        MessageInput: {
            Button: {
                background: brandColor1,
                color: brandTextColor
            }
        },
        MessageCanvasTray: {
            Container: {
                background: personalizedColors.primaryPurple,
                color: personalizedColors.whiteText
            }
        },
    },

    MainHeader: {
        Container: {
            background: personalizedColors.primaryPurple,
            color: personalizedColors.whiteText
        },
        Logo: {
            fill: brandTextColor
        }
    },

    EntryPoint: {
        Container: {
            background: personalizedColors.entryPointBackground,
            color: personalizedColors.whiteText
        }
    },

    PreEngagementCanvas: {
        Container: {
            background: personalizedColors.lighterBackground
        },

        Form: {
            SubmitButton: {
                background: personalizedColors.primaryButtonBackground,
                color: personalizedColors.whiteText
            }
        }
    }
};
