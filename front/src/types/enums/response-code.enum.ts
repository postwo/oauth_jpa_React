enum ResponseCode{ // 응답 코드
    SUCCESS = "su",

    VALIDATION_FAIL = "VF",
    DUPLICATE_ID = "DI",

    SIGN_IN_FAIL = "SF",
    CERTIFICATION_FAIL = "CF",

    MAIL_FAIL = "MF",
    DATABASE_ERROR = "DBE"
};

export default ResponseCode;