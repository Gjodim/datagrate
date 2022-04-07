import {datagrateURL, url_helper} from "../helpers/url_handler";

describe('01_siteIsReachable', () => {
    it('Check Datagrate site is reachable', () => {
        url_helper.navigateToUrl(datagrateURL);
        url_helper.verifyUrl(datagrateURL);
    })
})