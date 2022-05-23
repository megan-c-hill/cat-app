// Return cats following the given params
// available params breedId(string), dogFriendly(boolean), imageType(static, animated, any-type), pageSize(number), sort(default-sort, most-recent)
import {catAppGet} from "../../serverHelpers/catAppProxy";
import {mapCats} from "../../serverHelpers/cat-helpers";
import {checkAuthz} from "../../serverHelpers/auth-helpers";

const handler = async (req, res) => {
    if(!checkAuthz(req)) {
        return res.status(401);
    }

    const {pageSize, breedId, imageType, sortMethod} = req.query;
    
    let url = `/images/search?limit=${pageSize}`
    url = breedId !== 'any-breed' ? url + `&breed_ids=${breedId}` : url;
    url = imageType === 'animated' ? url + `&mime_types=gif` : imageType === 'static' ? url + '&mime_type=jpg,png' : url
    url = sortMethod === 'most-recent' ? url + '&order=desc' : url + '&order=rand'
    const catAppCats = await catAppGet(url);

    const mappedCats = mapCats(catAppCats);

    res.status(200).json(mappedCats)
}

export default handler;
