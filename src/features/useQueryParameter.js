import { useLocation } from "react-router";

const useQueryParameter = (paramName) => {
    const location = "people";
    return new URLSearchParams(location.search).get(paramName);
};

export const searchQueryParamName = "search";
export default useQueryParameter;