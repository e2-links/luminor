/** DYNAMIC LINKS */
const AD = 'https://diva.teliacompany.net/jira/rest/internal/2/user/mention/search?issueKey=DCMT-5908&projectKey=DCMT&maxResults=20&query=${QUERY}';
const SWAGGER = 'http://k8slb03t.ddc.teliasonera.net/${ENV}/${PROJECT}/docs/swagger-ui/index.html#/';

/** Delete it */
const MAIN_APP = 'https://www.google.com/';
const LINK_1_TEST = 'https://www.google.com/search?q=Link+1&hl=en';
const LINK_2_TEST = 'https://www.google.com/search?q=Link+2&hl=en';
const LINK_3_TEST = 'https://www.google.com/search?q=Link+3&hl=en';
const LINK_1_PROD = 'https://www.google.com/search?q=Link+1&hl=en';
const LINK_2_PROD = 'https://www.google.com/search?q=Link+2&hl=en';
const LINK_3_PROD = 'https://www.google.com/search?q=Link+3&hl=en';
/**  */


/** STATIC LINKS */
const APIGEE_LOGIN = 'https://login.apigee.com/login';
const API_GARDEN_PROD = 'https://developer.teliacompany.io';
const API_GARDEN_TEST = 'https://stage.developer.teliacompany.io';
const API_MARKET_PROD = 'https://apimarketps.telia.se:9443/store/';
const API_MARKET_TEST = 'https://apimarketps-at.ddc.teliasonera.net:9443/store/';
const API_SUPPORT = `https://diva.teliacompany.net/`;
const APPLICATIONS = 'https://arscmdbprodweb.ddc.teliasonera.net/arsys/shared/redirect_h2_open.jsp';
const ARTIFACTORY = 'https://artifactory.dc.teliacompany.net/ui/packages';
const BENEFIT = 'https://teliacompanyspace.sharepoint.com/sites/PP/SitePages/Benefits(1).aspx';
const BITBUCKET_DASHBOARD = 'https://diva.teliacompany.net/bitbucket/dashboard';
const BOOK_STORE = 'https://diva.teliacompany.net/confluence/x/vse1B';
const CONFLUENCE = 'https://diva.teliacompany.net/confluence/';
const CONTENTFUL = 'https://app.contentful.com/';
const DEPLOYMENT_TOOLS = 'https://tools.dc.teliacompany.net/';
const DIVA = 'https://diva.teliacompany.net/';
const EASY_RETRO = 'https://easyretro.io/';
const ENTRYPOINT = 'https://entrypoint.teliacompany.net/';
const FIGMA = 'https://www.figma.com/';
const GITHUB = 'https://github.teliacompany.net/telia';
const GITHUB_TEAM = 'https://github.com/orgs/telia-company/teams/';
const GITHUB_PUBLIC = 'https://github.com/telia-company';
const GRAFANA_PROD = 'https://grafana.dc.teliacompany.net/';
const HRB = 'https://hrb.in.telecom.lt/leaf/web/login.jsp';
const INIT = 'https://arsprodweb.han.telia.se/arsys/forms/arsprod/inIT/DefaultAdministratorView/';
const INTRANET_LT = 'https://teliacompanyspace.sharepoint.com/sites/LT';
const INTRANET_SE = 'https://teliacompanyspace.sharepoint.com/sites/TGSLhotspot';
const JENKINS = 'https://jenkins.dc.teliacompany.net/';
const JFROG = 'https://jfrog.teliacompany.io/ui/login/';
const JIRA = 'https://diva.teliacompany.net/jira/';
const KUBERNETES = 'http://k8slb03t.ddc.teliasonera.net/dashboard/#/workloads?namespace=_all';
const LEARNING_PLURALSIGHT = 'https://app.pluralsight.com/library/';
const LOCAL_ACTUATOR = 'http://localhost:9000/actuator/health';
const LOCAL_API_DOCS = 'http://localhost:8080/v3/api-docs';
const LOCAL_SWAGGER = 'http://localhost:8080/swagger-ui/index.html';
const MOBILE = 'http://ws000webdev1.tcad.telia.se/TGSLMobileDev/Order';
const MS_OFFICE = 'https://www.office.com/?auth=2&home=1';
const NEWCOMER = 'https://diva.teliacompany.net/confluence/';
const OFFICE_VIBE = 'https://app.officevibe.com/portal/my/home';
const ORDER_PROCESSOR_TOOL_AT = 'https://opt-at.ddc.teliasonera.net:5570/app/orders';
const ORDER_PROCESSOR_TOOL_PROD = 'https://opt.ddc.teliasonera.net/app/orders';
const PACKAGES = 'https://artifactory.dc.teliacompany.net/artifactory/telia-releases/';
const PARKING_REGISTRATION = 'https://tgsl-parking.telia.io/';
const PROMETHEUS = 'https://k8slb01p.ddc.teliasonera.net/internal/prometheus/graph'
const SANDBOX_JAVA = 'https://www.sololearn.com/compiler-playground/java';
const SANDBOX_JAVASCRIPT = 'https://jsfiddle.net/cq01ruvp/1/';
const SANDBOX_KOTLIN = 'https://www.sololearn.com/compiler-playground/kotlin';
const SANDBOX_SASS = 'https://www.sassmeister.com';
const SANDBOX_TYPESCRIPT = 'https://www.typescriptlang.org/play';
const SPLUNK = 'https://tssplunkse.ddc.teliasonera.net/en-GB/account/login?return_to=%2Fen-GB%2Fapp%2Fhid100003852%2Fsearch';
const SUPPORT = 'https://teliacom.service-now.com/plaza?id=contact_support';
const TELIA_PASSWORD_CHANGE = 'https://password.telia.lt/?lang=ltt';
const TIGA = 'https://tiga.teliacompany.net/dashboard.aspx';
const VULNERABILITIES_REPORT = 'https://engagement-stats.dc.teliacompany.net/springfield-content-report/nimbus-prod/';
const WORKDAY = 'https://wd3.myworkday.com/teliacompany/';

const LINKS_SEARCH_MAP = new Map([
    ["API Market Test", API_MARKET_TEST],
    ["API Market Prod", API_MARKET_PROD],
    ["API Garden Test", API_GARDEN_TEST],
    ["API Garden Prod", API_GARDEN_PROD],
    ["APIGee Login", APIGEE_LOGIN],
    ["Applications(H2)", APPLICATIONS],
    ["Book Store", BOOK_STORE],
    ["HRB", HRB],
    ["TIGA", TIGA],
    ["Support", SUPPORT],
    ["Entrypoint", ENTRYPOINT],
    ["Intranet SE", INTRANET_SE],
    ["Intranet LT", INTRANET_LT],
    ["MS Office", MS_OFFICE],
    ["Workday", WORKDAY],
    ["Easy Retro", EASY_RETRO],
    ["Newcommer Guide", NEWCOMER],
    ["Employee Benefits", BENEFIT],
    ["Mobile Order", MOBILE],
    ["Car Parking", PARKING_REGISTRATION],
    ["Deployments", DEPLOYMENT_TOOLS],
    ["INIT System", INIT],
    ["Splunk Logs", SPLUNK],
    ["Grafana Prod", GRAFANA_PROD],
    ["Kubernetes", KUBERNETES],
    ["Prometheus", PROMETHEUS],
    ["Artifactory (old)", ARTIFACTORY],
    ["Artifactory (JFrog)", JFROG],
    ["API Support", API_SUPPORT],
    ["Jira", JIRA],
    ["Confluence", CONFLUENCE],
    ["BitBucket Dashboard", BITBUCKET_DASHBOARD],
    ["GitHub", GITHUB_PUBLIC],
    ["GitHub Enterprise", GITHUB],
    ["Jenkins", JENKINS],
    ["Figma", FIGMA],
    ["Diva", DIVA],
    ["Pluralsight", LEARNING_PLURALSIGHT],
    ["Office Vibe", OFFICE_VIBE],
    ["Order Processor Test", ORDER_PROCESSOR_TOOL_AT],
    ["Order Processor Prod", ORDER_PROCESSOR_TOOL_PROD],
    ["Password Change", TELIA_PASSWORD_CHANGE],
    ["Artifactory Packages", PACKAGES],
    ["Localhost (Swagger)", LOCAL_SWAGGER],
    ["Localhost (API Docs)", LOCAL_API_DOCS],
    ["Localhost (Actuator)", LOCAL_ACTUATOR],
    ["Vulnerabilities report", VULNERABILITIES_REPORT],
    ["Java Sandbox", SANDBOX_JAVA],
    ['Kotlin Sandbox', SANDBOX_KOTLIN],
    ["JavaScript Sandbox", SANDBOX_JAVASCRIPT],
    ["TypeScript Sandbox", SANDBOX_TYPESCRIPT],
    ["Sass Scss Sandbox", SANDBOX_SASS],
    ["Contentful", CONTENTFUL]
].sort());

const SANDBOXES = [
    { name: "Java Sandbox", link: SANDBOX_JAVA },
    { name: "Kotlin Sandbox", link: SANDBOX_KOTLIN },
    { name: "JavaScript Sandbox", link: SANDBOX_JAVASCRIPT },
    { name: "TypeScript Sandbox", link: SANDBOX_TYPESCRIPT },
    { name: "Sass Scss Sandbox", link: SANDBOX_SASS }
];
