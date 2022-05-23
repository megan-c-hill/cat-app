// Return cats following the given params
// available params breedId(string), dogFriendly(boolean), imageType(static, animated, any-type), pageSize(number), sort(default-sort, most-recent)
import {catAppGet} from "../../serverHelpers/catAppProxy";
import {mapCats} from "../../serverHelpers/cat-helpers";
import {checkAuthz} from "../../serverHelpers/auth-helpers";
import {mapBreeds} from "../../serverHelpers/breed-helpers";

const handler = async (req, res) => {
    if(!checkAuthz(req)) {
        return res.status(401);
    }
    
    console.log('req.query', req.query);

    const {pageSize, breedId, imageType, sortMethod, dogFriendly} = req.query;
    
    console.log('req.query.imageType', req.query.imageType);
    
    let url = `/images/search?limit=${pageSize}`
    url = breedId !== 'any-breed' ? url + `&breed_ids=${breedId}` : url;
    url = imageType === 'animated' ? url + `&mime_types=gif` : imageType === 'static' ? url + '&mime_types=jpg,png' : url;
    url = sortMethod === 'most-recent' ? url + '&order=desc' : url + '&order=rand';

    console.log('dogFriendly', Boolean(dogFriendly));
    if(dogFriendly === 'true') {
        console.log('here');
        const apiBreeds = await catAppGet('/breeds');

        const mappedBreeds = mapBreeds(apiBreeds);

        url += '&breed_ids=';

        url += mappedBreeds.filter((breed) => breed.dogFriendly).map((breed) => breed.id).join('&')
    }
    
    console.log('url', url);

    const catAppCats = await catAppGet(url);

    const mappedCats = mapCats(catAppCats);

    res.status(200).json(mappedCats)
}

export default handler;
