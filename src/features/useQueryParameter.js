import { useLocation } from "react-router-dom";

const useQueryParameter = (paramName) => {
    const location = useLocation();
    return new URLSearchParams(location.search).get(paramName);
};

export const searchQueryParamName = "search";
export default useQueryParameter;