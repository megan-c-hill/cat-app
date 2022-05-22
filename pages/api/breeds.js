// Return all available breeds to be used in a dropdown to filter cats
import {catAppGet} from "../../serverHelpers/catAppProxy";
import {mapBreeds} from "../../serverHelpers/breed-helpers";
import {checkAuthz} from "../../serverHelpers/auth-helpers";

const handler = async (req, res) => {
    if(!checkAuthz(req)) {
        return res.status(401);
    }
    const catAppBreeds = await catAppGet('/breeds');

    const mappedBreeds = mapBreeds(catAppBreeds);

    res.status(200).json(mappedBreeds)
}

export default handler;
