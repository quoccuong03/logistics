export const ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI1Njc3NTkwNmMxMmJmYjE0MTYyOGYiLCJpYXQiOjE2ODA4MzcxMDgsImV4cCI6MTAzMjA4MzcxMDh9.KraDNEeIcrqaGFL1ifD5UmsG1F0wAHnSiOZI8FNi9pI";
export const HIDE_POPUP = "is_show_download";
export const HIDE_POPUP_TIP = "hideTip";
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const BASE_HOST = process.env.NEXT_PUBLIC_BASE_HOST || "";
export const BASE_API_URI = process.env.NEXT_PUBLIC_BASE_API_SERVER || "";
export const BASE_PATH_STATIC_LANDING_PAGE =
    process.env.NEXT_PUBLIC_STATIC_LANDING_PAGE || "";
export const REF_TYPE_PRODUCT = "PRODUCT";
export const REF_TYPE_STYLE = "STYLE";
export const REF_TYPE_EVENT = "EVENT";
export const configs: any = {
    android: "com.showniq://screen",
    ios: "com.showniq://screen",
    window: BASE_HOST,
    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2MxMDkzY2QyZmY1MDI2ZjVmMDU2ZjYiLCJkZXZpY2VJZCI6ImRlZXBsaW5rIiwiaWF0IjoxNjgwMDU2MDkxLCJleHAiOjEwMzIwMDU2MDkxfQ.vW0AjbJ3JEnQJS-hwxB90wK-JfHtvQhd1zFyFRmhp-Q",
    apiLink: BASE_API_URI,
    googlePlay: "market://details?id=com.showniq",
    appStore: "itms-appss://apps.apple.com/app/id6445944694?mt=8",
    downloadQr: `${BASE_HOST}/download`,
    detail: `${BASE_HOST}/detail`,
    downloadLink: {
        pc: `${BASE_HOST}/download`,
        ios: "itms-appss://apps.apple.com/app/id6445944694?mt=8",
        android: "market://details?id=com.showniq",
    },
};

export const RoutesNames = {
    LuckyWheel: "LuckyWheel",
    AuthLoading: "AuthLoading",
    LoadingStack: "LoadingStack",
    AuthStack: "AuthStack",
    MainStack: "MainStack",
    HomeStack: "HomeStack",
    Home: "Home",
    Loading: "Loading",
    Signin: "Signin",
    NickName: "NickName",
    SigninSuccess: "SigninSuccess",
    SigninComBack: "SigninComBack",
    PeopleFollwing: "PeopleFollwing",
    GroupName: "GroupName",
    SigninFinish: "SigninFinish",
    Profile: "Profile",
    MyFavoriteStyle: "MyFavoriteStyle",
    Chat: "Chat",
    Post: "Post",
    ChatIndividual: "ChatIndividual",
    ChatStack: "ChatStack",
    GroupStack: "GroupStack",
    Group: "Group",
    GroupEdit: "GroupEdit",
    GroupCreate: "GroupCreate",
    MyPageStack: "MyPageStack",
    MyPage: "MyPage",
    StoreStack: "StoreStack",
    CategoryStack: "CategoryStack",
    CloseStack: "CloseStack",
    Store: "Store",
    Category: "Category",
    Closet: "Closet",
    Search: "Search",
    Notification: "Notification",
    Message: "Message",
    Notice: "Notice",
    StyleDetail: "StyleDetail",
    BrandDetail: "BrandDetail",
    CustomerCenter: "CustomerCenter",
    Setting: "Setting",
    Information: "Information",
    EditCloset: "EditCloset",
    ProfileMyPage: "ProfileMyPage",
    MyFavoriteStyleMyPage: "MyFavoriteStyleMyPage",
    SigninSuccessMyPage: "SigninSuccessMyPage",
    RequestSuggestion: "RequestSuggestion",
    FAQ: "FAQ",
    SendEmail: "SendEmail",
    CallService: "CallService",
    FashionStarUserGuide: "FashionStarUserGuide",
    ServicePolicy: "ServicePolicy",
    PrivacyPolicy: "PrivacyPolicy",
    AboutFashionStar: "AboutFashionStar",
    OpenSourceLicense: "OpenSourceLicense",
    Chart: "Chart",
    ManagerInfo: "ManagerInfo",
    RemoveAccount: "RemoveAccount",
    More: "More",
    MyFavoriteStyleEdit: "MyFavoriteStyleEdit",
    EventDetail: "EventDetail",
    ProductNew: "ProductNew",
    LoginStack: "LoginStack",
    Login: "Login",
    CategoryDetail: "CategoryDetail",
    Preview: "Preview",
    GuideLevel: "GuideLevel",
    QNA: "QNA",
    Feedback: "Feedback",
    CategoryMain: "CategoryMain",
    CategoryStore: "CategoryStore",
    PointAndLevel: "PointAndLevel",
    Point: "Point",
    Ranking: "Ranking",
    Event: "Event",
    Report: "Report",
    Followed: "Followed",
    ProfileInfomation: "ProfileInfomation",
    ShopOffice: "ShopOffice",
    ProductDetail: "ProductDetail",
    VirtualAssistant: "VirtualAssistant",
    TypeBody: "TypeBody",
    ChooseColor: "ChooseColor",
    SearchStore: "SearchStore",
    SearchStoreStack: "SearchStoreStack",
    AllRate: "AllRate",
    LoginWith: "LoginWith",
};
