// Return all available breeds to be used in a dropdown to filter cats
import {catAppGet} from "../../serverHelpers/catAppProxy";
import {mapBreeds} from "../../serverHelpers/breed-helpers";

const handler = async (req, res) => {
    const catAppBreeds = await catAppGet('/breeds');

    const mappedBreeds = mapBreeds(catAppBreeds);

    res.status(200).json(mappedBreeds)
}

export default handler;
