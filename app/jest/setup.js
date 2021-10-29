jest.mock('react-i18next', () => {
    return {
        useTranslation: () => {
            return {
                t: jest.fn(),
            };
        },
    };
});
jest.mock('react-native-iphone-x-helper', () => ({
    getStatusBarHeight: jest.fn(),
    getBottomSpace: jest.fn(),
}));

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
    return {
        __esModule: true,
        A: true,
        namedExport: jest.fn(),
        default: 'mockedDefaultExport',
    };
});
jest.mock('react-native-vector-icons/MaterialIcons', () => {
    return {
        __esModule: true,
        A: true,
        namedExport: jest.fn(),
        default: 'mockedDefaultExport',
    };
});
jest.mock('react-native-vector-icons/Ionicons', () => {
    return {
        __esModule: true,
        A: true,
        namedExport: jest.fn(),
        default: 'mockedDefaultExport',
    };
});
jest.mock('react-native-vector-icons/FontAwesome5', () => {
    return {
        __esModule: true,
        A: true,
        namedExport: jest.fn(),
        default: 'mockedDefaultExport',
    };
});
jest.mock('react-native-modal', () => {
    jest.fn();
});
jest.mock('react-native-reanimated', () => {
    return {
        Animated: jest.fn(),
    };
});
jest.mock('@gorhom/bottom-sheet', () => {
    return {
        useScrollable: jest.fn(),
    };
});
jest.mock('react-native-simple-toast', () => {
    return {
        Toast: jest.fn(),
    };
});
jest.mock('react-native-responsive-screen', () => {
    return {
        heightPercentageToDP: jest.fn(),
        widthPercentageToDP: jest.fn(),
    };
});
jest.mock('@react-navigation/native', () => {
    return {
        useIsFocused: jest.fn(),
        useNavigation: jest.fn(),
        useRoute: jest.fn(),
    };
});
