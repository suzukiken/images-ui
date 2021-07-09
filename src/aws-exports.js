const awsmobile = {
    "aws_project_region": "ap-northeast-1",
    "aws_cognito_identity_pool_id": "ap-northeast-1:16d1249e-1731-4398-b86d-84952a5cb066",
    "aws_cognito_region": "ap-northeast-1",
    "aws_user_pools_id": "ap-northeast-1_3MeHb2ISf",
    "aws_user_pools_web_client_id": "3b8st6o6dc4pfjlc4eua5ikfgt",
    "federationTarget": "COGNITO_USER_POOLS",
    "oauth": {
        "domain": "auth2.figmentresearch.com",
        "scope": [
            "aws.cognito.signin.user.admin",
            "email",
            "openid",
            "profile"
        ],
        "redirectSignIn": "https://c98.figmentresearch.com",
        "redirectSignOut": "https://c98.figmentresearch.com",
        "responseType": "code"
    },
    "aws_user_files_s3_bucket": "cdkimagesstragestack-bucket83908e77-1ssw1xf12vgy4",
    "aws_user_files_s3_bucket_region": "ap-northeast-1"
};

export default awsmobile;
