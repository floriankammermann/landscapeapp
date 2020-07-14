import _ from 'lodash';
import rp from 'request-promise'

async function main() {
  const result = await rp('https://api-gw.platform.linuxfoundation.org/project-service/v1/public/projects/cncf/members?status=Active', {
    json: true
  });
  const item = result[0];
  const itemsWithoutCrunchbase = result.filter( (x) => !x.CrunchBaseURL)
  const itemsWithCrunchbase = result.filter( (x) => !!x.CrunchBaseURL)

  // for (var x of _.orderBy(result, 'Name')) {
    // if (!x.Logo) {
      // console.info(x.Name);
    // }
  // }
  // console.info(itemsWithoutCrunchbase.length, itemsWithCrunchbase.length);

  const members = result.map( function(item) {
    return {
      name: item.Name + ' (Member)',
      homepage_url: item.Website,
      logo: item.Logo,
      crunchbase: item.CrunchBaseURL,
      membership: item.Membership.Name
    }
  });

  const groups =  _.groupBy(members, 'membership');
  console.info(groups);
  console.info(_.keys(groups));


  // console.info(members);
}
main();
