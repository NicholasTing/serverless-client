const dev = {
  STRIPE_KEY: "pk_test_B4De29tl4bDYYT4EMadNo49a",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "nick-league-uploads"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://dj4r932if1.execute-api.ap-southeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_bsVcHOTfF",
    APP_CLIENT_ID: "7dmm510490b6lcb8t7q1h2qblm",
    IDENTITY_POOL_ID: "ap-southeast-2:e3524d0b-c417-4c9a-9ab6-b3d6f4eeaffa"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_B4De29tl4bDYYT4EMadNo49a",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "nick-league-uploads"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://gj7c2hwqc0.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_pYtvRN3GO",
    APP_CLIENT_ID: "7ktji6ti3u2e3u2t6ip348tv85",
    IDENTITY_POOL_ID: "ap-southeast-2:fde45a22-f19c-4786-aca1-00302eae10cc"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};